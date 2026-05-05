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
const CHAT_WIDGET_LOAD_DELAY_MS = 4000;

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

function appendHighLevelWidgetScript(widgetId: string) {
  if (document.getElementById(CHAT_WIDGET_SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = CHAT_WIDGET_SCRIPT_ID;
  script.src = GHL_WIDGET_LOADER_URL;
  script.async = true;
  script.dataset.resourcesUrl = GHL_CHAT_RESOURCES_URL;
  script.dataset.widgetId = widgetId;
  document.body.appendChild(script);
}

export default function GHLChatWidget() {
  useEffect(() => {
    const widgetId = (import.meta.env.VITE_GHL_CHAT_WIDGET_ID as string | undefined)?.trim();
    let timeoutId: number | undefined;

    const scheduleWidgetLoad = () => {
      if (!widgetId) return;
      timeoutId = window.setTimeout(() => {
        appendHighLevelWidgetScript(widgetId);
      }, CHAT_WIDGET_LOAD_DELAY_MS);
    };

    if (widgetId) {
      if (document.readyState === "complete") {
        scheduleWidgetLoad();
      } else {
        window.addEventListener("load", scheduleWidgetLoad, { once: true });
      }
    }

    const handleOpenChat = () => {
      if (openHighLevelWidget()) return;

      scrollToContact();
    };

    window.addEventListener("civive:open-chat", handleOpenChat);
    return () => {
      window.removeEventListener("civive:open-chat", handleOpenChat);
      window.removeEventListener("load", scheduleWidgetLoad);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return null;
}
