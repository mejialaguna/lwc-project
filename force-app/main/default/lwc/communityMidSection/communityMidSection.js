import { LightningElement } from 'lwc';

export default class CommunityMidSection extends LightningElement {
  activeTab = 'My Subscription';
  shouldModalOpen = true;
  handleTabChange(event) {
    this.activeTab = event.detail.tabName;
  }
  handleModal(event){
    this.shouldModalOpen = event.detail.shouldOpen;
  }
}