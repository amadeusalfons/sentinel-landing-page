"use client";

import Link from "next/link";
import { CtaButtons } from "@/components/shared/cta-buttons";
import { useEffect, useRef } from "react";

const FOOTER_STYLES = `
.footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.footer-scroll-marquee {
  animation: footer-scroll-marquee 40s linear infinite;
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
`;

const marqueeItems = [
  "Faster resolutions",
  "Unified dashboard",
  "AI-assisted replies",
  "Enterprise security",
  "Customizable workflows",
];

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

function MarqueeLine() {
  return (
    <div className="flex w-max footer-scroll-marquee text-xs md:text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase">
      <div className="flex items-center space-x-12 px-6">
        {marqueeItems.flatMap((item, i) => [
          <span key={`a-${i}`}>{item}</span>,
          <span key={`s-${i}`} className="text-navy-600">✦</span>,
        ])}
      </div>
      <div className="flex items-center space-x-12 px-6">
        {marqueeItems.flatMap((item, i) => [
          <span key={`b-${i}`}>{item}</span>,
          <span key={`t-${i}`} className="text-navy-600">✦</span>,
        ])}
      </div>
    </div>
  );
}

export function CtaFooterSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    let ctx: gsap.Context | undefined;

    import("gsap").then((gsapModule) => {
      const gsap = gsapModule.default ?? gsapModule;

      import("gsap/ScrollTrigger").then((stModule) => {
        const ScrollTrigger = (stModule as { default: typeof import("gsap/ScrollTrigger").ScrollTrigger }).default;
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          gsap.fromTo(
            giantTextRef.current,
            { y: "10vh", scale: 0.8, opacity: 0 },
            {
              y: "0vh",
              scale: 1,
              opacity: 1,
              ease: "power1.out",
              scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top 80%",
                end: "bottom bottom",
                scrub: 1,
              },
            },
          );

          gsap.fromTo(
            [headingRef.current, linksRef.current],
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top 40%",
                end: "bottom bottom",
                scrub: 1,
              },
            },
          );
        }, wrapperRef);
      });
    });

    return () => {
      ctx?.revert();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: FOOTER_STYLES }} />

      <div
        ref={wrapperRef}
        className="relative h-screen w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <footer className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-background text-foreground">
          <div className="absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-[50%] blur-[80px] pointer-events-none z-0 footer-breathe"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(11,30,63,0.15) 0%, rgba(21,53,107,0.15) 40%, transparent 70%)",
            }}
          />
          <div className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundSize: "60px 60px",
              backgroundImage: "linear-gradient(to right, rgba(245,246,248,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,246,248,0.03) 1px, transparent 1px)",
              maskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
            }}
          />

          <div
            ref={giantTextRef}
            className="absolute -bottom-[5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
            style={{
              fontSize: "26vw",
              lineHeight: "0.75",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              color: "transparent",
              WebkitTextStroke: "1px rgba(245,246,248,0.05)",
              background: "linear-gradient(180deg, rgba(245,246,248,0.1) 0%, transparent 60%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            SENTINEL
          </div>

          <div className="absolute top-12 left-0 w-full overflow-hidden border-y border-border/50 bg-background/60 backdrop-blur-md py-4 z-10 -rotate-2 scale-110 shadow-2xl">
            <MarqueeLine />
          </div>

          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-20 w-full max-w-5xl mx-auto">
            <h2
              ref={headingRef}
              className="text-5xl md:text-8xl font-black tracking-tighter mb-12 text-center"
              style={{
                background: "linear-gradient(180deg, var(--foreground) 0%, color-mix(in oklch, var(--foreground) 40%, transparent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0px 0px 20px rgba(245,246,248,0.15))",
              }}
            >
              Ready to automate your support?
            </h2>

            <div ref={linksRef} className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
              <CtaButtons label="Let&apos;s make your business efficient, or let&apos;s build" />
            </div>
          </div>

          <div className="relative z-20 w-full pb-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-muted-foreground text-[10px] md:text-xs font-semibold tracking-widest uppercase order-2 md:order-1">
              &copy; 2026 Sentinel. All rights reserved.
            </div>

            <div className="flex flex-wrap justify-center gap-3 order-1 md:order-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-6 py-3 rounded-full text-muted-foreground font-medium text-xs md:text-sm hover:text-foreground transition-all duration-400"
                  style={{
                    background: "linear-gradient(145deg, rgba(245,246,248,0.03) 0%, rgba(245,246,248,0.01) 100%)",
                    boxShadow: "0 10px 30px -10px rgba(10,10,10,0.5), inset 0 1px 1px rgba(245,246,248,0.1), inset 0 -1px 2px rgba(10,10,10,0.8)",
                    border: "1px solid rgba(245,246,248,0.08)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground group order-3 transition-all duration-400"
              style={{
                background: "linear-gradient(145deg, rgba(245,246,248,0.03) 0%, rgba(245,246,248,0.01) 100%)",
                boxShadow: "0 10px 30px -10px rgba(10,10,10,0.5), inset 0 1px 1px rgba(245,246,248,0.1)",
                border: "1px solid rgba(245,246,248,0.08)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <svg className="w-5 h-5 transform group-hover:-translate-y-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}