// export default function Step3EmergencyContacts({
//   contacts,
//   updateContact,
//   onNext,
//   onBack,
// }) {
//   return (
//     <>
//       <p className="text-[#C9A84C] font-semibold">STEP 3 OF 5</p>

//       <h1 className="text-3xl font-bold text-[#1F4E79] mt-2">
//         Emergency Contacts
//       </h1>

//       <div className="mt-8 space-y-6">
//         {contacts.map((contact, index) => (
//           <div key={contact.role} className="border rounded-lg p-4">
//             <h3 className="font-bold mb-4">{contact.role}</h3>

//             <input
//               type="text"
//               placeholder="Name"
//               value={contact.name}
//               onChange={(e) => updateContact(index, "name", e.target.value)}
//               className="w-full border rounded p-2 mb-2"
//             />

//             <input
//               type="text"
//               placeholder="Phone"
//               value={contact.phone}
//               onChange={(e) => updateContact(index, "phone", e.target.value)}
//               className="w-full border rounded p-2 mb-2"
//             />

//             <input
//               type="email"
//               placeholder="Email"
//               value={contact.email}
//               onChange={(e) => updateContact(index, "email", e.target.value)}
//               className="w-full border rounded p-2"
//             />
//           </div>
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

// export default function Step3EmergencyContacts({
//   contacts,
//   updateContact,
//   onNext,
//   onBack,
// }) {
//   const contactLabels = [
//     "Neighbour Details",
//     "Emergency Contact Details",
//     "Veterinarian Details",
//     "Plumber Details",
//   ];

//   return (
//     <>
//       <div className="form-header">
//         <h1>Emergency Contacts</h1>

//         <p className="page-description">
//           Keep important contacts handy while you're away.
//         </p>
//       </div>

//       <div className="contacts-container emergency-grid">
//         {contacts.map((contact, index) => (
//           <div key={index} className="contact-card">
//             <h3>{contactLabels[index]}</h3>

//             <div className="form-group">
//               <label>Name</label>

//               <input
//                 type="text"
//                 placeholder="Enter name"
//                 value={contact.name}
//                 onChange={(e) =>
//                   updateContact(index, "name", e.target.value)
//                 }
//               />
//             </div>

//             <div className="form-group">
//               <label>Phone Number</label>

//               <input
//                 type="text"
//                 placeholder="Enter phone number"
//                 value={contact.phone}
//                 onChange={(e) =>
//                   updateContact(index, "phone", e.target.value)
//                 }
//               />
//             </div>

//             <div className="form-group">
//               <label>Email Address</label>

//               <input
//                 type="email"
//                 placeholder="Enter email address"
//                 value={contact.email}
//                 onChange={(e) =>
//                   updateContact(index, "email", e.target.value)
//                 }
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="button-group-back">
//         <button
//           onClick={onBack}
//           className="secondary-btn"
//         >
//           ← Back
//         </button>

//         <button
//           onClick={onNext}
//           className="primary-btn"
//         >
//           Continue →
//         </button>
//       </div>
//     </>
//   );
// }

import { useState } from "react";

export default function Step3EmergencyContacts({
  contacts,
  updateContact,
  onNext,
  onBack,
}) {
  const [errors, setErrors] = useState({});

  const contactLabels = [
    "Neighbour Details",
    "Emergency Contact Details",
    "Veterinarian Details",
    "Plumber Details",
  ];

  const validate = () => {
    const newErrors = {};

    contacts.forEach((contact, index) => {
      const nameRegex = /^[A-Za-z\s]{3,}$/;
      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/;

      // Name validation (optional field)
      if (
        contact.name &&
        !nameRegex.test(contact.name)
      ) {
        newErrors[`name-${index}`] =
          "Name must contain only alphabets and be at least 3 characters long.";
      }

      // Email validation (optional field)
      if (
        contact.email &&
        !emailRegex.test(contact.email)
      ) {
        newErrors[`email-${index}`] =
          "Please enter a valid email address.";
      }

      // Phone validation (optional field)
      if (
        contact.phone &&
        !phoneRegex.test(contact.phone)
      ) {
        newErrors[`phone-${index}`] =
          "Phone number must contain exactly 10 digits.";
      }
    });

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  const handleContinue = () => {
    if (validate()) {
      onNext();
    }
  };

  return (
    <>
      <div className="form-header">
        <h1>Emergency Contacts</h1>

        <p className="page-description">
          Keep important contacts handy while
          you're away.
        </p>
      </div>

      <div className="contacts-container emergency-grid">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="contact-card"
          >
            <h3>
              {contactLabels[index]}
            </h3>

            <div className="form-group">
              <label>Name</label>

              <input
                type="text"
                placeholder="Enter name"
                value={contact.name}
                onChange={(e) =>
                  updateContact(
                    index,
                    "name",
                    e.target.value
                  )
                }
              />

              {errors[`name-${index}`] && (
                <span className="error-text">
                  {
                    errors[
                      `name-${index}`
                    ]
                  }
                </span>
              )}
            </div>

            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="text"
                placeholder="Enter phone number"
                value={contact.phone}
                onChange={(e) =>
                  updateContact(
                    index,
                    "phone",
                    e.target.value
                  )
                }
              />

              {errors[`phone-${index}`] && (
                <span className="error-text">
                  {
                    errors[
                      `phone-${index}`
                    ]
                  }
                </span>
              )}
            </div>

            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter email address"
                value={contact.email}
                onChange={(e) =>
                  updateContact(
                    index,
                    "email",
                    e.target.value
                  )
                }
              />

              {errors[`email-${index}`] && (
                <span className="error-text">
                  {
                    errors[
                      `email-${index}`
                    ]
                  }
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="button-group-back">
        <button
          onClick={onBack}
          className="secondary-btn"
        >
           Back
        </button>

        <button
          onClick={handleContinue}
          className="primary-btn"
        >
          Continue 
        </button>
      </div>
    </>
  );
}