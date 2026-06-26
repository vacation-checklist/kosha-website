import "../styles/howItWorks.css";

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="how-container">

        <span className="section-tag">
          HOW IT WORKS
        </span>

        <h2>
          Three simple steps before you travel
        </h2>

        <div className="steps-wrapper">
        <div className="step">
          <div className="step-circle">1</div>

          <div className="step-content">
            <h3>Tell us about your trip</h3>

            <p>
              Share your destination, travel dates, and who's travelling.
              It only takes a few minutes to personalize your checklist.
            </p>
          </div>
        </div>

        <div className="step">
          <div className="step-circle">2</div>

          <div className="step-content">
            <h3>Get your personalized checklist</h3>

            <p>
              We automatically create a checklist covering home
              preparation, emergency contacts, and travel documents,
              tailored specifically to your trip.
            </p>
          </div>
        </div>

        <div className="step">
          <div className="step-circle">3</div>

          <div className="step-content">
            <h3>Print or save your PDF</h3>

            <p>
              Download your checklist as a printable PDF and tick off
              each item before you leave, helping you travel with
              confidence and peace of mind.
            </p>
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}