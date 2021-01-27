import $2 from "./EventSubscription";
import EventEmitter$f2tTypeof from "./EventEmitter";
declare type EventEmitter = typeof EventEmitter$f2tTypeof;
import EventSubscriptionVendor$f2tTypeof from "./EventSubscriptionVendor";
declare type EventSubscriptionVendor = typeof EventSubscriptionVendor$f2tTypeof;
declare class EmitterSubscription extends $2 {
  emitter: EventEmitter;
  listener: Function;
  context?: null | undefined | Object;

  /**
   * @param {EventEmitter} emitter - The event emitter that registered this
   *   subscription
   * @param {EventSubscriptionVendor} subscriber - The subscriber that controls
   *   this subscription
   * @param {function} listener - Function to invoke when the specified event is
   *   emitted
   * @param {*} context - Optional context object to use when invoking the
   *   listener
   */
  constructor(emitter: EventEmitter, subscriber: EventSubscriptionVendor, listener: Function, context?: null | undefined | Object);

  /**
   * Removes this subscription from the emitter that registered it.
   * Note: we're overriding the `remove()` method of EventSubscription here
   * but deliberately not calling `super.remove()` as the responsibility
   * for removing the subscription lies with the EventEmitter.
   */
  remove(): void;
}
declare const $f2tExportDefault: EmitterSubscription;
export default $f2tExportDefault;