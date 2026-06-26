// const items = [
//   {
//     title: "Home Prep",
//     description: "Prepare your home before departure.",
//   },
//   {
//     title: "Emergency Contacts",
//     description: "Keep key contacts organized.",
//   },
//   {
//     title: "Travel Docs",
//     description: "Never forget important documents.",
//   },
// ];

// export default function Features() {
//   return (
//     <section className="bg-[#FAF7F0] py-16">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-center text-[#C9A84C] font-semibold mb-12">
//           WHAT YOU GET
//         </h2>

//         <div className="grid md:grid-cols-3 gap-10">
//           {items.map((item) => (
//             <div key={item.title} className="text-center">
//               <div className="text-[#1F4E79] text-xl">■</div>

//               <h3 className="mt-3 text-[#1F4E79] font-bold">{item.title}</h3>

//               <p className="text-gray-600 mt-2">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import "../styles/features.css";

const features = [
  {
    icon: "🧳",
    title: "Trip Basics",
    description:
      "Capture your trip details like name, destination, departure and return dates, and party size.",
  },
  {
    icon: "🏠",
    title: "Home Preparation",
    description:
      "A customized checklist to prepare your home before you leave so you can travel worry-free.",
  },
  {
    icon: "📞",
    title: "Emergency Contacts",
    description:
      "Organize important contacts in one place for peace of mind during your trip.",
  },
  {
    icon: "✈️",
    title: "Travel Documents",
    description:
      "Make sure all your travel documents and reservations are ready before you depart.",
  },
];

export default function Features() {
  return (
    <section className="features">
      <h2>WHAT YOU GET</h2>

      <div className="feature-grid">
        {features.map((item) => (
          <div
            key={item.title}
            className="card"
          >
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