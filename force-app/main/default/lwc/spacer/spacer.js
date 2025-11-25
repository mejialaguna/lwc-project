import { LightningElement, api } from "lwc";

export default class Spacer extends LightningElement {
  sectionDevider = false;
  @api border = "1px solid var(--color-neutral-black)";
  @api width = "100%";
  @api margin = "0";

  get computedStyle() {
    return `
      border-bottom: ${this.border};
      width: ${this.width};
      margin: ${this.margin};
      align-self: normal;
    `;
  }
}
