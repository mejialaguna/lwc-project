import { LightningElement, api } from "lwc";
import subscriptionImage from "@salesforce/resourceUrl/communitySubscriptionImage";
import { COMMUNITY_TABS } from "c/constants";

export default class subscriptionInfo extends LightningElement {
  @api activeTab;
  imageUrl = subscriptionImage;

  // Getters for conditional rendering
  get currentTabComponent() {
    if (!this.activeTab) return null;

    const currentTab = COMMUNITY_TABS.find(
      (tab) => tab.title.toLowerCase() === this.activeTab.toLowerCase()
    );
    return currentTab || null;
  }
}
