import React, { useState } from "react";
import Chart from "react-apexcharts";
import { FaHeartbeat } from "react-icons/fa";

import "./patient-page.styles.scss";

const PatientPage = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Resting heart rate",
      data: [65, 73, 70, 80, 85, 72, 78],
    },
  ]);

  return (
    <div className="patient-page">
      <div className="user-charts">
        <article className="heart-rate">
          <span>Current heart rate</span>
          <div className="heart-rate__info">
            <p>
              <span className="heart-rate__number">124</span> bpm
            </p>
            <FaHeartbeat className="heart-rate__icon" />
          </div>
        </article>

        <article className="RHR-container">
          <h3 className="heading-tertiary chart__heading">
            Resting heart rate
          </h3>
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={options}
                series={series}
                type="line"
                width="400"
              />
            </div>
          </div>
        </article>
      </div>

      {/* User Info */}
      <div className="user-info">
        <article>
          <div className="user__main-info">
            <div className="user__image"></div>
            <div>
              <h2 className="heading-secondary">Issac williams</h2>
              <h3 className="heading-tertiary">25 years old, London</h3>
            </div>
          </div>

          <div className="user__details">
            <div className="user__details-group">
              <div className="user__details-text">
                <span className="user__details-label">blood</span>
                <span className="user__details-value">O+</span>
              </div>
            </div>
            <div className="user__details-group">
              <div className="user__details-text">
                <span className="user__details-label">height</span>
                <span className="user__details-value">186cm</span>
              </div>
            </div>
            <div className="user__details-group">
              <div className="user__details-text">
                <span className="user__details-label">weight</span>
                <span className="user__details-value">90kg</span>
              </div>
            </div>
          </div>
        </article>

        <article className="appointments">
          <div className="appointments__container">
            <h3 className="appointments__heading">Health appointments</h3>
            <span>9:00AM - 11:30AM</span>
            <span className="appointments__doctor">dr. douglas wade</span>
            <hr />
            <button className="btn">follow-up</button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PatientPage;
