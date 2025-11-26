import { LightningElement, api, wire } from "lwc";
import { MessageContext } from "lightning/messageService";
import ModalLms from "c/lmsUtils";

export default class ModalContentComponent extends LightningElement {
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

  @api shouldShowCloseBtn = false;
  @api header = "";
  @api description = "";
  @api confirmationBtn = "";
  @api navigationBtn = "";

  handleModal() {
    ModalLms.publishModalMessage(this.messageContext, false);
  }
}
