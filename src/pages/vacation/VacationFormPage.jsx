import { useState } from "react";
import FormLayout from "../../layouts/FormLayout";
import Step1TripBasics from "../../components/form/Step1TripBasics";
import Step2HomePrep from "../../components/form/Step2HomePrep";
import Step3EmergencyContacts from "../../components/form/Step3EmergencyContacts";
import Step4TravelDocuments from "../../components/form/Step4TravelDocuments";
import Step5Review from "../../components/form/Step5Review";

export default function VacationFormPage() {
  const storedEmail = localStorage.getItem("vacationEmail") || "";
  const storedConsent =JSON.parse(localStorage.getItem("marketingConsent")) || false;

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    travellerName: "",
    email: storedEmail,
    destination: "",
    departDate: "",
    returnDate: "",
    partySize: "",
    marketingConsent: storedConsent,


    // homePrep: {
    //   "Mail Hold": false,
    //   HouseSitter: false,
    //   Plants: false,
    //   Pets: false,
    //   Locks: false,
    //   Thermostat: false,
    //   Appliances: false,
    //   Alarm: false,
    // },

    homePrep: {
      "Mail held / deliveries paused": false,
      "Housesitter arranged": false,
      "Plants watered / arranged": false,
      "Pet care": false,
      "Windows and doors locked": false,
      "Thermostat set for absence": false,
      "Unplug appliances": false,
      "Alarm company notified": false,
    },

    emergencyContacts: [
      {
        Role: "Neighbour Details",
        Name: "",
        Phone: "",
        Email: "",
      },
      {
        Role: "Emergency Contact Details",
        Name: "",
        Phone: "",
        Email: "",
      },
      {
        Role: "Veterinarian Details",
        Name: "",
        Phone: "",
        Email: "",
      },
      {
        Role: "Plumber Details",
        Name: "",
        Phone: "",
        Email: "",
      },
    ],

    // travelDocuments: {
    //   Passport: false,
    //   Insurance: false,
    //   Visa: false,
    //   Accommodation: false,
    //   FlightsOffline: false,
    //   Roaming: false,
    //   cash: false,
    //   medications: false,
    // },

    travelDocuments: {
      "Passport valid 6+ months": false,
      "Travel insurance purchased": false,
      Visa: false,
      "Accommodation confirmed": false,
      "Flights saved offline": false,
      "Data roaming / SIM arranged": false,
      "Emergency cash in separate bag": false,
      "Medications and prescriptions": false,
    },
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateCheckbox = (section, field, checked) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: checked,
      },
    }));
  };

  const updateContact = (index, field, value) => {
    const updatedContacts = [...formData.emergencyContacts];

    updatedContacts[index] = {
      ...updatedContacts[index],
      [field]: value,
    };

    setFormData((prev) => ({
      ...prev,
      emergencyContacts: updatedContacts,
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1TripBasics
            formData={formData}
            updateField={updateField}
            onNext={() => setStep(2)}
          />
        );

      case 2:
        return (
          <Step2HomePrep
            homePrep={formData.homePrep}
            updateCheckbox={updateCheckbox}
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        );

      case 3:
        return (
          <Step3EmergencyContacts
            contacts={formData.emergencyContacts}
            updateContact={updateContact}
            onBack={() => setStep(2)}
            onNext={() => setStep(4)}
          />
        );

      case 4:
        return (
          <Step4TravelDocuments
            travelDocuments={formData.travelDocuments}
            updateCheckbox={updateCheckbox}
            onBack={() => setStep(3)}
            onNext={() => setStep(5)}
          />
        );

      case 5:
        return <Step5Review formData={formData} onBack={() => setStep(4)} />;
      default:
        return null;
    }
  };

  return (
    <FormLayout>
      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-[#1F4E79] mb-2">
              <span>Step {step} of 5</span>

              <span>{Math.round((step / 5) * 100)}%</span>
            </div>

            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-[#C9A84C] rounded-full transition-all"
                style={{
                  width: `${(step / 5) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            {renderStep()}
          </div>
        </div>
      </div>
    </FormLayout>
  );
}
