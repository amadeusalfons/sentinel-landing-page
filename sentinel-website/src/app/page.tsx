import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { PartnersSection } from "@/components/sections/partners";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactFormSection } from "@/components/sections/contact-form";
import { CtaFooterSection } from "@/components/sections/cta-footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PartnersSection />
      <ContactFormSection />
      <CtaFooterSection />
    </main>
  );
}