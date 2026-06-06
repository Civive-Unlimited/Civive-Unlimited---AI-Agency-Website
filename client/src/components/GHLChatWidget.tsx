import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
  type KeyboardEvent,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "wouter";
import {
  ArrowRight,
  Bot,
  CalendarCheck2,
  CheckCircle,
  MessageCircle,
  Mic,
  MicOff,
  PhoneCall,
  RotateCcw,
  Search,
  Send,
  X,
} from "lucide-react";
import { site } from "@/content/site";
import { trackWebsiteEvent } from "@/lib/tracking";

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
  href?: string;
  action?: "submit" | "restart";
  icon: "report" | "call" | "text" | "book" | "send" | "restart";
};

type ChatMessage = {
  id: string;
  role: "assistant" | "visitor";
  text: string;
  ctas?: ChatCta[];
};

type IntakeStep =
  | "context"
  | "fullName"
  | "companyName"
  | "website"
  | "serviceArea"
  | "serviceInterest"
  | "contact"
  | "smsConsent"
  | "confirm"
  | "submitted";

type LeadDraft = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  website: string;
  serviceArea: string;
  serviceInterest: string;
  message: string;
  smsConsent: boolean;
};

const emptyLeadDraft: LeadDraft = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  website: "",
  serviceArea: "",
  serviceInterest: "",
  message: "",
  smsConsent: false,
};

const initialMessages: ChatMessage[] = [
  {
    id: "assistant-intro",
    role: "assistant",
    text: "Tell me what is going on with the business. I can collect the visibility, missed-call, booking, or follow-up request here and send Civive the details.",
  },
];

const promptChips = [
  "Check my AI visibility",
  "I miss calls after hours",
  "Leads are not booking",
  "My follow-up is messy",
];

const iconByCta: Record<ChatCta["icon"], ComponentType<{ className?: string }>> =
  {
    book: CalendarCheck2,
    call: PhoneCall,
    report: Search,
    restart: RotateCcw,
    send: Send,
    text: MessageCircle,
  };

function normalizeInput(input: string) {
  return input.trim().replace(/\s+/g, " ");
}

function makeId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function extractEmail(input: string) {
  return input.match(/[^\s@]+@[^\s@]+\.[^\s@]+/)?.[0]?.toLowerCase() || "";
}

function extractPhone(input: string) {
  const phone = input.match(/(?:\+?1[\s.-]?)?(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}\b/)?.[0];
  return phone ? phone.trim() : "";
}

function includesYes(input: string) {
  return /\b(yes|yep|yeah|sure|ok|okay|agree|consent|send|submit)\b/i.test(
    input
  );
}

function includesNo(input: string) {
  return /\b(no|nope|not now|do not|don't|dont|skip)\b/i.test(input);
}

function buildSummary(draft: LeadDraft) {
  return [
    `Business: ${draft.companyName}`,
    `Name: ${draft.fullName}`,
    `Website/GBP: ${draft.website}`,
    `Area: ${draft.serviceArea || "not provided"}`,
    `Main issue: ${draft.serviceInterest || draft.message}`,
    `Contact: ${draft.email} / ${draft.phone}`,
    `SMS consent: ${draft.smsConsent ? "yes" : "no"}`,
  ].join("\n");
}

function getNextQuestion(step: IntakeStep, draft: LeadDraft): ChatMessage {
  if (step === "fullName") {
    return {
      id: makeId("assistant"),
      role: "assistant",
      text: "Got it. What is your name?",
    };
  }

  if (step === "companyName") {
    return {
      id: makeId("assistant"),
      role: "assistant",
      text: "What is the business name?",
    };
  }

  if (step === "website") {
    return {
      id: makeId("assistant"),
      role: "assistant",
      text: "Send the website or Google Business Profile link so I can attach the public footprint.",
    };
  }

  if (step === "serviceArea") {
    return {
      id: makeId("assistant"),
      role: "assistant",
      text: "What city or service area should Civive look at first?",
    };
  }

  if (step === "serviceInterest") {
    return {
      id: makeId("assistant"),
      role: "assistant",
      text: "What feels most broken right now: getting found, missed calls, booking, reviews, website clarity, or follow-up?",
    };
  }

  if (step === "contact") {
    return {
      id: makeId("assistant"),
      role: "assistant",
      text: "What email and phone should Civive use to follow up? You can send both in one message.",
    };
  }

  if (step === "smsConsent") {
    return {
      id: makeId("assistant"),
      role: "assistant",
      text: "Can Civive text you about this request and appointment updates? Reply yes or no. Message frequency varies. Reply STOP to opt out.",
    };
  }

  if (step === "confirm") {
    return {
      id: makeId("assistant"),
      role: "assistant",
      text: `Here is what I am about to send:\n\n${buildSummary(draft)}\n\nIf this looks right, send it to Civive.`,
      ctas: [
        { label: "Send to Civive", action: "submit", icon: "send" },
        { label: "Start over", action: "restart", icon: "restart" },
        { label: `Call ${site.phone}`, href: site.phoneHref, icon: "call" },
      ],
    };
  }

  return initialMessages[0];
}

function openExternalLink(href: string) {
  window.location.href = href;
}

export default function GHLChatWidget() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [leadDraft, setLeadDraft] = useState<LeadDraft>(emptyLeadDraft);
  const [intakeStep, setIntakeStep] = useState<IntakeStep>("context");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState<string | null>(null);
  const messageListRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);

  const canSend = useMemo(
    () => normalizeInput(draft).length > 0 && !isSubmitting,
    [draft, isSubmitting]
  );

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

  useEffect(() => {
    trackWebsiteEvent("chat_widget_visible", {
      path: location,
      mode: "assistant_intake",
    });
  }, [location]);

  const resetIntake = () => {
    setLeadDraft(emptyLeadDraft);
    setIntakeStep("context");
    setDraft("");
    setVoiceStatus(null);
    setIsSubmitting(false);
    setMessages([
      {
        ...initialMessages[0],
        id: makeId("assistant"),
      },
    ]);
    window.setTimeout(() => textareaRef.current?.focus(), 80);
  };

  const appendAssistantMessage = (message: ChatMessage) => {
    setMessages(current => [...current, message]);
  };

  const submitLeadRequest = async (payload: LeadDraft) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    appendAssistantMessage({
      id: makeId("assistant"),
      role: "assistant",
      text: "Sending the request now...",
    });

    trackWebsiteEvent("assistant_lead_submit", {
      form: "ai-assistant-intake",
      offer: "ai-assistant-visibility-report",
      destination: "/api/lead",
    });

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: payload.fullName,
          companyName: payload.companyName,
          email: payload.email,
          phone: payload.phone,
          website: payload.website,
          serviceArea: payload.serviceArea,
          serviceInterest: payload.serviceInterest,
          message: payload.message,
          smsConsent: payload.smsConsent,
          offer: "ai-assistant-visibility-report",
          sourcePage: window.location.href,
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.ok) {
        const confirmationText =
          "Your request was received. Civive will review it and follow up.";

        setIntakeStep("submitted");
        appendAssistantMessage({
          id: makeId("assistant"),
          role: "assistant",
          text: confirmationText,
          ctas: [
            { label: "Start another request", action: "restart", icon: "restart" },
            { label: `Call ${site.phone}`, href: site.phoneHref, icon: "call" },
          ],
        });
        return;
      }

      appendAssistantMessage({
        id: makeId("assistant"),
        role: "assistant",
        text: `I could not safely send that request through the site. Please call or text Civive at ${site.phone}.`,
        ctas: [
          { label: `Call ${site.phone}`, href: site.phoneHref, icon: "call" },
          { label: "Text Civive", href: `sms:${site.phoneE164}`, icon: "text" },
        ],
      });
    } catch {
      appendAssistantMessage({
        id: makeId("assistant"),
        role: "assistant",
        text: `Network error. Please call or text Civive at ${site.phone}.`,
        ctas: [
          { label: `Call ${site.phone}`, href: site.phoneHref, icon: "call" },
          { label: "Text Civive", href: `sms:${site.phoneE164}`, icon: "text" },
        ],
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const advanceIntake = (input: string) => {
    let nextDraft = { ...leadDraft };
    let nextStep: IntakeStep = intakeStep;
    let assistantMessage: ChatMessage | null = null;
    let shouldSubmit = false;

    if (intakeStep === "submitted") {
      resetIntake();
      nextDraft = { ...emptyLeadDraft, message: input };
      nextStep = "fullName";
      assistantMessage = getNextQuestion(nextStep, nextDraft);
    } else if (intakeStep === "context") {
      nextDraft.message = input;
      nextStep = "fullName";
      assistantMessage = getNextQuestion(nextStep, nextDraft);
    } else if (intakeStep === "fullName") {
      if (input.length < 2) {
        assistantMessage = {
          id: makeId("assistant"),
          role: "assistant",
          text: "Send the name Civive should use for this request.",
        };
      } else {
        nextDraft.fullName = input;
        nextStep = "companyName";
        assistantMessage = getNextQuestion(nextStep, nextDraft);
      }
    } else if (intakeStep === "companyName") {
      if (input.length < 2) {
        assistantMessage = {
          id: makeId("assistant"),
          role: "assistant",
          text: "Send the business name so the request is not anonymous.",
        };
      } else {
        nextDraft.companyName = input;
        nextStep = "website";
        assistantMessage = getNextQuestion(nextStep, nextDraft);
      }
    } else if (intakeStep === "website") {
      if (input.length < 4) {
        assistantMessage = {
          id: makeId("assistant"),
          role: "assistant",
          text: "Send a website, Google profile link, or public business page.",
        };
      } else {
        nextDraft.website = input;
        nextStep = "serviceArea";
        assistantMessage = getNextQuestion(nextStep, nextDraft);
      }
    } else if (intakeStep === "serviceArea") {
      nextDraft.serviceArea = input;
      nextStep = "serviceInterest";
      assistantMessage = getNextQuestion(nextStep, nextDraft);
    } else if (intakeStep === "serviceInterest") {
      nextDraft.serviceInterest = input;
      nextStep = "contact";
      assistantMessage = getNextQuestion(nextStep, nextDraft);
    } else if (intakeStep === "contact") {
      const email = extractEmail(input);
      const phone = extractPhone(input);

      if (email) nextDraft.email = email;
      if (phone) nextDraft.phone = phone;

      if (!nextDraft.email || !nextDraft.phone) {
        assistantMessage = {
          id: makeId("assistant"),
          role: "assistant",
          text: "I still need both an email and a phone number before I can send this request.",
        };
      } else {
        nextStep = "smsConsent";
        assistantMessage = getNextQuestion(nextStep, nextDraft);
      }
    } else if (intakeStep === "smsConsent") {
      nextDraft.smsConsent = includesYes(input) && !includesNo(input);
      nextStep = "confirm";
      assistantMessage = getNextQuestion(nextStep, nextDraft);
    } else if (intakeStep === "confirm") {
      if (includesYes(input)) {
        shouldSubmit = true;
        assistantMessage = {
          id: makeId("assistant"),
          role: "assistant",
          text: "Confirmed.",
        };
      } else {
        resetIntake();
        return;
      }
    }

    setLeadDraft(nextDraft);
    setIntakeStep(nextStep);
    if (assistantMessage) appendAssistantMessage(assistantMessage);
    if (shouldSubmit) void submitLeadRequest(nextDraft);
  };

  const submitMessage = (rawInput = draft) => {
    const input = normalizeInput(rawInput);
    if (!input || isSubmitting) return;

    const visitorMessage: ChatMessage = {
      id: makeId("visitor"),
      role: "visitor",
      text: input,
    };

    setMessages(current => [...current, visitorMessage]);
    setDraft("");
    setVoiceStatus(null);
    window.setTimeout(() => advanceIntake(input), 0);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key !== "Enter" || event.shiftKey) return;
    event.preventDefault();
    submitMessage();
  };

  const handleCtaClick = (cta: ChatCta) => {
    if (cta.action === "restart") {
      resetIntake();
      return;
    }

    if (cta.action === "submit") {
      setMessages(current => [
        ...current,
        {
          id: makeId("visitor"),
          role: "visitor",
          text: "Send this to Civive.",
        },
      ]);
      void submitLeadRequest(leadDraft);
      return;
    }

    if (cta.href) {
      openExternalLink(cta.href);
    }
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
        onClick={() => {
          setIsOpen(true);
          trackWebsiteEvent("chat_open", {
            placement: "floating_button",
            label: "Open Civive AI",
            destination: "civive:open-chat",
          });
        }}
        className="fixed bottom-3 left-3 right-auto z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.16] bg-[linear-gradient(135deg,#19c2ff,#2f75ff)] text-white shadow-[0_20px_55px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19c2ff]/70 sm:bottom-6 sm:left-auto sm:right-6 sm:h-14 sm:w-14"
        aria-label="Open Civive AI assistant"
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
                    className={`max-w-[88%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-6 ${
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
                            <button
                              key={`${message.id}-${cta.label}`}
                              type="button"
                              onClick={() => handleCtaClick(cta)}
                              className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.07] px-3 py-2 text-left text-xs font-semibold text-white transition-colors hover:bg-white/[0.12]"
                            >
                              <Icon className="h-3.5 w-3.5 text-[#9fdcff]" />
                              {cta.label}
                              {cta.href ? (
                                <ArrowRight className="h-3.5 w-3.5" />
                              ) : null}
                            </button>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
              {isSubmitting ? (
                <div className="flex justify-start">
                  <div className="inline-flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.045] px-4 py-3 text-sm text-white/70">
                    <CheckCircle className="h-4 w-4 text-[#9fdcff]" />
                    Working...
                  </div>
                </div>
              ) : null}
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
                  disabled={isSubmitting}
                  className="min-h-[3rem] w-full resize-none bg-transparent px-2 py-2 text-sm leading-6 text-white outline-none placeholder:text-white/38 disabled:opacity-60"
                  placeholder="Tell Civive AI what is leaking: visibility, calls, booking, or follow-up."
                  aria-label="Talk to Civive AI"
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
                      disabled={isSubmitting}
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
