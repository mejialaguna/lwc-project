import InquirerLogo from "c/inquirerLogo";
import CommunityFooter from "c/communityFooter";

// Subscription tabs configuration
export const COMMUNITY_TABS = {
  "My Subscription": {
    title: "My Subscription",
    component: InquirerLogo
  },
  "My Account": {
    title: "My Account",
    component: "inquirerLogo"
  },
  "Make a Payment": {
    title: "Make a Payment",
    component: CommunityFooter
  },
  "Email Preferences": {
    title: "Email Preferences",
    component: "inquirerLogo",
    url: "https://www.google.com"
  },
  "Contact Us": {
    title: "Contact Us",
    component: "inquirerLogo",
    url: "https://www.google.com"
  },
  "Help Topics": {
    title: "Help Topics",
    component: "inquirerLogo",
    url: "https://www.google.com"
  }
};
