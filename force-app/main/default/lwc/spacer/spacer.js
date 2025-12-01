import { LightningElement, api } from "lwc";

export default class Spacer extends LightningElement {
  @api customStyles = {};

  renderedCallback() {
    const element = this.template.querySelector(".spacer");

    if (element) {
      element.style.cssText = this.computedStyle;
    }
  }

  get computedStyle() {
    return Object.entries(this.customStyles)
      .map(([key, value]) => `${key}: ${value}`)
      .join(" ");
  }
}
