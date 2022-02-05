import React from "react";

import "./upcoming-appointments.styles.scss";

const UpcomingAppointments = () => {
  return (
    <article className="upcoming-appointments box">
      <h2 className="heading-secondary">upcoming appointments</h2>
      <ul>
        <li className="upcoming__item">
          <div className="upcoming__group">
            <span className="upcoming__doctor">Dr. yuliya kolesnik</span>
            <span className="upcoming__patient">
              <span>patient:</span> angelina varum
            </span>
          </div>
          <span className="upcoming__time">08:00 - 10:00</span>
          <span className="upcoming__state--success">finished</span>
        </li>

        <li className="upcoming__item">
          <div className="upcoming__group">
            <span className="upcoming__doctor">Dr. bob murrey</span>
            <span className="upcoming__patient">
              <span>patient:</span> anna serova
            </span>
          </div>
          <span className="upcoming__time">11:00 - 12:00</span>
          <span className="upcoming__state--fail">during</span>
        </li>

        <li className="upcoming__item">
          <div className="upcoming__group">
            <span className="upcoming__doctor">Dr. alice cooper</span>
            <span className="upcoming__patient">
              <span>patient:</span> alina shapo
            </span>
          </div>
          <span className="upcoming__time">14:00 - 15:00</span>
          <span className="upcoming__state">didn't start</span>
        </li>
      </ul>
    </article>
  );
};

export default UpcomingAppointments;
