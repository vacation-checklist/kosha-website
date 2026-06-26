// export default function Step1TripBasics({ formData, updateField, onNext }) {
//   return (
//     <>
//       <div className="mb-8">
//         <p className="text-[#C9A84C] font-semibold">STEP 1 OF 5</p>

//         <h1 className="text-3xl font-bold text-[#1F4E79] mt-2">Trip Basics</h1>
//       </div>

//       <div className="grid md:grid-cols-2 gap-6">
//         <input
//           placeholder="Traveller Name"
//           value={formData.travellerName}
//           onChange={(e) => updateField("travellerName", e.target.value)}
//           className="border rounded-lg p-3"
//         />

//         <input
//           placeholder="Email"
//           value={formData.email}
//           readOnly
//           className="border rounded-lg p-3 bg-gray-100"
//         />

//         <input
//           placeholder="Destination"
//           value={formData.destination}
//           onChange={(e) => updateField("destination", e.target.value)}
//           className="border rounded-lg p-3"
//         />

//         <input
//           type="number"
//           placeholder="Party Size"
//           value={formData.partySize}
//           onChange={(e) => updateField("partySize", e.target.value)}
//           className="border rounded-lg p-3"
//         />

//         <input
//           type="date"
//           value={formData.departDate}
//           onChange={(e) => updateField("departDate", e.target.value)}
//           className="border rounded-lg p-3"
//         />

//         <input
//           type="date"
//           value={formData.returnDate}
//           onChange={(e) => updateField("returnDate", e.target.value)}
//           className="border rounded-lg p-3"
//         />
//       </div>

//       <div className="mt-10 flex justify-end">
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

// export default function Step1TripBasics({
//   formData,
//   updateField,
//   onNext,
// }) {
//   return (
//     <div className="form-container">
//       <h1>Trip Basics</h1>

//       <p className="page-description">
//         Tell us about your upcoming trip.
//       </p>

//       <div className="form-group">
//         <label>Traveller Name</label>

//         <input
//           type="text"
//           placeholder="Enter your full name"
//           value={formData.travellerName || ""}
//           onChange={(e) =>
//             updateField(
//               "travellerName",
//               e.target.value
//             )
//           }
//         />
//       </div>

//       <div className="form-group">
//         <label>Email Address</label>

//         <input
//           type="email"
//           value={formData.email || ""}
//           readOnly
//           className="readonly-input"
//         />
//       </div>

//       <div className="form-group">
//         <label>Destination</label>

//         <input
//           type="text"
//           placeholder="Where are you going?"
//           value={formData.destination || ""}
//           onChange={(e) =>
//             updateField(
//               "destination",
//               e.target.value
//             )
//           }
//         />
//       </div>

//       <div className="form-group">
//         <label>Travel Party</label>

//         <input
//           type="number"
//           placeholder="Enter party size"
//           value={formData.partySize || ""}
//           onChange={(e) =>
//             updateField(
//               "partySize",
//               e.target.value
//             )
//           }
//         />
//       </div>

//       <div className="form-group">
//         <label>Departure Date</label>

//         <input
//           type="date"
//           value={formData.departDate || ""}
//           onChange={(e) =>
//             updateField(
//               "departDate",
//               e.target.value
//             )
//           }
//         />
//       </div>

//       <div className="form-group">
//         <label>Return Date</label>

//         <input
//           type="date"
//           value={formData.returnDate || ""}
//           onChange={(e) =>
//             updateField(
//               "returnDate",
//               e.target.value
//             )
//           }
//         />
//       </div>

//       <div className="button-group">
//         <button
//           className="primary-btn"
//           onClick={onNext}
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

export default function Step1TripBasics({
  formData,
  updateField,
  onNext,
}) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    const nameRegex = /^[A-Za-z\s]{3,}$/;
    const destinationRegex = /^[A-Za-z\s]{3,}$/;

    // Traveller Name
    if (!formData.travellerName || !nameRegex.test(formData.travellerName)) {
      newErrors.travellerName =
        "Name must be at least 3 characters and contain only alphabets.";
    }

    // Destination
    if (!formData.destination || !destinationRegex.test(formData.destination)) {
      newErrors.destination =
        "Destination must be at least 3 characters and contain only alphabets.";
    }

    // Departure Date (must be future)
    if (formData.departDate) {
      const today = new Date();
      const depart = new Date(formData.departDate);
      today.setHours(0, 0, 0, 0);

      if (depart <= today) {
        newErrors.departDate = "Departure date must be in the future.";
      }
    }

    // Return Date (after departure)
    if (formData.returnDate && formData.departDate) {
      const depart = new Date(formData.departDate);
      const ret = new Date(formData.returnDate);

      if (ret <= depart) {
        newErrors.returnDate =
          "Return date must be after departure date.";
      }
    }

    // Travel Party required
    if (!formData.partySize) {
      newErrors.partySize = "Please select a travel party.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validate()) {
      onNext();
    }
  };

  return (
    <div className="form-container">
      <h1>Trip Basics</h1>

      <p className="page-description">
        Tell us about your upcoming trip.
      </p>
<div className="trip-basics-grid">
      {/* Traveller Name */}
      <div className="form-group">
        <label>Traveller Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={formData.travellerName || ""}
          onChange={(e) =>
            updateField("travellerName", e.target.value)
          }
        />
        {errors.travellerName && (
          <span className="error-text">{errors.travellerName}</span>
        )}
      </div>

      {/* Email */}
      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          value={formData.email || ""}
          readOnly
          className="readonly-input"
        />
      </div>

      {/* Destination */}
      <div className="form-group">
        <label>Destination</label>
        <input
          type="text"
          placeholder="Where are you going?"
          value={formData.destination || ""}
          onChange={(e) =>
            updateField("destination", e.target.value)
          }
        />
        {errors.destination && (
          <span className="error-text">{errors.destination}</span>
        )}
      </div>

      {/* Travel Party */}
      <div className="form-group">
        <label>Travel Party *</label>
        <select
          value={formData.partySize || ""}
          onChange={(e) =>
            updateField("partySize", e.target.value)
          }
        >
          <option value="">Select Travel Party</option>
          <option value="Just Me">Just Me</option>
          <option value="Partner">Partner</option>
          <option value="Family">Family</option>
          <option value="Friends">Friends</option>
        </select>
        {errors.partySize && (
          <span className="error-text">{errors.partySize}</span>
        )}
      </div>

      {/* Departure Date */}
      <div className="form-group">
        <label>Departure Date</label>
        <input
          type="date"
          value={formData.departDate || ""}
          onChange={(e) =>
            updateField("departDate", e.target.value)
          }
        />
        {errors.departDate && (
          <span className="error-text">{errors.departDate}</span>
        )}
      </div>

      {/* Return Date */}
      <div className="form-group">
        <label>Return Date</label>
        <input
          type="date"
          value={formData.returnDate || ""}
          onChange={(e) =>
            updateField("returnDate", e.target.value)
          }
        />
        {errors.returnDate && (
          <span className="error-text">{errors.returnDate}</span>
        )}
      </div>
</div>
      <div className="button-group">
        <button className="primary-btn" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}