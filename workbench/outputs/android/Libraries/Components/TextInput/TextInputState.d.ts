import { $TypeOf } from "flow2dts-flow-types-polyfill";
// @flow
declare var React: $TypeOf<typeof $1>;
import $1 from "react";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
declare type ComponentRef = React.ElementRef<HostComponent<unknown>>;
declare function currentlyFocusedInput(): null | undefined | ComponentRef;
declare function currentlyFocusedField(): null | undefined | number;
declare function focusInput(textField: null | undefined | ComponentRef): void;
declare function blurInput(textField: null | undefined | ComponentRef): void;
declare function focusField(textFieldID: null | undefined | number): void;
declare function blurField(textFieldID: null | undefined | number): void;
declare function focusTextInput(textField: null | undefined | ComponentRef): void;
declare function blurTextInput(textField: null | undefined | ComponentRef): void;
declare function registerInput(textField: ComponentRef): void;
declare function unregisterInput(textField: ComponentRef): void;
declare function isTextInput(textField: ComponentRef): boolean;
declare const $f2tExportDefault:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  currentlyFocusedInput: $TypeOf<typeof currentlyFocusedInput>;
  focusInput: $TypeOf<typeof focusInput>;
  blurInput: $TypeOf<typeof blurInput>;
  currentlyFocusedField: $TypeOf<typeof currentlyFocusedField>;
  focusField: $TypeOf<typeof focusField>;
  blurField: $TypeOf<typeof blurField>;
  focusTextInput: $TypeOf<typeof focusTextInput>;
  blurTextInput: $TypeOf<typeof blurTextInput>;
  registerInput: $TypeOf<typeof registerInput>;
  unregisterInput: $TypeOf<typeof unregisterInput>;
  isTextInput: $TypeOf<typeof isTextInput>;
};
export default $f2tExportDefault;