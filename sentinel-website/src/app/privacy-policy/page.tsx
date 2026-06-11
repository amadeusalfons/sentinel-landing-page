import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Sentinel",
  description: "Sentinel's privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:px-8 lg:px-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: June 2026
        </p>

        <div className="mt-12 space-y-10 text-foreground/85 leading-relaxed text-center">
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">1. Information We Collect</h2>
            <p className="mt-3 text-muted-foreground">
              We collect information you provide directly to us, such as your name, email address, phone number, and company details when you sign up for Sentinel or contact us through our website. We also collect usage data automatically, including IP addresses, browser types, and interactions with our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">2. How We Use Information</h2>
            <p className="mt-3 text-muted-foreground">
              We use the information we collect to provide, maintain, and improve our services; to communicate with you about your account and our platform; to process transactions; to detect and prevent fraud; and to comply with legal obligations. We do not sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">3. Data Storage & Security</h2>
            <p className="mt-3 text-muted-foreground">
              Your data is stored on secure servers with industry-standard encryption at rest and in transit. We implement SOC 2-compliant controls, including SSO, role-based access, and comprehensive audit trails. We retain your data only as long as necessary to fulfill the purposes outlined in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">4. Your Rights</h2>
            <p className="mt-3 text-muted-foreground">
              You have the right to access, correct, or delete your personal data at any time. You may also request a copy of your data or restrict its processing. To exercise these rights, contact us at privacy@sentinel.ai.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">5. Third-Party Services</h2>
            <p className="mt-3 text-muted-foreground">
              Sentinel integrates with third-party platforms. When you connect these services, their respective privacy policies govern the data shared with them. We encourage you to review their policies before integration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">6. Changes to This Policy</h2>
            <p className="mt-3 text-muted-foreground">
              We may update this privacy policy from time to time. We will notify you of material changes through the platform or via email. Continued use of Sentinel after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">7. Contact Us</h2>
            <p className="mt-3 text-muted-foreground">
              If you have questions about this privacy policy or our data practices, reach out to us at{" "}
              <span className="text-foreground">privacy@sentinel.ai</span> or through our WhatsApp contact form.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}