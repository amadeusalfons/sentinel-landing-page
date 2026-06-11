"use client";

import { TestimonialsColumn } from "@/components/sections/testimonials-column";

const testimonials = [
  {
    text: "Sebelum pakai Sentinel, tim kami kewalahan dengan ribuan tiket per bulan. Sekarang response time turun 60% dan CSAT naik signifikan.",
    image: "https://i.pravatar.cc/150?img=12",
    name: "Steven Lim",
    role: "Head of CX at ARCN",
  },
  {
    text: "Dashboard terintegrasi Sentinel menggantikan 5 tools berbeda yang kami pakai sebelumnya. Satu layar untuk semua channel — efisiensi tim naik drastis.",
    image: "https://i.pravatar.cc/150?img=53",
    name: "Daniel Kurniawan",
    role: "Ops Director at EKW Group",
  },
  {
    text: "Keamanan enterprise adalah prioritas utama kami. Sentinel memberikan SOC 2 compliance, SSO, dan RBAC tanpa ribet. Audit eksternal pun lancar.",
    image: "https://i.pravatar.cc/150?img=47",
    name: "Putri Sasmita",
    role: "CISO at Gloria Group",
  },
  {
    text: "Onboarding 200 agent dalam seminggu tanpa mengganggu workflow existing. Fitur AI-nya membantu agent baru langsung produktif di hari pertama.",
    image: "https://i.pravatar.cc/150?img=59",
    name: "Budi Santoso",
    role: "VP Support at BGA Group",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative bg-background py-24 sm:py-32 pb-4 overflow-hidden">
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
        <TestimonialsColumn testimonials={testimonials} duration={18} />
        <TestimonialsColumn testimonials={testimonials.slice().reverse()} duration={14} className="hidden md:block" />
        <TestimonialsColumn testimonials={testimonials.slice(1)} duration={20} className="hidden lg:block" />
      </div>
    </section>
  );
}