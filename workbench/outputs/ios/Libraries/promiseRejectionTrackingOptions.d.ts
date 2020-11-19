import { $TypeOf } from "flow2dts-flow-types-polyfill";
// @flow
import { enable as enable$f2tTypeof } from "promise/setimmediate/rejection-tracking";
declare type enable = $TypeOf<typeof enable$f2tTypeof>;
declare type ExtractOptionsType = <P>($f2t1: (options?: null | undefined | P) => void) => P;
declare var rejectionTrackingOptions: Parameters<enable>[0];
declare const $f2tExportDefault: $TypeOf<typeof rejectionTrackingOptions>;
export default $f2tExportDefault;