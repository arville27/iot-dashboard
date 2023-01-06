import { dataGraph } from "../dummy";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import useMyDetailDialogStore from "./dialog/detailDialog/useMyDetailDialogStore";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const series = [
  {
    name: "GuestCount",
    data: dataGraph.map((data) => [new Date(data.day).getTime(), data.value]),
  },
];

export default function ChartSample() {
  const setDetailDialogIsOpen = useMyDetailDialogStore(
    (state) => state.setIsOpen
  );
  const setDetailDialogData = useMyDetailDialogStore((state) => state.setDate);

  const options: ApexOptions = {
    chart: {
      events: {
        click(_, __, options) {
          // try {
          //   const lineData = options.config.series.at(options.seriesIndex);
          //   if (lineData && lineData.data) {
          //     const [timestamp, value] = lineData.data[options.dataPointIndex];
          //     setDetailDialogData(new Date(timestamp));
          //     setDetailDialogIsOpen(true);
          //   }
          // } catch {
          //   return;
          // }
        },
      },
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

  return (
    <Chart
      options={options}
      series={series}
      type="area"
      width={"100%"}
      height={"300rem"}
    />
  );
}
