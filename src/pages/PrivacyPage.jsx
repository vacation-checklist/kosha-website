import { Link } from "react-router-dom";

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 px-12 border-b border-cream-dark">
        <div className="max-w-2xl mx-auto">
          <div className="eyebrow mb-6">Privacy & security</div>
          <h1 className="font-garamond text-5xl md:text-6xl font-medium text-navy mb-6 leading-tight">
            Plain answers about <em>your</em> information
          </h1>
          <p className="text-lg text-text-light leading-relaxed">
            You're considering trusting us with the most sensitive information
            your family has. You deserve answers in plain language, not a wall
            of legal text. Here they are.
          </p>
        </div>
      </section>

      {/* The Default Section */}
      <section className="py-14 px-12 border-b border-cream-dark">
        <div className="max-w-2xl mx-auto">
          <div className="section-label mb-5">The default</div>
          <h2 className="font-garamond text-3xl md:text-4xl font-medium text-navy mb-6">
            Private while you build it
          </h2>
          <div className="space-y-4 text-text leading-relaxed">
            <p>
              A kosha is private by default. While you're filling yours in —
              whether that takes a weekend or a year — nobody else can see it.
              Not your spouse, not your children, not us. There is no shared
              family view until you create one.
            </p>
            <p>
              This matters because we learned it the hard way: people don't want
              an audience while they organize their lives. Not even a
              well-meaning one. You work at your own pace, in your own company,
              and nothing is visible until you deliberately share it.
            </p>
          </div>
        </div>
      </section>

      {/* What We Can't See Section */}
      <section className="py-14 px-12 border-b border-cream-dark">
        <div className="max-w-2xl mx-auto">
          <div className="section-label mb-5">What we can't see</div>
          <h2 className="font-garamond text-3xl md:text-4xl font-medium text-navy mb-6">
            Your most sensitive details are sealed
          </h2>
          <div className="space-y-4 text-text leading-relaxed">
            <p>
              Kosha is being built so that your most sensitive fields —
              government ID numbers, account numbers, and anything else you mark
              as sealed — are encrypted on your device before they ever reach
              us. We store the locked box; you hold the key. If someone demanded
              that data from us, we could not produce it, because we cannot read
              it.
            </p>
            <p>
              Everything else — the structure of your kosha, your story
              recordings, your contact lists — is encrypted in transit and at
              rest.
            </p>
            <p className="text-text-light text-sm italic">
              One honest consequence: because we can't read sealed fields, we
              also can't recover them if you lose both your password and your
              recovery code. We'll make the recovery code hard to lose. Keep it
              somewhere safe — perhaps the same drawer the binder used to live
              in.
            </p>
          </div>
        </div>
      </section>

      {/* Sharing Section */}
      <section className="py-14 px-12 border-b border-cream-dark">
        <div className="max-w-2xl mx-auto">
          <div className="section-label mb-5">Sharing</div>
          <h2 className="font-garamond text-3xl md:text-4xl font-medium text-navy mb-6">
            Release happens in layers, on your terms
          </h2>
          <div className="space-y-4 text-text leading-relaxed">
            <p>
              When you're ready, you grant access layer by layer: emergency
              contacts to your whole family today; documents to one trusted
              person; letters and recordings held back until a date, an event,
              or a decision you make later. Every grant is explicit, visible to
              you, and revocable.
            </p>
            <p>
              For the day your family truly needs everything, Kosha supports
              emergency access: a person you designate can request entry, you're
              notified immediately, and access opens only after a waiting period
              you set — unless you decline. No quiet backdoors, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-14 px-12 border-b border-cream-dark">
        <div className="max-w-2xl mx-auto">
          <div className="section-label mb-5">The business model</div>
          <h2 className="font-garamond text-3xl md:text-4xl font-medium text-navy mb-6">
            You are the customer, not the product
          </h2>
          <div className="space-y-4 text-text leading-relaxed">
            <p>
              Kosha makes money one way: subscriptions. Your data is never sold,
              never shared with advertisers, never used to market other people's
              products to you. There are no ads in Kosha and there never will
              be.
            </p>
            <p>
              You can export everything you've put in — documents, recordings,
              text — at any time, in formats you can keep. You can delete your
              account and your data, permanently, whenever you choose. A vault
              you can't leave isn't a vault; it's a trap.
            </p>
          </div>
        </div>
      </section>

      {/* Road Ahead Section */}
      <section className="py-14 px-12 border-b border-cream-dark">
        <div className="max-w-2xl mx-auto">
          <div className="section-label mb-5">
            Where we are honest about the road ahead
          </div>
          <h2 className="font-garamond text-3xl md:text-4xl font-medium text-navy mb-6">
            What's done, and what's in progress
          </h2>
          <div className="space-y-4 text-text leading-relaxed">
            <p>
              Kosha is in early access, and we'd rather tell you plainly where
              things stand than imply otherwise. Our infrastructure runs on
              providers that hold SOC 2 and ISO 27001 attestations. Kosha's own
              independent SOC 2 examination is planned as we grow — it's the
              standard we're building to from day one, and early-access members
              will be the first to know when it's complete.
            </p>
            <p>
              We follow applicable privacy laws, and we'll always say clearly
              what we collect and why. Questions we haven't answered here
              deserve real replies: write to{" "}
              <a
                href="mailto:earlyaccess@kosha.family"
                className="text-navy hover:underline"
              >
                earlyaccess@kosha.family
              </a>{" "}
              and a human will respond.
            </p>
          </div>
        </div>
      </section>

      {/* Next Section */}
      <section className="py-14 px-12">
        <div className="max-w-2xl mx-auto">
          <div className="section-label mb-5">Next</div>
          <h2 className="font-garamond text-3xl md:text-4xl font-medium text-navy mb-8">
            Build yours when you're ready
          </h2>
          <div className="flex gap-4 flex-wrap">
            <Link to="/early-access" className="btn btn-primary">
              Join the early-access list
            </Link>
            <Link to="/why-kosha" className="btn btn-ghost">
              The story behind the name
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
