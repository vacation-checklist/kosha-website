// export default function Step2HomePrep({
//   homePrep,
//   updateCheckbox,
//   onNext,
//   onBack,
// }) {
//   return (
//     <>
//       <p className="text-[#C9A84C] font-semibold">STEP 2 OF 5</p>

//       <h1 className="text-3xl font-bold text-[#1F4E79] mt-2">Home Prep</h1>

//       <div className="mt-8 space-y-4">
//         {Object.entries(homePrep).map(([key, value]) => (
//           <label key={key} className="flex items-center gap-3">
//             <input
//               type="checkbox"
//               checked={value}
//               onChange={(e) =>
//                 updateCheckbox("homePrep", key, e.target.checked)
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

import React from "react";

export default function Step2HomePrep({
  homePrep,
  updateCheckbox,
  onNext,
  onBack,
}) {
  const handleContinue = () => {
    // check if at least one option is selected
    const anySelected = Object.values(homePrep).some(
      (val) => val === true
    );

    if (!anySelected) {
      const proceed = window.confirm(
        "No tasks have been selected. Do you wish to proceed?"
      );

      if (!proceed) return;
    }

    onNext();
  };

  return (
    <div className="form-container">
      <h1>Home Preparation</h1>

      <p className="page-description">
        Complete these important tasks before leaving
        to keep your home safe, secure, and well
        maintained while you're away.
      </p>

      <div className="checkbox-grid">
        {Object.entries(homePrep).map(([key, value]) => (
          <label key={key} className="checkbox-card">
            <input
              type="checkbox"
              checked={value}
              onChange={(e) =>
                updateCheckbox("homePrep", key, e.target.checked)
              }
            />

            <div>
              <h4>{key}</h4>
              <p>Mark this task as completed before your trip.</p>
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