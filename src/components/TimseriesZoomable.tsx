import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
  data: [number, number][];
};

const TimeseriesZoomable: React.FC<Props> = ({ data }) => {
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

  return (
    <Chart
      options={options}
      series={[
        {
          name: "Guest visit",
          data,
        },
      ]}
      type="area"
      width={"100%"}
      height={"300rem"}
    />
  );
};

export default TimeseriesZoomable;
