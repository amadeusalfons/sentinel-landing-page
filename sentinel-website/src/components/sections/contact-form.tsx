"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const WHATSAPP_NUMBER = "6282136421628";

const presetMessages = [
  "I'd like to ask about pricing options",
  "Technical issue inquiry",
  "I want to request a custom partnership project",
  "Tell me more about Sentinel's AI features",
];

function sendToWhatsApp(message: string) {
    const encoded = encodeURIComponent(message.trim() || "Hi! I'd like to learn more about Sentinel.");
    window.open(
      `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encoded}&type=phone_number`,
      "_blank",
      "noopener,noreferrer",
    );
  };

export function ContactFormSection() {
  const [message, setMessage] = useState("");

  const handleChipClick = (text: string) => {
    setMessage((prev) => (prev ? `${prev}\n\n${text}` : text));
  };

  const handleSend = () => {
    sendToWhatsApp(message);
  };

  return (
    <section className="relative bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-1 text-xs font-medium text-muted-foreground">
            Get in touch
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            More questions? Let&apos;s talk
          </h2>
          <p className="mt-4 text-muted-foreground">
            Send us a message and we&apos;ll get back to you on WhatsApp within minutes.
          </p>
        </div>

        <div className="mt-12 p-8 rounded-3xl border border-white/10 shadow-xl shadow-primary/5 backdrop-blur-md bg-white/5">
          <div className="flex flex-wrap gap-2 mb-6">
            {presetMessages.map((preset) => (
              <button
                key={preset}
                onClick={() => handleChipClick(preset)}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-all hover:border-navy-600/50 hover:text-foreground hover:bg-navy/20"
              >
                {preset}
              </button>
            ))}
          </div>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here... or tap a preset above to get started."
            rows={5}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 backdrop-blur-sm focus:border-navy-600/50 focus:outline-none focus:ring-1 focus:ring-navy-600/30 resize-none"
          />

          <button
            onClick={handleSend}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-navy to-navy-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-navy/25 transition-all hover:shadow-xl hover:shadow-navy/40 hover:brightness-110"
          >
            <Send className="h-5 w-5" />
            Let&apos;s talk
          </button>
        </div>
      </div>
    </section>
  );
}