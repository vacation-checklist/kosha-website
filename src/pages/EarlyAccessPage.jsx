import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function EarlyAccessPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    hold: [],
    for_whom: '',
    consent: false,
  })
  const [holdAll, setHoldAll] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const holdOptions = [
    { value: 'emergency_contacts', label: 'Emergency & medical contacts' },
    { value: 'insurance_accounts', label: 'Insurance policies & account info' },
    { value: 'id_photos', label: 'Photos of IDs (license, passport, health card)' },
    { value: 'document_locations', label: 'Where key documents are kept (will, deeds, etc.)' },
    { value: 'financial_details', label: 'Financial & investment account details' },
    { value: 'stories', label: 'Family stories, letters & voice recordings' },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckChange = (e) => {
    const { value, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      hold: checked
        ? [...prev.hold, value]
        : prev.hold.filter((item) => item !== value),
    }))
  }

  const handleHoldAllChange = (e) => {
    const { checked } = e.target
    setHoldAll(checked)
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        hold: holdOptions.map((opt) => opt.value),
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        hold: [],
      }))
    }
  }

  const handleConsentChange = (e) => {
    const { checked } = e.target
    setFormData((prev) => ({
      ...prev,
      consent: checked,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Build FormData for Formspree
    const formDataToSend = new FormData()
    formDataToSend.append('name', formData.name)
    formDataToSend.append('email', formData.email)
    formData.hold.forEach((item) => {
      formDataToSend.append('hold[]', item)
    })
    formDataToSend.append('for_whom', formData.for_whom)
    formDataToSend.append('consent', formData.consent ? 'yes' : 'no')
    formDataToSend.append('_next', 'https://kosha.family/thanks')

    try {
      const response = await fetch('https://formspree.io/f/xvznvavq', {
        method: 'POST',
        body: formDataToSend,
      })

      if (response.ok) {
        // Trigger Facebook Pixel conversion
        if (window.fbq) {
          window.fbq('track', 'Lead')
        }
        // Redirect to thanks page
        navigate('/thanks')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      // Show a fallback message
      setSubmitted(true)
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 px-12 border-b border-cream-dark">
        <div className="max-w-2xl mx-auto">
          <div className="eyebrow mb-6">Early access</div>
          <h1 className="font-garamond text-5xl md:text-6xl font-medium text-navy mb-6 leading-tight">
            Help shape Kosha — and be <em>first in</em>
          </h1>
          <p className="text-lg text-text-light leading-relaxed">
            We're opening early access in small groups. Tell us a little about what you'd keep in your kosha, and we'll save your place. No payment, no commitment — just first access and a real say in what we build.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-14 px-12">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-8">
              <p className="text-text-light mb-4">You're on the list — thank you.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form-card">
              <div className="form-row">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="given-name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-row">
                <label>
                  What would you want your kosha to hold?{' '}
                  <span className="font-normal text-text-light">(choose any)</span>
                </label>
                {holdOptions.map((option) => (
                  <label key={option.value} className="check-row block my-2">
                    <input
                      type="checkbox"
                      name="hold"
                      value={option.value}
                      checked={formData.hold.includes(option.value)}
                      onChange={handleCheckChange}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
                <label className="check-row block my-2">
                  <input
                    type="checkbox"
                    checked={holdAll}
                    onChange={handleHoldAllChange}
                  />
                  <span>All of the above</span>
                </label>
              </div>

              <div className="form-row">
                <label>Who would you mainly use it for?</label>
                <label className="check-row block my-2">
                  <input
                    type="radio"
                    name="for_whom"
                    value="self"
                    checked={formData.for_whom === 'self'}
                    onChange={handleInputChange}
                  />
                  <span>Myself / my household</span>
                </label>
                <label className="check-row block my-2">
                  <input
                    type="radio"
                    name="for_whom"
                    value="parents"
                    checked={formData.for_whom === 'parents'}
                    onChange={handleInputChange}
                  />
                  <span>My aging parents</span>
                </label>
                <label className="check-row block my-2">
                  <input
                    type="radio"
                    name="for_whom"
                    value="both"
                    checked={formData.for_whom === 'both'}
                    onChange={handleInputChange}
                  />
                  <span>Both</span>
                </label>
              </div>

              <label className="check-row block my-3">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={handleConsentChange}
                  required
                />
                <span className="text-text-light">
                  Yes, email me about my early access — when my group opens, and what I helped shape. Nothing else.
                </span>
              </label>

              <div className="flex gap-4 mt-6">
                <button type="submit" className="btn btn-primary">
                  Save my place
                </button>
              </div>

              <p className="text-xs text-text-light mt-6">
                Only early-access emails. No newsletters, no promotions, no sharing — ever. Unsubscribe anytime. See{' '}
                <a href="/privacy" className="text-navy hover:underline">
                  privacy & security
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
