import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "wouter";
import {
  ArrowRight,
  Bot,
  CalendarCheck2,
  MessageCircle,
  Mic,
  MicOff,
  PhoneCall,
  Search,
  Send,
  X,
} from "lucide-react";
import { site } from "@/content/site";

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

type SpeechRecognitionAlternative = {
  transcript: string;
};

type SpeechRecognitionResult = {
  isFinal: boolean;
  0?: SpeechRecognitionAlternative;
};

type SpeechRecognitionEventLike = Event & {
  results: {
    length: number;
    [index: number]: SpeechRecognitionResult;
  };
};

type SpeechRecognitionInstance = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onend: (() => void) | null;
  onerror: (() => void) | null;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  abort: () => void;
  start: () => void;
  stop: () => void;
};

type SpeechRecognitionConstructor = new () => SpeechRecognitionInstance;

type ChatCta = {
  label: string;
  href: string;
  icon: "report" | "call" | "text" | "book";
};

type ChatMessage = {
  id: string;
  role: "assistant" | "visitor";
  text: string;
  ctas?: ChatCta[];
};

const initialMessages: ChatMessage[] = [
  {
    id: "assistant-intro",
    role: "assistant",
    text: "I can help you sort out AI search visibility, missed calls, booking, lead follow-up, and where to start without guessing.",
    ctas: [
      {
        label: "Free report",
        href: site.visibilityReportRequestUrl,
        icon: "report",
      },
      {
        label: "Text Civive",
        href: `sms:${site.phoneE164}`,
        icon: "text",
      },
    ],
  },
];

const promptChips = [
  "Can AI find my business?",
  "What does the report check?",
  "I miss calls after hours",
  "How do I get booked?",
];

const iconByCta: Record<ChatCta["icon"], typeof Search> = {
  book: CalendarCheck2,
  call: PhoneCall,
  report: Search,
  text: MessageCircle,
};

function normalizeInput(input: string) {
  return input.trim().replace(/\s+/g, " ");
}

function buildAssistantReply(input: string): Omit<ChatMessage, "id" | "role"> {
  const lower = input.toLowerCase();

  if (/(book|schedule|calendar|appointment|call me|talk|consult)/.test(lower)) {
    return {
      text: `Best next step is to request the report or call ${site.phone}. Bring the business name, website or Google profile, service area, and where leads are leaking.`,
      ctas: [
        { label: "Book a review", href: site.reviewBookingUrl, icon: "book" },
        { label: `Call ${site.phone}`, href: site.phoneHref, icon: "call" },
      ],
    };
  }

  if (/(text|sms|message)/.test(lower)) {
    return {
      text: "You can text Civive directly from your phone. Send the website or Google profile plus the main problem: visibility, missed calls, booking, reviews, or follow-up.",
      ctas: [
        { label: "Text Civive", href: `sms:${site.phoneE164}`, icon: "text" },
        { label: "Contact page", href: "/contact", icon: "book" },
      ],
    };
  }

  if (/(missed|call|phone|voicemail|after hours|answer)/.test(lower)) {
    return {
      text: "If calls are getting missed, the first fix is usually a faster response path: missed-call text back, intake questions, routing rules, booking handoff, and CRM notes so the lead does not go cold.",
      ctas: [
        {
          label: "Missed-call recovery",
          href: "/services/missed-call-recovery",
          icon: "report",
        },
        { label: `Call ${site.phone}`, href: site.phoneHref, icon: "call" },
      ],
    };
  }

  if (/(receptionist|voice|front desk|chatbot|intake|qualify)/.test(lower)) {
    return {
      text: "An AI receptionist makes sense when the business already has real calls, forms, chats, or booking requests to protect. The rules matter first: what to answer, what to collect, when to book, and when to escalate.",
      ctas: [
        {
          label: "AI receptionist",
          href: "/services/ai-receptionist",
          icon: "report",
        },
        { label: "Book a review", href: site.reviewBookingUrl, icon: "book" },
      ],
    };
  }

  if (/(price|pricing|cost|package|plan|budget)/.test(lower)) {
    return {
      text: "The cleanest starting point is the report because it shows whether the next paid work should be visibility cleanup, website/service pages, Google profile work, missed-call recovery, or CiviveOS setup.",
      ctas: [
        { label: "CiviveOS plans", href: "/civive-os-offer", icon: "report" },
        {
          label: "Free report",
          href: site.visibilityReportRequestUrl,
          icon: "book",
        },
      ],
    };
  }

  if (/(google|gbp|business profile|maps|local seo|reviews)/.test(lower)) {
    return {
      text: "For Google and Maps, Civive checks whether the profile, website, categories, services, service area, reviews, calls, and booking path all describe the same real business clearly.",
      ctas: [
        {
          label: "GBP optimization",
          href: "/services/google-business-profile-optimization",
          icon: "report",
        },
        {
          label: "Free report",
          href: site.visibilityReportRequestUrl,
          icon: "book",
        },
      ],
    };
  }

  if (/(schema|faq|structured|sitemap|robots|llms|crawl)/.test(lower)) {
    return {
      text: "For AI search and SEO, schema has to match visible content. Civive checks Organization, service, FAQ, article, breadcrumb, canonical, sitemap, robots, and llms.txt coverage without adding fake proof.",
      ctas: [
        {
          label: "Schema guide",
          href: "/resources/schema-for-ai-search-local-businesses",
          icon: "report",
        },
        {
          label: "Free report",
          href: site.visibilityReportRequestUrl,
          icon: "book",
        },
      ],
    };
  }

  if (
    /(chatgpt|gemini|perplexity|grok|ai search|find|found|show up|rank|visibility|recommend)/.test(
      lower
    )
  ) {
    return {
      text: "AI search visibility starts with whether public systems can understand who the business is, what it does, where it works, why it should be trusted, and how a buyer should take the next step.",
      ctas: [
        {
          label: "Visibility Report",
          href: "/ai-search-report",
          icon: "report",
        },
        {
          label: "Free report",
          href: site.visibilityReportRequestUrl,
          icon: "book",
        },
      ],
    };
  }

  return {
    text: "Start with the business goal: get found, get called, or get booked. Civive can inspect the public footprint, identify the highest-leverage gap, and map the next fix without inventing proof or adding noise.",
    ctas: [
      {
        label: "Free report",
        href: site.visibilityReportRequestUrl,
        icon: "report",
      },
      { label: `Call ${site.phone}`, href: site.phoneHref, icon: "call" },
    ],
  };
}

function openExternalLink(href: string) {
  window.location.href = href;
}

export default function GHLChatWidget() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [isListening, setIsListening] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState<string | null>(null);
  const messageListRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);

  const canSend = useMemo(() => normalizeInput(draft).length > 0, [draft]);
  const normalizedLocation = location.replace(/\/$/, "") || "/";
  const shouldHideChat = normalizedLocation === "/free-visibility-report";

  useEffect(() => {
    if (shouldHideChat) setIsOpen(false);
  }, [shouldHideChat]);

  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
      window.setTimeout(() => textareaRef.current?.focus(), 120);
    };

    window.addEventListener("civive:open-chat", handleOpenChat);
    return () => window.removeEventListener("civive:open-chat", handleOpenChat);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    messageListRef.current?.scrollTo({
      top: messageListRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [isOpen, messages]);

  useEffect(() => {
    return () => recognitionRef.current?.abort();
  }, []);

  if (shouldHideChat) {
    return null;
  }

  const submitMessage = (rawInput = draft) => {
    const input = normalizeInput(rawInput);
    if (!input) return;

    const visitorMessage: ChatMessage = {
      id: `visitor-${Date.now()}`,
      role: "visitor",
      text: input,
    };
    const reply = buildAssistantReply(input);
    const assistantMessage: ChatMessage = {
      id: `assistant-${Date.now()}`,
      role: "assistant",
      ...reply,
    };

    setMessages(current => [...current, visitorMessage, assistantMessage]);
    setDraft("");
    setVoiceStatus(null);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key !== "Enter" || event.shiftKey) return;
    event.preventDefault();
    submitMessage();
  };

  const toggleVoiceInput = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition ?? window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setVoiceStatus("Voice input is not available in this browser yet.");
      textareaRef.current?.focus();
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = event => {
      let transcript = "";
      for (let index = 0; index < event.results.length; index += 1) {
        transcript += event.results[index]?.[0]?.transcript ?? "";
      }
      setDraft(normalizeInput(transcript));
    };

    recognition.onerror = () => {
      setVoiceStatus(
        "I could not hear that clearly. Type it or try the mic again."
      );
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
      textareaRef.current?.focus();
    };

    setVoiceStatus("Listening...");
    setIsListening(true);
    recognition.start();
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-3 left-3 right-auto z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.16] bg-[linear-gradient(135deg,#19c2ff,#2f75ff)] text-white shadow-[0_20px_55px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19c2ff]/70 sm:bottom-6 sm:left-auto sm:right-6 sm:h-14 sm:w-14"
        aria-label="Open Civive AI chat"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-3 bottom-3 z-[70] mx-auto flex max-h-[calc(100svh-1.5rem)] w-auto max-w-[28rem] flex-col overflow-hidden rounded-[1.15rem] border border-white/[0.13] bg-[rgba(6,8,17,0.97)] text-white shadow-[0_28px_90px_rgba(0,0,0,0.56)] backdrop-blur-2xl sm:inset-auto sm:bottom-6 sm:right-6 sm:mx-0 sm:w-[27rem]"
            aria-label="Civive AI assistant"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] px-4 py-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#19c2ff]/30 bg-[#19c2ff]/12 text-[#9fdcff]">
                  <Bot className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="homepage-eyebrow text-[#9fdcff]">Civive AI</p>
                  <h2 className="mt-1 truncate text-base font-semibold leading-tight text-white">
                    Visibility and lead-response assistant
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-white/58 transition-colors hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                aria-label="Close Civive AI chat"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            <div
              ref={messageListRef}
              className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-4"
            >
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "visitor" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      message.role === "visitor"
                        ? "bg-[#19c2ff] text-[#03101c]"
                        : "border border-white/[0.08] bg-white/[0.045] text-white/78"
                    }`}
                  >
                    <p>{message.text}</p>
                    {message.ctas?.length ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {message.ctas.map(cta => {
                          const Icon = iconByCta[cta.icon];
                          return (
                            <a
                              key={`${message.id}-${cta.href}`}
                              href={cta.href}
                              onClick={event => {
                                event.preventDefault();
                                openExternalLink(cta.href);
                              }}
                              className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.07] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/[0.12]"
                            >
                              <Icon className="h-3.5 w-3.5 text-[#9fdcff]" />
                              {cta.label}
                              <ArrowRight className="h-3.5 w-3.5" />
                            </a>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/[0.08] px-4 py-4">
              <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
                {promptChips.map(prompt => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => submitMessage(prompt)}
                    className="shrink-0 rounded-full border border-white/[0.1] bg-white/[0.045] px-3 py-2 text-xs font-medium text-white/72 transition-colors hover:bg-white/[0.09] hover:text-white"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <div className="rounded-[1rem] border border-white/[0.1] bg-white/[0.045] p-2">
                <textarea
                  ref={textareaRef}
                  value={draft}
                  onChange={event => setDraft(event.target.value)}
                  onKeyDown={handleKeyDown}
                  rows={2}
                  className="min-h-[3rem] w-full resize-none bg-transparent px-2 py-2 text-sm leading-6 text-white outline-none placeholder:text-white/38"
                  placeholder="Ask about visibility, missed calls, booking, or AI reception."
                  aria-label="Ask Civive AI"
                />
                <div className="flex items-center justify-between gap-3">
                  <p
                    className="min-h-5 text-xs text-white/42"
                    aria-live="polite"
                  >
                    {voiceStatus ?? " "}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={toggleVoiceInput}
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19c2ff]/70 ${
                        isListening
                          ? "border-[#19c2ff]/60 bg-[#19c2ff]/18 text-[#9fdcff]"
                          : "border-white/[0.11] bg-white/[0.05] text-white/72 hover:bg-white/[0.1] hover:text-white"
                      }`}
                      aria-label={
                        isListening ? "Stop voice input" : "Start voice input"
                      }
                    >
                      {isListening ? (
                        <MicOff className="h-4.5 w-4.5" />
                      ) : (
                        <Mic className="h-4.5 w-4.5" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => submitMessage()}
                      disabled={!canSend}
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#19c2ff,#2f75ff)] px-4 text-sm font-semibold text-white transition-opacity disabled:opacity-40"
                    >
                      Send
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
