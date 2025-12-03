import { LightningElement } from "lwc";
// import FOOTER_HTML_URL from "@salesforce/resourceUrl/footerComponent";

export default class CommunityFooter extends LightningElement {
  // async connectedCallback() {
  //   // Check for cached/preloaded footer
  //   const footerHtml = await this.getFooter();
  //   const wrapper = this.template.querySelector(".wrapper");
  //   if (wrapper && footerHtml) {
  //     wrapper.appendChild(footerHtml);
  //   }
  // }
  // async getFooter() {
  //   try {
  //     const res = await fetch(FOOTER_HTML_URL);
  //     const html = await res.text();
  //     const parser = new DOMParser();
  //     const doc = parser.parseFromString(html, "text/html");
  //     const footer = doc.querySelector("footer");
  //     return footer ? footer.cloneNode(true) : null;
  //   } catch (err) {
  //     console.error("Error fetching footer:", err);
  //     return null;
  //   }
  // }
}
