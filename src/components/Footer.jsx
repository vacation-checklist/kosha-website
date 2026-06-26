

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

        <a href="mailto:hello@kosha.family">
          Contact Us
        </a>
      </div>
      <p className="footer-copyright" style={{ fontSize: '0.75rem', color: '#555', marginTop: '16px' }}>© 2026 Kosha · kosha.family</p>
    </footer>
  );
}