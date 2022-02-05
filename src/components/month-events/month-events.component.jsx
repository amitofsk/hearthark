import React from "react";

import "./month-events.styles.scss";

const MonthEvents = () => {
  return (
    <article className="month-events box">
      <h2 className="heading-secondary">events of the month</h2>
      <ul className="month-events__list">
        <li className="list">evidenced-based medicine webinar</li>
        <li className="list">lecture on how to really help a patient</li>
        <li className="list">operative touch on the topic of antibiotics</li>
      </ul>
    </article>
  );
};

export default MonthEvents;
