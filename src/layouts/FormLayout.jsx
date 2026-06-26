// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function FormLayout({ children }) {
//   return (
//     <div className="min-h-screen bg-[#FAF7F0] flex flex-col">
//       <Navbar />

//       <main className="flex-grow">{children}</main>

//       <Footer />
//     </div>
//   );
// }

import "../styles/layout.css";

export default function FormLayout({
  children,
}) {
  return (
    <div className="layout">
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
