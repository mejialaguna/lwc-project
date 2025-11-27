import { LightningElement, api } from "lwc";
import subscriptionImage from "@salesforce/resourceUrl/communitySubscriptionImage";

export default class subscriptionInfo extends LightningElement {
  @api communityTabs;
  @api activeTab;
  imageUrl = subscriptionImage;

  // Getters for conditional rendering
  get currentTabComponent() {
    if (!this.activeTab) return null;

    const currentComponent = this.communityTabs[this.activeTab];
    return currentComponent;
  }

  // Check if the component property exists and is valid
  get hasValidComponent() {
    return (
      this.currentTabComponent &&
      this.currentTabComponent.component &&
      typeof this.currentTabComponent.component === "string" &&
      this.currentTabComponent.component.trim() !== ""
    );
  }
}
