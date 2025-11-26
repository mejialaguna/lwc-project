import { LightningElement, api } from "lwc";

export default class ModalContentComponent extends LightningElement {
  @api shouldModalOpen = false;
  @api shouldShowCloseBtn = false;
  @api header = "";
  @api description = "";
  @api confirmationBtn = "";
  @api navigationBtn = "";

  handleModal() {
    // Dispatch event to parent
    const modalEvent = new CustomEvent("handlemodal", {
      detail: { shouldOpen: !this.shouldModalOpen }
    });
    this.dispatchEvent(modalEvent);
  }
}
