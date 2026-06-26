import { Link } from 'react-router-dom'

export default function ThanksPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 px-12 border-b border-cream-dark">
        <div className="max-w-2xl mx-auto">
          <div className="eyebrow mb-6">You're on the list</div>
          <h1 className="font-garamond text-5xl md:text-6xl font-medium text-navy mb-6 leading-tight">
            Thank you — you're <em>shaping</em> Kosha now
          </h1>
          <p className="text-lg text-text-light leading-relaxed">
            Your answers go straight into how we build. We'll write when early access opens for your group — and only then. No newsletters pretending to be news.
          </p>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-14 px-12 border-b border-cream-dark">
        <div className="max-w-2xl mx-auto">
          <div className="section-label mb-5">What happens next</div>
          <h2 className="font-garamond text-3xl md:text-4xl font-medium text-navy mb-6">
            Early access opens in small groups
          </h2>
          <p className="text-text leading-relaxed">
            We invite a small group at a time, listen hard, and improve before the next group comes in. We only email you about your early access — when your group opens, and what your answers helped shape. That's the only kind of email we send. Your answers are already shaping what gets built first.
          </p>
        </div>
      </section>

      {/* While You're Here Section */}
      <section className="py-14 px-12 border-b border-cream-dark">
        <div className="max-w-2xl mx-auto">
          <div className="section-label mb-5">While you're here</div>
          <h2 className="font-garamond text-3xl md:text-4xl font-medium text-navy mb-8">
            Two things worth two minutes
          </h2>
          <div className="space-y-8">
            <div className="step">
              <div className="step-num">1</div>
              <div>
                <h3 className="font-garamond text-2xl font-semibold text-navy mb-3">
                  The name
                </h3>
                <p className="text-text-light leading-relaxed">
                  Kosha is a Sanskrit word that means a treasury, a protective layer, and a collection of knowledge — all three at once.{' '}
                  <Link to="/why-kosha" className="text-navy hover:underline">
                    The story behind it →
                  </Link>
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div>
                <h3 className="font-garamond text-2xl font-semibold text-navy mb-3">
                  The promise
                </h3>
                <p className="text-text-light leading-relaxed">
                  Private while you build it. Sensitive details sealed so even we can't read them. Shared in layers, only when you choose.{' '}
                  <Link to="/privacy" className="text-navy hover:underline">
                    The plain-language version →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
