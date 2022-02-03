import React from "react";

import "./patient.styles.scss";

const Patient = () => {
  return (
    <article className="patient">
      <div className="patient__info-main">
        <div className="patient__img" />
        <h3>ludmila sidorshina</h3>
        <span className="patient__email">something@gmail.com</span>
        <div className="patient__appointment-container">
          <span className="patient__appointment-text">appointments</span>
          <div className="appointment__container">
            <div className="appointment__past">
              <span className="appointment__num">5</span>
              <span>past</span>
            </div>
            <div className="appointment__upcoming">
              <span className="appointment__num">2</span>
              <span>upcoming</span>
            </div>
          </div>
        </div>
        <button className="btn--primary btn--patinet">send message</button>
      </div>

      <div className="patient__info">
        <div className="patient__info-group">
          <span className="patient__info-name">gender</span>
          <span className="patient__info-value">female</span>
        </div>
        <div className="patient__info-group">
          <span className="patient__info-name">birthday</span>
          <span className="patient__info-value">oct, 12, 1990</span>
        </div>
        <div className="patient__info-group">
          <span className="patient__info-name">phone number</span>
          <span className="patient__info-value">(062) 222-2222</span>
        </div>
        <div className="patient__info-group">
          <span className="patient__info-name">address</span>
          <span className="patient__info-value">something str.222A</span>
        </div>
        <div className="patient__info-group">
          <span className="patient__info-name">city</span>
          <span className="patient__info-value">berlin</span>
        </div>
        <div className="patient__info-group">
          <span className="patient__info-name">zip code</span>
          <span className="patient__info-value">22222</span>
        </div>
        <div className="patient__info-group">
          <span className="patient__info-name">registration date</span>
          <span className="patient__info-value">oct, 12, 1990</span>
        </div>
        <div className="patient__info-group">
          <span className="patient__info-name">member status</span>
          <span className="patient__info-value">active member</span>
        </div>
      </div>
    </article>
  );
};

export default Patient;
