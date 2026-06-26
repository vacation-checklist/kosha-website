import { useNavigate } from "react-router-dom";
import FormLayout from "../../layouts/FormLayout";

const API_URL = import.meta.env.VITE_API_URL;
const backendUrl = API_URL?.startsWith("http") ? API_URL : `https://${API_URL}`;

export default function ConfirmationPage() {
  const navigate = useNavigate();

  const handleGeneratePdf = async () => {
    try {
      const formData = JSON.parse(localStorage.getItem("vacationFormData"));

      if (!formData) {
        alert("No form data found.");
        return;
      }

      const payload = {
        travellerName: formData.travellerName,
        email: formData.email,
        destination: formData.destination,
        departDate: formData.departDate,
        returnDate: formData.returnDate,
        partySize: formData.partySize,

        consent: formData.marketingConsent,
        sections: [
          {
            title: "Home Preparation",
            tip: "Leave a spare key with your housesitter and ensure they have your mobile number with an international prefix for when you are travelling abroad.",
            items: Object.entries(formData.homePrep).map(
              ([label, checked]) => ({
                label,
                status: checked ? "checked" : "unchecked",
              }),
            ),
          },

          {
            title: "Travel Documents",
            tip: "Email yourself a photo of your passport, travel insurance policy number, and hotel address accessible from any device if your phone is lost.",
            items: Object.entries(formData.travelDocuments).map(
              ([label, checked]) => ({
                label,
                status: checked ? "checked" : "unchecked",
              }),
            ),
          },
        ],

        contacts: formData.emergencyContacts,
      };

      const response = await fetch(`${backendUrl}/send-pdf`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to generate PDF");
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");

      a.href = url;
      a.download = "VacationChecklist.pdf";

      document.body.appendChild(a);

      a.click();

      a.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);

      alert("Something went wrong while generating your checklist.");
    }
  };

  return (
    <FormLayout>
      <div className="page">
        <div className="confirmation-container">
          <div className="success-icon">✓</div>

          <h1>Your Checklist Is Ready!</h1>

          <p className="confirmation-message">
            Your personalized vacation checklist is ready to download.
          </p>

          <button className="primary-btn" onClick={handleGeneratePdf}>
            Download PDF
          </button>

          <div className="upsell-card">
            <h3>Looking Beyond This Trip?</h3>

            <p>
              Explore Kosha for organizing life events, family information,
              emergency contacts, and important records all in one place.
            </p>

            <a
              href="https://kosha.family/"
              target="_blank"
              rel="noopener noreferrer"
              className="explore-link"
            >
              Explore Kosha →
            </a>
          </div>

          <button className="secondary-btn" onClick={() => navigate("/")}>
            Back To Home
          </button>
        </div>
      </div>
    </FormLayout>
  );
}
