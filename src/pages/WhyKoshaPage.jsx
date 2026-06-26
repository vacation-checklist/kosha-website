import { Link } from 'react-router-dom'

export default function WhyKoshaPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 px-12 border-b border-cream-dark">
        <div className="max-w-2xl mx-auto">
          <div className="eyebrow mb-6">The name</div>
          <h1 className="font-garamond text-5xl md:text-6xl font-medium text-navy mb-6 leading-tight">
            One word that means <em>all of it</em>
          </h1>
          <p className="text-lg text-text-light leading-relaxed">
            Kosha (कोश, pronounced <strong className="font-semibold">KOH-shah</strong>) is a Sanskrit word with three classical meanings. We mean every one of them.
          </p>
        </div>
      </section>

      {/* Definitions Section */}
      <section className="py-14 px-12 border-b border-cream-dark">
        <div className="max-w-2xl mx-auto space-y-12">
          <div>
            <div className="mb-4">
              <h3 className="font-garamond text-2xl font-semibold text-navy">
                kosha <span className="text-text-light"> · a treasury</span>
              </h3>
            </div>
            <p className="text-text leading-relaxed">
              In ancient India, the kosha was the royal treasury — counted among the essential pillars of a kingdom, the one that sustained all the others. Your kosha is the safe place for what your family will need.
            </p>
          </div>

          <div>
            <div className="mb-4">
              <h3 className="font-garamond text-2xl font-semibold text-navy">
                kosha <span className="text-text-light"> · a protective layer</span>
              </h3>
            </div>
            <p className="text-text leading-relaxed">
              The word also names the layers wrapped around what is innermost and most precious. That is exactly how Kosha treats your information: practical details in the outer layers, the most personal things at the centre — and each layer opens only to the people you choose, only when you choose.
            </p>
          </div>

          <div>
            <div className="mb-4">
              <h3 className="font-garamond text-2xl font-semibold text-navy">
                kosha <span className="text-text-light"> · a collection of knowledge</span>
              </h3>
            </div>
            <p className="text-text leading-relaxed">
              In Sanskrit, a dictionary is — to this day — called a treasury of words. Any carefully gathered body of knowledge is a kosha. The stories, lessons, and letters you keep in yours make it your family's own collection.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Fits Section */}
      <section className="py-14 px-12 border-b border-cream-dark">
        <div className="max-w-2xl mx-auto">
          <div className="section-label mb-5">Why it fits</div>
          <h2 className="font-garamond text-3xl md:text-4xl font-medium text-navy mb-6">
            The word is the product
          </h2>
          <div className="space-y-6 text-text leading-relaxed">
            <p>
              We looked for a long time for a name that could hold both halves of what we're building — a vault for the documents your family will need, and a home for the stories they'll want. Most words pick a side. Vaults sound cold. Memory products sound fragile.
            </p>
            <p>
              Kosha is the rare word that means both, and adds the part we care about most: layers. Your kosha is private while you build it. It opens outward in layers, on your terms. What your family finds at the centre is up to you.
            </p>
            <p>
              Kosha has carried these three meanings for thousands of years. We didn't have to invent a name that could hold both halves of what we're building — it already existed, and we're proud to use it.
            </p>
          </div>
        </div>
      </section>

      {/* Next Section */}
      <section className="py-14 px-12 border-b border-cream-dark">
        <div className="max-w-2xl mx-auto">
          <div className="section-label mb-5">Next</div>
          <h2 className="font-garamond text-3xl md:text-4xl font-medium text-navy mb-8">
            See what a kosha holds
          </h2>
          <div className="flex gap-4 flex-wrap">
            <Link to="/early-access" className="btn btn-primary">
              Join the early-access list
            </Link>
            <Link to="/privacy" className="btn btn-ghost">
              How we protect it
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
