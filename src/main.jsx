import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import HomePage from './pages/HomePage'
import EarlyAccessPage from './pages/EarlyAccessPage'
import ThanksPage from './pages/ThanksPage'
import WhyKoshaPage from './pages/WhyKoshaPage'
import PrivacyPage from './pages/PrivacyPage'
import VacationChecklistLayout from './pages/VacationChecklistLayout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/early-access" element={<EarlyAccessPage />} />
          <Route path="/thanks" element={<ThanksPage />} />
          <Route path="/why-kosha" element={<WhyKoshaPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/vacation-checklist/*" element={<VacationChecklistLayout />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
