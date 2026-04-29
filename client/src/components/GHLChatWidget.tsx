import { useEffect } from "react";

declare global {
  interface Window {
    leadConnector?: {
      chatWidget?: {
        openWidget?: () => void;
        closeWidget?: () => void;
      };
    };
  }
}

const CHAT_WIDGET_SCRIPT_ID = "civive-ghl-chat-widget";
const GHL_WIDGET_LOADER_URL = "https://widgets.leadconnectorhq.com/loader.js";
const GHL_CHAT_RESOURCES_URL = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
const GHL_LOAD_STRATEGY = "immediate";

function openHighLevelWidget() {
  if (window.leadConnector?.chatWidget?.openWidget) {
    window.leadConnector.chatWidget.openWidget();
    return true;
  }

  return false;
}

function scrollToContact() {
  const element = document.querySelector("#contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function GHLChatWidget() {
  useEffect(() => {
    const widgetId = (import.meta.env.VITE_GHL_CHAT_WIDGET_ID as string | undefined)?.trim();

    if (widgetId && !document.getElementById(CHAT_WIDGET_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = CHAT_WIDGET_SCRIPT_ID;
      script.src = GHL_WIDGET_LOADER_URL;
      script.async = true;
      script.dataset.resourcesUrl = GHL_CHAT_RESOURCES_URL;
      script.dataset.widgetId = widgetId;
      script.dataset.loadStrategy = GHL_LOAD_STRATEGY;
      document.body.appendChild(script);
    }

    const handleOpenChat = () => {
      if (openHighLevelWidget()) return;

      window.setTimeout(() => {
        if (openHighLevelWidget()) return;

        scrollToContact();
      }, 600);
    };

    window.addEventListener("civive:open-chat", handleOpenChat);
    return () => window.removeEventListener("civive:open-chat", handleOpenChat);
  }, []);

  return null;
}
