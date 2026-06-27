import "../styles/features.css";

const features = [
  {
    icon: "🧳",
    title: "Trip Basics",
    description:
      "Your trip at a glance - dates, destination and who's travelling, so the rest of the checklist is tailored for you.",
  },
  {
    icon: "🏠",
    title: "Home Preparation",
    description:
      "Mail, locks, thermostat, plants, alarms - everything to leave your home safe while you're away.",
  },
  {
    icon: "📞",
    title: "Emergency Contacts",
    description:
      "Keep important contacts together - housesitter, neighbour, doctor and local contacts in one place.",
  },
  {
    icon: "✈️",
    title: "Travel Documents",
    description:
      "Passport validity, visas, insurance and offline copies - so nothing essential is missing at the airport.",
  },
];

export default function Features() {
  return (
    <section className="features">
      <h2>WHAT YOU GET</h2>

      <div className="feature-grid">
        {features.map((item) => (
          <div key={item.title} className="card">
            <h3>
              {item.icon} {item.title}
            </h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
