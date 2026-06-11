"use client";

import { TestimonialsColumn } from "@/components/sections/testimonials-column";

const col1 = [
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
];

const col2 = [
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

const col3 = [
  {
    text: "Fitur auto-triage Sentinel memotong 40% workload tim kami. Agent sekarang fokus ke kasus prioritas tinggi, bukan tiket repetitif.",
    image: "https://i.pravatar.cc/150?img=33",
    name: "Kenzo Wijaya",
    role: "Support Lead at Gloria Group",
  },
  {
    text: "Integrasi multi-channel Sentinel menyatukan WhatsApp, email, dan live chat dalam satu dashboard. Tidak ada lagi customer yang terlewat.",
    image: "https://i.pravatar.cc/150?img=26",
    name: "Luhur Prasetyo",
    role: "CX Manager at BGA Group",
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
        <TestimonialsColumn testimonials={col1} duration={18} />
        <TestimonialsColumn testimonials={col2} duration={14} className="hidden md:block" />
        <TestimonialsColumn testimonials={col3} duration={20} className="hidden lg:block" />
      </div>
    </section>
  );
}