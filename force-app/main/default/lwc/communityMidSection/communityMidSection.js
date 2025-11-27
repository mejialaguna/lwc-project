import { LightningElement, api } from "lwc";

export default class CommunityMidSection extends LightningElement {
  @api communityTabs;
  activeTab = "My Subscription";

  handleTabChange(event) {
    this.activeTab = event.detail.tabName;
  }
}
