// @flow
declare type ModuleConfig = [string
/* name */
, null | undefined | Object
/* constants */
, null | undefined | ReadonlyArray<string>
/* functions */
, null | undefined | ReadonlyArray<number>
/* promise method IDs */
, null | undefined | ReadonlyArray<number>
/* sync method IDs */
];
declare type MethodType = "async" | "promise" | "sync";
export interface NativeModules {
  [moduleName: string]: Object;
}
declare var NativeModules: NativeModules;
export type { ModuleConfig };
export type { MethodType };
declare const $f2tExportDefault: typeof NativeModules;
export default $f2tExportDefault;