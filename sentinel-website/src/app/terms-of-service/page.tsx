import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Sentinel",
  description: "Sentinel's terms of service — rules, responsibilities, and conditions of use.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:px-8 lg:px-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: June 2026
        </p>

        <div className="mt-12 space-y-10 text-foreground/85 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">1. Acceptance of Terms</h2>
            <p className="mt-3 text-muted-foreground">
              By accessing or using Sentinel (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the Service. We reserve the right to update these terms at any time with notice to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">2. Account Registration</h2>
            <p className="mt-3 text-muted-foreground">
              You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">3. Service Usage & Restrictions</h2>
            <p className="mt-3 text-muted-foreground">
              You may use the Service only for lawful purposes. You agree not to misuse the Service, including but not limited to: attempting to gain unauthorized access, interfering with the Service&apos;s operation, or using the Service to transmit malware or spam. Sentinel reserves the right to suspend or terminate accounts that violate these restrictions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">4. Subscription & Payment</h2>
            <p className="mt-3 text-muted-foreground">
              Certain features of the Service require a paid subscription. Fees are billed in advance on a monthly or annual basis as selected. All payments are non-refundable except as required by law. We may change pricing with 30 days&apos; notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">5. Intellectual Property</h2>
            <p className="mt-3 text-muted-foreground">
              Sentinel and its original content, features, and functionality are owned by Sentinel Inc. and are protected by international copyright, trademark, and other intellectual property laws. You retain ownership of your data and content uploaded to the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">6. Limitation of Liability</h2>
            <p className="mt-3 text-muted-foreground">
              Sentinel is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no warranties regarding the Service&apos;s availability, accuracy, or reliability. In no event shall Sentinel Inc. be liable for any indirect, incidental, or consequential damages arising from your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">7. Termination</h2>
            <p className="mt-3 text-muted-foreground">
              You may terminate your account at any time. We may terminate or suspend your account for violation of these terms, with or without notice. Upon termination, your right to use the Service ceases immediately. Data retention follows our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">8. Governing Law</h2>
            <p className="mt-3 text-muted-foreground">
              These terms are governed by and construed in accordance with the laws of the jurisdiction in which Sentinel Inc. is registered, without regard to its conflict of law provisions. Any disputes shall be resolved through binding arbitration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">9. Contact</h2>
            <p className="mt-3 text-muted-foreground">
              For questions about these terms, contact us at{" "}
              <span className="text-foreground">legal@sentinel.ai</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}