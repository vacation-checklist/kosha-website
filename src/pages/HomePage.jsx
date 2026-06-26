import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 px-12 border-b border-cream-dark">
        <div className="max-w-2xl mx-auto">
          <div className="eyebrow mb-6">Early access · opening soon</div>
          <h1 className="font-garamond text-5xl md:text-6xl font-medium text-navy mb-6 leading-tight">
            The documents your family will need. The <em>stories</em> they'll want.
          </h1>
          <p className="text-lg text-text-light mb-8 leading-relaxed">
            Kosha is a private app for everything that matters — your key documents, accounts, and contacts, alongside the memories and wisdom that no drawer ever held. Built at your own pace. Seen by no one until you say so.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/early-access" className="btn btn-primary">
              Join the early-access list
            </Link>
            <a href="#how" className="btn btn-ghost">
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-14 px-12 border-b border-cream-dark">
        <div className="max-w-2xl mx-auto">
          <div className="section-label mb-5">The problem</div>
          <h2 className="font-garamond text-3xl md:text-4xl font-medium text-navy mb-6">
            Every family has the same two gaps
          </h2>
          <div className="space-y-6 text-text leading-relaxed">
            <p>
              The first gap is practical. The insurance policy is in an email somewhere. The will is at a notary's office nobody remembers. The license is a photo on a phone. When a family actually needs these things — a hospital visit, a border crossing, a death — they're scattered across drawers, inboxes, and someone else's memory.
            </p>
            <p>
              The second gap is quieter. How your parents met. What your grandmother believed about money, work, luck. The story behind the photograph. None of it is written down anywhere, and every family assumes there will be time to ask.
            </p>
            <p>
              Most products solve one gap or the other. Kosha holds both — because when your family finally opens it, they'll need the first and treasure the second.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-14 px-12 border-b border-cream-dark" id="how">
        <div className="max-w-2xl mx-auto">
          <div className="section-label mb-5">How it works</div>
          <h2 className="font-garamond text-3xl md:text-4xl font-medium text-navy mb-8">
            Three steps, at your own pace
          </h2>
          <div className="space-y-8">
            <div className="step">
              <div className="step-num">1</div>
              <div>
                <h3 className="font-garamond text-2xl font-semibold text-navy mb-3">
                  Gather
                </h3>
                <p className="text-text-light leading-relaxed">
                  Guided prompts walk you through what matters — documents, accounts, contacts, and the questions families wish they'd asked. Snap a photo of a card and Kosha files the details. Answer a story prompt by typing, or just by speaking.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div>
                <h3 className="font-garamond text-2xl font-semibold text-navy mb-3">
                  Protect
                </h3>
                <p className="text-text-light leading-relaxed">
                  Everything is encrypted, and your most sensitive details are sealed so that even we cannot read them. While you're building your kosha, nobody else can see it — not your family, not us. No deadlines, no pressure.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div>
                <h3 className="font-garamond text-2xl font-semibold text-navy mb-3">
                  Share, in layers
                </h3>
                <p className="text-text-light leading-relaxed">
                  You decide who sees what, and when. Give your daughter the emergency contacts today, the full vault later, the letters when the time is right. Layered access, on your terms — that's the heart of Kosha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Goes In Your Kosha Section */}
      <section className="py-14 px-12 border-b border-cream-dark">
        <div className="max-w-2xl mx-auto">
          <div className="section-label mb-5">What goes in your kosha</div>
          <h2 className="font-garamond text-3xl md:text-4xl font-medium text-navy mb-8">
            Two layers, one place
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy text-white p-8 rounded-lg">
              <h3 className="font-garamond text-2xl font-semibold mb-3 text-gold">
                The practical layer
              </h3>
              <p className="text-cream leading-relaxed">
                IDs and key documents, insurance and account details, where the will is kept, who to call and in what order. The things your family would otherwise spend weeks hunting for.
              </p>
            </div>
            <div className="bg-cream border-2 border-cream-dark p-8 rounded-lg">
              <h3 className="font-garamond text-2xl font-semibold text-navy mb-3">
                The story layer
              </h3>
              <p className="text-text-light leading-relaxed">
                Answers to the questions your family keeps meaning to ask — recorded in your own voice if you like. Values, turning points, letters for later. The things no one else can ever recover once they're gone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-14 px-12 border-b border-cream-dark">
        <div className="max-w-2xl mx-auto">
          <div className="section-label mb-5">Trust, by design</div>
          <h2 className="font-garamond text-3xl md:text-4xl font-medium text-navy mb-8">
            Private until you decide otherwise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 mb-8">
            <div className="flex gap-3 items-start">
              <span className="text-gold shrink-0 leading-relaxed" aria-hidden="true">—</span>
              <p className="text-text-light leading-relaxed">
                Private by default — no one sees your kosha while you build it
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-gold shrink-0 leading-relaxed" aria-hidden="true">—</span>
              <p className="text-text-light leading-relaxed">
                Sensitive fields encrypted so even we can't read them
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-gold shrink-0 leading-relaxed" aria-hidden="true">—</span>
              <p className="text-text-light leading-relaxed">
                Export or delete everything, anytime — your data is yours
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-gold shrink-0 leading-relaxed" aria-hidden="true">—</span>
              <p className="text-text-light leading-relaxed">
                No ads, and your data is never sold — you are the customer
              </p>
            </div>
          </div>
          <p className="text-text-light leading-relaxed">
            The full plain-language version — what we can see, what we can't, and how release works — is on the{' '}
            <Link to="/privacy" className="text-navy underline hover:text-navy-dark">
              privacy &amp; security page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* The Name Section */}
      <section className="py-14 px-12 border-b border-cream-dark">
        <div className="max-w-2xl mx-auto">
          <div className="section-label mb-5">The name</div>
          <h2 className="font-garamond text-3xl md:text-4xl font-medium text-navy mb-6">
            Why "Kosha"?
          </h2>
          <p className="text-text-light leading-relaxed">
            Kosha is a Sanskrit word that means a treasury, a protective layer, and a collection of knowledge — all three at once. We chose it because that's exactly what this is.{' '}
            <Link to="/why-kosha" className="text-navy hover:underline">
              The full story behind the name →
            </Link>
          </p>
        </div>
      </section>

      {/* Early Access CTA Section */}
      <section className="py-14 px-12">
        <div className="max-w-2xl mx-auto">
          <div className="section-label mb-5">Early access</div>
          <h2 className="font-garamond text-3xl md:text-4xl font-medium text-navy mb-6">
            Help us build it right
          </h2>
          <p className="text-text-light leading-relaxed mb-8">
            We're opening early access in small groups. Joining costs nothing and commits you to nothing — it gets you in first, and it gives you a real say in what Kosha becomes.
          </p>
          <Link to="/early-access" className="btn btn-primary inline-block">
            Join the early-access list
          </Link>
        </div>
      </section>
    </div>
  )
}
