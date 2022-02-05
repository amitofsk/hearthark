import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

import "./patient-attendance.styles.scss";

const PatientAttendance = () => {
  const [series, setSeries] = useState([
    {
      // name: "Servings",
      data: [9, 22, 5, 50, 56, 33, 10, 22],
    },
  ]);
  const [options, setOptions] = useState({
    annotations: {
      points: [
        {
          x: "Sep",
          seriesIndex: 0,
          label: {
            borderColor: "#775DD0",
            offsetY: 0,
            style: {
              color: "#fff",
              background: "#775DD0",
            },
            text: "56",
          },
        },
      ],
    },
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
    },

    grid: {
      row: {
        colors: ["#fff", "#f2f2f2"],
      },
    },
    xaxis: {
      labels: {
        rotate: -45,
      },
      categories: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      tickPlacement: "on",
    },
    yaxis: {
      title: {
        // text: "Servings",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100],
      },
    },
  });
  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default PatientAttendance;
