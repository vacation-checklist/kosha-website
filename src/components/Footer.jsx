// export default function Footer() {
//   return (
//     <footer className="bg-[#1F4E79] text-white py-6">
//       <div className="max-w-7xl mx-auto px-6 flex justify-between">
//         <div>Milestones Binder · Vacation Checklist</div>

//         <div>Page 1 of 1</div>
//       </div>
//     </footer>
//   );
// }


// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-top">
//         <div className="footer-left">
//           Milestones · Vancouver, BC, Canada
//         </div>

//         <div className="footer-right">
//           <a href="mailto:hello@milestonebinder.com">
//             hello@milestonebinder.com
//           </a>
//         </div>
//       </div>

//       <div className="footer-center">
//         <p>
//           You’re receiving this because you
//           requested a free checklist or opted
//           in to updates at milestonebinder.com.
//         </p>

//         <a href="#">
//           Unsubscribe
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import "./footer.css";

import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <h2>KOSHA</h2>

      <div className="footer-links">
        <a href="https://kosha.family/why-kosha">
          Why “Kosha”
        </a>

        <a href="https://kosha.family/privacy">
          Privacy & security
        </a>

        <a href="https://kosha.family/early-access">
          Early access
        </a>
      </div>
      <p className="footer-copyright" style={{ fontSize: '0.75rem', color: '#555', marginTop: '16px' }}>© 2026 Kosha · kosha.family</p>
    </footer>
  );
}