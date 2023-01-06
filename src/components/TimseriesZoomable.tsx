import React, { useState, useEffect } from "react";
// import Chart from "react-apexcharts";
import { dataGraph } from "../dummy";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const series = [
  {
    name: "GuestCount",
    data: dataGraph.map((data) => [new Date(data.day).getTime(), data.value]),
  },
];

const options: ApexOptions = {
  chart: {
    height: 300,
    foreColor: "#999",
    stacked: true,
  },
  colors: ["#C8B6E2"],
  xaxis: {
    type: "datetime",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      offsetX: 14,
      offsetY: -5,
    },
    tooltip: {
      enabled: true,
    },
    title: {
      text: "Frequency",
    },
  },
  grid: {
    padding: {
      left: -5,
      right: 25,
    },
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy",
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
  },
};

export default function ChartSample() {
  return (
    <div>
      <h1 className="text-semibold text-xl">Timeseries</h1>
      <Chart
        options={options}
        series={series}
        type="area"
        width={"100%"}
        height={"300rem"}
      />
    </div>
  );
}
