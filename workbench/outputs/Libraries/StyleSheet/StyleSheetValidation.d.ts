declare const DeprecatedImageStylePropTypes;
declare const DeprecatedTextStylePropTypes;
declare const DeprecatedViewStylePropTypes;
declare const invariant;
declare var ReactPropTypesSecret: string;
declare class StyleSheetValidation {
  validateStyleProp: (prop: string, style: Object, caller: string) => void;
  validateStyle: (name: string, styles: Object) => void;
  addValidStylePropTypes: (stylePropTypes: $FlowFixMe) => void;
}
declare var styleError: (message1: $FlowFixMe, style: $FlowFixMe, caller?: $FlowFixMe, message2?: $FlowFixMe) => void;
declare var allStylePropTypes: $FlowFixMe;
declare const $f2tExportDefault: typeof StyleSheetValidation;
export default $f2tExportDefault;