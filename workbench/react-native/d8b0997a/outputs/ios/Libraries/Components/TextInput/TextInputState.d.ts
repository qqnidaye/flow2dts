import { $TypeOf } from "flow2dts-flow-types-polyfill";
import $1 from "react";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
declare type ComponentRef = $1.ElementRef<HostComponent<{}>>;
declare function currentlyFocusedInput(): null | undefined | ComponentRef;
declare function currentlyFocusedField(): null | undefined | number;
declare function focusInput(textField?: null | undefined | ComponentRef): void;
declare function blurInput(textField?: null | undefined | ComponentRef): void;
declare function focusField(textFieldID?: null | undefined | number): void;
declare function blurField(textFieldID?: null | undefined | number): void;
declare function focusTextInput(textField?: null | undefined | ComponentRef): void;
declare function blurTextInput(textField?: null | undefined | ComponentRef): void;
declare function registerInput(textField: ComponentRef): void;
declare function unregisterInput(textField: ComponentRef): void;
declare function isTextInput(textField: ComponentRef): boolean;
declare namespace $f2tExportDefaultRedirect {
  export const $f2tHidden_currentlyFocusedInput: $TypeOf<typeof currentlyFocusedInput>;
  export const $f2tHidden_focusInput: $TypeOf<typeof focusInput>;
  export const $f2tHidden_blurInput: $TypeOf<typeof blurInput>;
  export const $f2tHidden_currentlyFocusedField: $TypeOf<typeof currentlyFocusedField>;
  export const $f2tHidden_focusField: $TypeOf<typeof focusField>;
  export const $f2tHidden_blurField: $TypeOf<typeof blurField>;
  export const $f2tHidden_focusTextInput: $TypeOf<typeof focusTextInput>;
  export const $f2tHidden_blurTextInput: $TypeOf<typeof blurTextInput>;
  export const $f2tHidden_registerInput: $TypeOf<typeof registerInput>;
  export const $f2tHidden_unregisterInput: $TypeOf<typeof unregisterInput>;
  export const $f2tHidden_isTextInput: $TypeOf<typeof isTextInput>;
}
declare namespace $f2tExportDefault {
  export const currentlyFocusedInput: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_currentlyFocusedInput>;
  export type currentlyFocusedInput = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_currentlyFocusedInput>;
  export const focusInput: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_focusInput>;
  export type focusInput = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_focusInput>;
  export const blurInput: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_blurInput>;
  export type blurInput = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_blurInput>;
  export const currentlyFocusedField: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_currentlyFocusedField>;
  export type currentlyFocusedField = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_currentlyFocusedField>;
  export const focusField: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_focusField>;
  export type focusField = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_focusField>;
  export const blurField: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_blurField>;
  export type blurField = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_blurField>;
  export const focusTextInput: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_focusTextInput>;
  export type focusTextInput = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_focusTextInput>;
  export const blurTextInput: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_blurTextInput>;
  export type blurTextInput = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_blurTextInput>;
  export const registerInput: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_registerInput>;
  export type registerInput = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_registerInput>;
  export const unregisterInput: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_unregisterInput>;
  export type unregisterInput = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_unregisterInput>;
  export const isTextInput: $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_isTextInput>;
  export type isTextInput = $TypeOf<typeof $f2tExportDefaultRedirect.$f2tHidden_isTextInput>;
}
export default $f2tExportDefault;