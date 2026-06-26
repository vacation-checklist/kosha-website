// export default function Step4TravelDocuments({
//   travelDocuments,
//   updateCheckbox,
//   onNext,
//   onBack,
// }) {
//   return (
//     <>
//       <p className="text-[#C9A84C] font-semibold">STEP 4 OF 5</p>

//       <h1 className="text-3xl font-bold text-[#1F4E79] mt-2">
//         Travel Documents
//       </h1>

//       <div className="mt-8 space-y-4">
//         {Object.entries(travelDocuments).map(([key, value]) => (
//           <label key={key} className="flex items-center gap-3">
//             <input
//               type="checkbox"
//               checked={value}
//               onChange={(e) =>
//                 updateCheckbox("travelDocuments", key, e.target.checked)
//               }
//             />

//             {key}
//           </label>
//         ))}
//       </div>

//       <div className="mt-10 flex justify-between">
//         <button onClick={onBack} className="border px-6 py-3 rounded-lg">
//           ← Back
//         </button>

//         <button
//           onClick={onNext}
//           className="bg-[#1F4E79] text-white px-8 py-3 rounded-lg"
//         >
//           Next →
//         </button>
//       </div>
//     </>
//   );
// }

export default function Step4TravelDocuments({
  travelDocuments,
  updateCheckbox,
  onNext,
  onBack,
}) {
  // const documentLabels = {
  //   Passport: "Passport",
  //   Insurance: "Travel Insurance",
  //   Visa: "Visa",
  //   Accommodation: "Accommodation Details",
  //   FlightsOffline: "Offline Flight Copies",
  //   Roaming: "Roaming / SIM Setup",
  //   cash: "Cash & Cards",
  //   medications: "Medications",
  // };

  const documentLabels = {
    "Passport valid 6+ months": "Passport",
    "Travel insurance purchased": "Travel Insurance",
    Visa: "Visa",
    "Accommodation confirmed": "Accommodation Details",
    "Flights saved offline": "Offline Flight Copies",
    "Data roaming / SIM arranged": "Roaming / SIM Setup",
    "Emergency cash in separate bag": "Cash & Cards",
    "Medications and prescriptions": "Medications",
  };

  const handleContinue = () => {
    const anySelected = Object.values(travelDocuments).some(
      (val) => val === true
    );

    if (!anySelected) {
      const proceed = window.confirm(
        "No travel documents have been selected. Do you wish to proceed?"
      );

      if (!proceed) return;
    }

    onNext();
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>Travel Documents</h1>

        <p className="page-description">
          Make sure all important travel documents and essentials are ready
          before your departure.
        </p>
      </div>

      <div className="checkbox-grid">
        {Object.entries(travelDocuments).map(([key, value]) => (
          <label key={key} className="checkbox-card">
            <input
              type="checkbox"
              checked={value}
              onChange={(e) =>
                updateCheckbox(
                  "travelDocuments",
                  key,
                  e.target.checked
                )
              }
            />

            <div>
              <h4>{documentLabels[key]}</h4>

              <p>Mark as completed if this item is ready.</p>
            </div>
          </label>
        ))}
      </div>

      <div className="button-group-back">
        <button onClick={onBack} className="secondary-btn">
          Back
        </button>

        <button onClick={handleContinue} className="primary-btn">
          Continue
        </button>
      </div>
    </div>
  );
}