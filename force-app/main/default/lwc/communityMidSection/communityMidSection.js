import { LightningElement } from "lwc";

export default class CommunityMidSection extends LightningElement {
  activeTab = "My Subscription";

  handleTabChange(event) {
    this.activeTab = event.detail.tabName;
  }
}
