import { LightningElement } from "lwc";
import { loadStyle } from "lightning/platformResourceLoader";
import globalStyles from "@salesforce/resourceUrl/globalStyles";

export default class communityLayout extends LightningElement {
  hasLoaded = false;
  spacerCommonCustomStyles = {
    "border-bottom": "1px solid var(--light-charcoal-gray);"
  };
  spacerCustomStyles = {
    ...this.spacerCommonCustomStyles,
    margin: "0 0 var(--spacing-xlg) 0;"
  };

  /**
   * Load only global CSS variables
   * @param {LightningElement} component - The component instance (pass 'this')
   * @param {globalStyles} staticFile - The file instance (pass 'global css file')
   * @returns {Promise<void>}
   */
  connectedCallback() {
    if (!this.hasLoaded) {
      loadStyle(this, globalStyles)
        .then(() => {
          this.hasLoaded = true;
        })
        .catch((error) => {
          console.error("falied to load global styles", error);
        });
    }
  }
}
