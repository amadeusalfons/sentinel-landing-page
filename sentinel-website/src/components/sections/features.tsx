"use client";

import { Zap, Cpu, Fingerprint, Pencil, Settings2, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Service automation",
    description:
      "Auto-triage, route, and resolve repetitive tickets so your team focuses on high-value conversations.",
  },
  {
    icon: Cpu,
    title: "Integrated dashboard",
    description:
      "One place to see every channel, queue, and SLA — no more stitching tools together.",
  },
  {
    icon: Fingerprint,
    title: "Enterprise security",
    description:
      "SOC 2-ready controls, SSO, and role-based access to keep customer data safe.",
  },
  {
    icon: Pencil,
    title: "Customizable workflows",
    description:
      "Build rules, macros, and routing logic that match how your team actually works.",
  },
  {
    icon: Settings2,
    title: "Full control",
    description:
      "Granular settings and audit trails give admins complete oversight.",
  },
  {
    icon: Sparkles,
    title: "Built for AI",
    description:
      "AI drafts replies, summarizes threads, and surfaces insights across every conversation.",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-1 text-xs font-medium text-muted-foreground">
            Platform
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Everything your support team needs
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Sentinel brings automation, a unified dashboard, and AI into one
            platform — so your team spends less time switching tools and more
            time helping customers.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-lg shadow-primary/5 transition-all hover:border-navy-600/50 hover:bg-white/[0.07]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/30 text-navy-600 transition-colors group-hover:bg-navy/50 group-hover:text-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}