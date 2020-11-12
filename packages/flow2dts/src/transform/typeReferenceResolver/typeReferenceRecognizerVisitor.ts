import { Visitor, types as t } from "@babel/core"
import { State } from "../state"

export function isRequireDeclaration(decl: t.VariableDeclarator): [string, t.StringLiteral] | null {
  if (decl.id.type === "Identifier" && decl && decl.init && decl.init.type === "CallExpression" && decl.init) {
    const callee = decl.init.callee
    if (callee.type === "Identifier" && callee.name === "require" && decl.init.arguments.length === 1) {
      return [decl.id.name, <t.StringLiteral>decl.init.arguments[0]]
    }
  }
  return null
}

export const typeReferenceRecognizerVisitor: Visitor<State> = {
  DeclareVariable: {
    enter(path, state) {
      const decl = path.node
      if (path.parentPath.node.type !== "Program") return
      if (!decl.id.typeAnnotation) return
      if (decl.id.typeAnnotation.type !== "TypeAnnotation") return
      if (decl.id.typeAnnotation.typeAnnotation.type !== "TypeofTypeAnnotation") return
      if (decl.id.typeAnnotation.typeAnnotation.argument.type !== "GenericTypeAnnotation") return

      if (state.typeReferences.records[decl.id.name]) {
        throw new Error(`Found duplicated variables in module: ${decl.id.name}`)
      }

      state.typeReferences.records[decl.id.name] = {
        variable: path.node,
        original: decl.id.typeAnnotation.typeAnnotation.argument.id,
        resolved: null,
      }
      decl.id.typeAnnotation = null
    },
  },
  VariableDeclaration: {
    enter(path, state) {
      const decl = path.node.declarations[0]
      const requireDecl = isRequireDeclaration(decl)
      if (requireDecl) {
        const [name] = requireDecl

        if (state.typeReferences.imports[name]) {
          throw new Error(`Found duplicated import in module: ${name}`)
        }
        state.typeReferences.imports[name] = decl
      }
    },
  },
}
