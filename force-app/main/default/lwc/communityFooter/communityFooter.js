import { LightningElement } from "lwc";

export default class CommunityFooter extends LightningElement {
  footerNode = null;

  async connectedCallback() {
    await this.getFooter();

    const wrapper = this.template.querySelector(".wrapper");

    if (wrapper && this.footerNode) {
      wrapper.appendChild(this.footerNode);
    }
  }

  async getFooter() {
    try {
      const res = await fetch("https://stage.fusion.inquirer.com");
      const html = await res.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const footer = doc.querySelector("footer");

      // Store DOM node instead of an HTML string
      this.footerNode = footer ? footer.cloneNode(true) : null;

      console.log("Parsed footer:", this.footerNode);
    } catch (err) {
      console.error("Error fetching footer:", err);
    }
  }
}
