"use client";

import { TestimonialsColumn } from "@/components/sections/testimonials-column";

const testimonials = [
  {
    text: "Sentinel transformed how we handle support. Response times dropped 60% in the first month.",
    image: "https://i.pravatar.cc/150?img=1",
    name: "Sarah Chen",
    role: "Head of CX at Apex",
  },
  {
    text: "The integrated dashboard alone saved us from juggling 5 different tools. Absolute game changer.",
    image: "https://i.pravatar.cc/150?img=2",
    name: "Marcus Rivera",
    role: "Ops Director at Nova",
  },
  {
    text: "Our team spends more time helping customers and less time fighting the tool. AI drafts are surprisingly good.",
    image: "https://i.pravatar.cc/150?img=3",
    name: "Priya Patel",
    role: "Support Lead at Flux",
  },
  {
    text: "Enterprise-grade security was non-negotiable for us. Sentinel delivered SOC 2 compliance without friction.",
    image: "https://i.pravatar.cc/150?img=4",
    name: "James Okonkwo",
    role: "CISO at Hexa",
  },
  {
    text: "We onboarded 200 agents in a week. The customizable workflows meant zero disruption to our existing processes.",
    image: "https://i.pravatar.cc/150?img=5",
    name: "Elena Kowalski",
    role: "VP Support at Dawn",
  },
  {
    text: "Finally, a dashboard that gives me real visibility. I can see every channel, SLA, and bottleneck at a glance.",
    image: "https://i.pravatar.cc/150?img=6",
    name: "David Nakamura",
    role: "CTO at Rift",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative bg-background py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-1 text-xs font-medium text-muted-foreground">
            Testimonials
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Trusted by support teams worldwide
          </h2>
          <p className="mt-4 text-muted-foreground">
            See how Sentinel helps modern teams deliver exceptional customer experiences.
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
        <TestimonialsColumn testimonials={testimonials} duration={12} />
        <TestimonialsColumn testimonials={testimonials.slice().reverse()} duration={18} className="hidden md:block" />
        <TestimonialsColumn testimonials={testimonials.slice(2)} duration={15} className="hidden lg:block" />
      </div>
    </section>
  );
}