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
        <h3 className="heading-tertiary chart__heading">Resting heart rate</h3>
        <div className="row">
          <div className="mixed-chart">
            <Chart options={options} series={series} type="line" width="400" />
          </div>
        </div>
      </article>
    </div>
  );
};

export default PatientPage;
