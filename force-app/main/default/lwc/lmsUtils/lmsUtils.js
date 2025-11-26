// This channel is used to enable communication between different LWC components without direct parent-child relationships.
import COMMUNITYMODALMC from "@salesforce/messageChannel/ModalMessageChannel__c";
import {
  publish,
  subscribe,
  unsubscribe,
  APPLICATION_SCOPE
} from "lightning/messageService";

const LmsUtils = {
  /**
   * Publishes a message to the ModalMessageChannel.
   * Used to send modal-related data to other components listening on this channel.
   * @param {Object} context - The message context from the component (this.messageContext)
   * @param {*} value - The data payload to be sent in the modal message
   * COMMUNITYMODALMC is passed to publish/subscribe functions to specify which channel to use for communication.
   */
  publishModalMessage(context, value) {
    const message = {
      modalLmsData: { value }
    };
    publish(context, COMMUNITYMODALMC, message);
  },

  /**
   * Subscribes a component to the ModalMessageChannel.
   * Allows the component to listen for modal messages published by other components.
   * @param {Object} component - The LWC component instance
   * @param {Function} callback - The function to execute when a message is received on the channel
   * COMMUNITYMODALMC is passed to publish/subscribe functions to specify which channel to use for communication.
   */
  subscribeModalMessage(component, callback) {
    component.subscription = subscribe(
      component.messageContext,
      COMMUNITYMODALMC,
      callback,
      {
        scope: APPLICATION_SCOPE
      }
    );
  },

  /**
   * Unsubscribes a component from the ModalMessageChannel.
   * Should be called in connectedCallback or disconnectedCallback to clean up subscriptions and prevent memory leaks.
   * @param {Object} component - The LWC component instance with an active subscription
   */
  unsubscribeModalMessage(component) {
    if (component.subscription) {
      unsubscribe(component.subscription);
      component.subscription = null;
    }
  }
};

export default LmsUtils;
