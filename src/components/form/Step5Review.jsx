import { useNavigate } from "react-router-dom";

export default function Step5Review({
  formData,
  onBack,
}) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.setItem(
      "vacationFormData",
      JSON.stringify(formData)
    );

    navigate("/vacation-checklist/confirmation");
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>Review Your Checklist</h1>

        <p className="page-description">
          Review all your trip details before
          submitting your personalized vacation
          checklist.
        </p>
      </div>

      {/* Trip Basics */}
      <div className="review-card">
        <h2>Trip Basics</h2>

        <div className="review-grid">
          <div>
            <strong>Traveller Name:</strong>
            <p>
              {formData.travellerName ||
                "Not Provided"}
            </p>
          </div>

          <div>
            <strong>Email Address:</strong>
            <p>
              {formData.email ||
                "Not Provided"}
            </p>
          </div>

          <div>
            <strong>Destination:</strong>
            <p>
              {formData.destination ||
                "Not Provided"}
            </p>
          </div>

          <div>
            <strong>Travel Party:</strong>
            <p>
              {formData.partySize ||
                "Not Provided"}
            </p>
          </div>

          <div>
            <strong>Departure Date:</strong>
            <p>
              {formData.departDate ||
                "Not Provided"}
            </p>
          </div>

          <div>
            <strong>Return Date:</strong>
            <p>
              {formData.returnDate ||
                "Not Provided"}
            </p>
          </div>
        </div>
      </div>

      {/* Home Prep */}
      <div className="review-card">
        <h2>Home Preparation Tasks</h2>

        <ul className="review-list">
          {Object.entries(formData.homePrep)
            .filter(([, value]) => value)
            .map(([key]) => (
              <li key={key}>✓ {key}</li>
            ))}
        </ul>
      </div>

      {/* Emergency Contacts */}
      <div className="review-card">
        <h2>Emergency Contacts</h2>

        <div className="contacts-review">
          {formData.emergencyContacts.map(
            (contact) => (
              <div
                key={contact.Role}
                className="contact-review-card"
              >
                <h3>{contact.Role}</h3>

                <p>
                  <strong>Name:</strong>{" "}
                  {contact.name ||
                    "Not Provided"}
                </p>

                <p>
                  <strong>Phone:</strong>{" "}
                  {contact.phone ||
                    "Not Provided"}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {contact.email ||
                    "Not Provided"}
                </p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Travel Documents */}
      <div className="review-card">
        <h2>Travel Documents</h2>

        <ul className="review-list">
          {Object.entries(
            formData.travelDocuments
          )
            .filter(([, value]) => value)
            .map(([key]) => (
              <li key={key}>✓ {key}</li>
            ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="button-group-back">
        <button
          onClick={onBack}
          className="secondary-btn"
        >
          Back
        </button>

        <button
          onClick={handleSubmit}
          className="primary-btn"
        >
          Submit
        </button>
      </div>
    </div>
  );
}