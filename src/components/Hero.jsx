

import { useState } from "react";
import "../styles/hero.css";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    localStorage.setItem(
      "vacationEmail",
      email
    );

    localStorage.setItem(
  "marketingConsent",
  JSON.stringify(marketingConsent)
);

    window.location.href =
      "/vacation-checklist/form";
  };

  return (
    <section className="hero">
      <div className="hero-left">
        <div className="badge">
          VACATION CHECKLIST • FREE TOOL
        </div>

        <h1>
          Your trip is planned.
          <br />
          Is everything else?
        </h1>

        <p>
          Answer a few quick questions and get a personalized,
          printable pre-trip checklist instantly.
        </p>

        <small className="hero-note">
          Free. No account needed. Print it or save the PDF.
        </small>

        <form
          onSubmit={handleSubmit}
          className="email-box"
        >
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <button type="submit">
            Build My Checklist →
          </button>
        </form>

        <div className="consent-checkbox">
          <input
            type="checkbox"
            id="marketingConsent"
            checked={marketingConsent}
            onChange={(e) =>
              setMarketingConsent(e.target.checked)
            }
          />

          <label htmlFor="marketingConsent">
          Yes, I'd like occasional travel tips,
          vacation planning insights, and updates
          from Kosha.
        </label>
        </div>
      </div>
    </section>
  );
}