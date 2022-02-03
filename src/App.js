import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home-page/home-page.component";
import DoctorPage from "./pages/doctor-page/doctor-page.component";
import PatientPage from "./pages/patient-page/patient-page.component";
import PatientAMPage from "./pages/patientAM-page/patientAM-page.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/patient" element={<PatientPage />} />
	<Route path="/patientAM" element={<PatientAMPage />} />
      </Routes>
    </div>
  );
}

export default App;
