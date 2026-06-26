{/*
import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    localStorage.setItem("vacationEmail", email);

    window.location.href = "/vacation/form";
  };

  return (
    <section className="bg-[#1F4E79] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-24 text-center text-white">
        <p className="text-[#C9A84C] font-semibold tracking-wider text-sm">
          FREE CHECKLIST · TAKES 3 MINUTES
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Your trip is planned.
          <br />
          Is everything else?
        </h1>

        <p className="mt-4 text-lg opacity-90">
          Get a personalized pre-vacation checklist emailed as a printable PDF.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-0"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="
              px-5
              py-4
              w-full
              md:w-[420px]
              rounded-lg
              md:rounded-l-lg
              md:rounded-r-none
              text-black
              outline-none
            "
          />

          <button
            type="submit"
            className="
              bg-[#C9A84C]
              px-8
              py-4
              font-semibold
              text-black
              rounded-lg
              md:rounded-l-none
              md:rounded-r-lg
              hover:opacity-90
              transition
            "
          >
            Get My Free Checklist →
          </button>
        </form>

        <p className="mt-5 text-sm opacity-75">
          Free. No account needed. Unsubscribe anytime.
        </p>
      </div>

      <svg viewBox="0 0 1440 120" className="block w-full">
        <path fill="#FAF7F0" d="M0,0 L1440,120 L1440,120 L0,120 Z" />
      </svg>
    </section>
  );
}
*/}

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
          Get a personalized pre-vacation
          checklist emailed as a printable PDF.
        </p>

        <small className="hero-note">
          Free. No account needed. Unsubscribe anytime.
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
            Get My Free Checklist →
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