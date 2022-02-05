import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/sidebar.component";
import HomePage from "./pages/home-page/home-page.component";
import DoctorLayout from "./pages/doctor-layout/doctor-layout.component";
import DoctorDashboardPage from "./pages/doctor-dashboard-page/doctor-dashboard-page.component";
import SinglePatientPage from "./pages/single-patient-page/single-patient-page.component";
import PatientsListPage from "./pages/patients-list-page/patients-list-page.component";
import PatientPage from "./pages/patient-page/patient-page.component";
import PatientAMPage from "./pages/patientAM-page/patientAM-page.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctor" element={<DoctorLayout />}>
          <Route index element={<DoctorDashboardPage />} />
          <Route path="dashboard" element={<DoctorDashboardPage />} />
          <Route path="patient" element={<SinglePatientPage />} />
        </Route>
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/patientAM" element={<PatientAMPage />} />
      </Routes>
    </div>
  );
}

export default App;
