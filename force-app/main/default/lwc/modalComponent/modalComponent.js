import { LightningElement, api } from "lwc";
import { loadStyle } from "lightning/platformResourceLoader";
import modalGlobalStyles from "@salesforce/resourceUrl/modalGlobalStyles";

export default class C2pModalComponent extends LightningElement {
  @api shouldModalOpen;
  hasCssLoaded = false;

  /**
   * Load only global CSS variables
   * @param {LightningElement} component - The component instance (pass 'this')
   * @param {globalStyles} staticFile - The file instance (pass 'global css file')
   * @returns {Promise<void>}
   */
  connectedCallback() {
    if (this.hasCssLoaded) return;

    loadStyle(this, modalGlobalStyles)
      .then(() => {
        this.hasCssLoaded = true;
      })
      .catch((error) => {
        console.error("falied to load modal global styles", error);
      });
  }

  handleModal() {
    // Dispatch event to parent
    const modalEvent = new CustomEvent("handlemodal", {
      detail: { shouldOpen: !this.shouldModalOpen }
    });
    this.dispatchEvent(modalEvent);
  }
}
