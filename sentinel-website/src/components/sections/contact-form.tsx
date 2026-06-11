"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "6282136421628";

const presetMessages = [
  "I'd like to ask about pricing options",
  "Technical issue inquiry",
  "I want to request a custom partnership project",
  "Tell me more about Sentinel's AI features",
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export function ContactFormSection() {
  const [message, setMessage] = useState("");

  const handleChipClick = (text: string) => {
    setMessage((prev) => (prev ? `${prev}\n\n${text}` : text));
  };

  const handleSend = () => {
    const encoded = encodeURIComponent(message.trim() || "Hi! I'd like to learn more about Sentinel.");
    window.open(
      `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encoded}&type=phone_number`,
      "_blank",
      "noopener,noreferrer",
    );
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
            <WhatsAppIcon className="h-5 w-5" />
            Send to WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}