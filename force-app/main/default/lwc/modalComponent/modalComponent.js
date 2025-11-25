import { LightningElement, api } from "lwc";

export default class C2pModalComponent extends LightningElement {
  @api shouldModalOpen;
  handleModal() {
    // Dispatch event to parent
    const modalEvent = new CustomEvent("handlemodal", {
      detail: { shouldOpen: !this.shouldModalOpen }
    });
    this.dispatchEvent(modalEvent);
  }
}
