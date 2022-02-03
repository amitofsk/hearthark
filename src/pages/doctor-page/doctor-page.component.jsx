import React from "react";

import Sidebar from "../../components/sidebar/sidebar.component";
import Form from "../../components/form/form.component";
import Patient from "../../components/patient/patient.component";
import Notes from "../../components/notes/notes.component";
import Documents from "../../components/documents/documents.component";

import "./doctor-page.styles.scss";

const DoctorPage = () => {
  return (
    <section className="doctor-page">
      <Sidebar />
      <div className="content">
        <Form />
        <Patient />
        <Notes />
        <Documents />
      </div>
    </section>
  );
};

export default DoctorPage;
