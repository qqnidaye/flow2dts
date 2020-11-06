import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
declare type NativeProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ViewProps & {
  backgroundColor?: null | undefined | ColorValue;
}>;
declare export default HostComponent;