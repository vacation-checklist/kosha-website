import { Routes, Route } from 'react-router-dom'
import '../styles/vacation-form.css'
import VacationLandingPage from './vacation/VacationLandingPage'
import VacationFormPage from './vacation/VacationFormPage'
import ConfirmationPage from './vacation/ConfirmationPage'

export default function VacationChecklistLayout() {
  return (
    <div className="bg-white min-h-screen">
      <Routes>
        <Route path="/" element={<VacationLandingPage />} />
        <Route path="/form" element={<VacationFormPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </div>
  )
}
