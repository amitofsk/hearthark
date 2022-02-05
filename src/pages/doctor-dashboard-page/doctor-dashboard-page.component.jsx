import React, { useState } from "react";
import Calendar from "react-calendar";

import Sidebar from "../../components/sidebar/sidebar.component";
import PatientAttendance from "../../components/patient-attendance/patient-attendance.component";
import UpcomingAppointments from "../../components/upcoming-appointments/upcoming-appointments.component";
import MonthEvents from "../../components/month-events/month-events.component";

import "./doctor-dashboard-page.styles.scss";

const DoctorDashboardPage = () => {
  const [value, onChange] = useState(new Date());
  return (
    <section className="dashboard-page">
      <Sidebar />
      <div className="content">
        <PatientAttendance />
        <UpcomingAppointments />
        <Calendar className="calendar" value={value} onChange={onChange} />
        <MonthEvents />
      </div>
    </section>
  );
};

export default DoctorDashboardPage;
