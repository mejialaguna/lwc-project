import { LightningElement, api } from "lwc";
import linkArrow from "@salesforce/resourceUrl/linkArrow";
import { COMMUNITY_TABS } from 'c/constants';

export default class subscriptionDetails extends LightningElement {
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
  }
}
