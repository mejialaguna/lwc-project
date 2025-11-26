import { LightningElement } from "lwc";
import { loadStyle } from "lightning/platformResourceLoader";
import globalStyles from "@salesforce/resourceUrl/globalStyles";

export default class communityLayout extends LightningElement {
  /**
   * Load only global CSS variables
   * @param {LightningElement} component - The component instance (pass 'this')
   * @param {globalStyles} staticFile - The file instance (pass 'global css file')
   * @returns {Promise<void>}
   */
  connectedCallback() {
    loadStyle(this, globalStyles).catch((error) => {
      console.error("falied to load global styles", error);
    });
  }
}
