import { LightningElement, wire } from "lwc";
import { MessageContext } from "lightning/messageService";
import LmsUtils from "c/lmsUtils";

export default class ModalComponent extends LightningElement {
  /**
   * @wire(MessageContext) decorator relationship:
   * - @wire(MessageContext) is a decorator that reactively injects the Salesforce message context
   * - messageContext is the property that stores the injected value
   * - They work together: @wire FEEDS the value INTO messageContext
   * - messageContext is REQUIRED for LMS operations - it must be passed to subscribe/publish functions
   * - Without @wire injecting MessageContext, the messageContext property would be undefined
   * - This context is what identifies the component's domain for LMS communication
   */
  @wire(MessageContext)
  messageContext;

  /**
   * Controls whether the modal should be displayed.
   * Updated when messages are received from the LMS channel.
   */
  shouldModalOpen = false;

  /**
   * Called when the component is inserted into the DOM.
   * Subscribes to the ModalMessageChannel to listen for modal state changes.
   */
  connectedCallback() {
    console.log("=== SUBSCRIBER INITIALIZED ===");
    LmsUtils.subscribeModalMessage(this, this.handleMessage.bind(this));
  }

  /**
   * Message handler - called whenever a message is published to the ModalMessageChannel
   * Receives the message payload and updates shouldModalOpen based on the received value
   * this.bind(this) ensures the method retains the correct 'this' context when called
   */
  handleMessage(message) {
    this.shouldModalOpen = message.modalLmsData.value || false;
  }

  /**
   * Called when the component is removed from the DOM
   * Unsubscribes from the LMS channel to clean up and prevent memory leaks
   */
  disconnectedCallback() {
    LmsUtils.unsubscribeModalMessage(this);
  }
}
