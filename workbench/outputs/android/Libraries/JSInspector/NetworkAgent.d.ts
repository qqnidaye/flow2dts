import { $TypeOf } from "flow2dts-flow-types-polyfill";
// @flow
declare var InspectorAgent: $TypeOf<typeof $1>;
import $1 from "./InspectorAgent";
declare type RequestId = string;
declare type Headers = {
  [$f2tKey: string]: string;
};
declare class Interceptor {
  constructor: (agent: NetworkAgent) => void;
  getData: (requestId: string) => null | undefined | string;
  requestSent: (id: number, url: string, method: string, headers: Headers) => void;
  responseReceived: (id: number, url: string, status: number, headers: Headers) => void;
  dataReceived: (id: number, data: string) => void;
  loadingFinished: (id: number, encodedDataLength: number) => void;
  loadingFailed: (id: number, error: string) => void;
}
declare type EnableArgs = {
  maxResourceBufferSize?: number;
  maxTotalBufferSize?: number;
};
declare class NetworkAgent extends $2 {
  DOMAIN: string;
  enable: ($f2t1: EnableArgs) => void;
  disable: () => void;
  getResponseBody: ($f2t1: {
    requestId: RequestId;
  }) => {
    body: null | undefined | string;
    base64Encoded: boolean;
  };
  interceptor: () => Interceptor;
}
declare var $2: $TypeOf<typeof InspectorAgent>;
declare const $f2tExportDefault: $TypeOf<typeof NetworkAgent>;
export default $f2tExportDefault;