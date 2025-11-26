import LmsUtils from "c/lmsUtils";
import { publish, subscribe, unsubscribe } from "lightning/messageService";
import COMMUNITYMODALMC from "@salesforce/messageChannel/ModalMessageChannel__c";

jest.mock("lightning/messageService", () => ({
  publish: jest.fn(),
  subscribe: jest.fn(),
  unsubscribe: jest.fn(),
  APPLICATION_SCOPE: {}
}));

describe("LmsUtils", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("publishModalMessage", () => {
    it("should publish a message with the correct structure", () => {
      const mockContext = {};
      const testValue = { test: "data" };

      LmsUtils.publishModalMessage(mockContext, testValue);

      expect(publish).toHaveBeenCalledWith(mockContext, COMMUNITYMODALMC, {
        modalLmsData: { value: testValue }
      });
    });
  });

  describe("subscribeModalMessage", () => {
    it("should subscribe to modal message channel", () => {
      const mockComponent = { messageContext: {} };
      const mockCallback = jest.fn();
      const mockSubscription = { id: "sub-123" };

      subscribe.mockReturnValue(mockSubscription);

      LmsUtils.subscribeModalMessage(mockComponent, mockCallback);

      expect(subscribe).toHaveBeenCalledWith(
        mockComponent.messageContext,
        COMMUNITYMODALMC,
        mockCallback,
        { scope: {} }
      );
      expect(mockComponent.subscription).toBe(mockSubscription);
    });
  });

  describe("unsubscribeModalMessage", () => {
    it("should unsubscribe and clear subscription", () => {
      const mockSubscription = { id: "sub-123" };
      const mockComponent = { subscription: mockSubscription };

      LmsUtils.unsubscribeModalMessage(mockComponent);

      expect(unsubscribe).toHaveBeenCalledWith(mockSubscription);
      expect(mockComponent.subscription).toBeNull();
    });

    it("should handle component with no subscription", () => {
      const mockComponent = { subscription: null };

      LmsUtils.unsubscribeModalMessage(mockComponent);

      expect(unsubscribe).not.toHaveBeenCalled();
      expect(mockComponent.subscription).toBeNull();
    });
  });
});
