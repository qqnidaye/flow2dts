import { $TypeOf } from "flow2dts-flow-types-polyfill";
// @flow
declare type ExtraData = {
  [key: string]: string;
};
declare type SourceCallback = () => string;
declare type DebugData = {
  extras: ExtraData;
  files: ExtraData;
};
declare class BugReporting {
  addSource(key: string, callback: SourceCallback): {
    remove: () => void;
  };
  addFileSource(key: string, callback: SourceCallback): {
    remove: () => void;
  };
  collectExtraData(): DebugData;
}
declare const $f2tExportDefault: $TypeOf<typeof BugReporting>;
export default $f2tExportDefault;