import { LightningElement, api, wire } from "lwc";
import linkArrow from "@salesforce/resourceUrl/linkArrow";
import { MessageContext } from "lightning/messageService";
import ModalLms from "c/lmsUtils";
import { COMMUNITY_TABS } from "c/constants";

export default class subscriptionDetails extends LightningElement {
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

  @api activeTab;
  svgArrow = linkArrow;

  // Computed getter that adds the class to each tab
  get tabs() {
    return COMMUNITY_TABS.map((tab) => ({
      ...tab,
      cssClass: `details ${tab.title === this.activeTab ? "active" : ""}`
    }));
  }

  handleClick(event) {
    const tabName = event.currentTarget.getAttribute("data-tab");

    // Dispatch event to parent
    const newActiveTabEvent = new CustomEvent("tabchange", {
      detail: { tabName }
    });
    this.dispatchEvent(newActiveTabEvent);

    ModalLms.publishModalMessage(this.messageContext, true);
  }
}
