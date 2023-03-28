import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useAppSelector from "@/store/hooks/use-selector";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const fakeData = Array.from({ length: 50 }).map((_, i) => i / 10);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const Graph = () => {
  const tabs = useAppSelector((state) => state.tabs);

  const graphOptions = React.useMemo(() => {
    return {
      responsive: true,
      plugins: {
        legend: {
          position: "top" as const,
        },
        title: {
          display: true,
          text: "Chart.js Line Chart",
        },
      },
      scales: {
        x: {
          grid: {
            display: true,
          },
        },
      },
    };
  }, []);

  const graphDatasets = React.useMemo(() => {
    return {
      tension: 0.1,
      borderWidth: 1,
      pointHitRadius: 10,
      pointStyle: "circle",
      pointRadius: 3,
    };
  }, []);
  const MultipleGraph = React.useMemo(() => {
    switch (tabs.tabName) {
      case "MG1":
        return (
          <Line
            options={graphOptions}
            data={{
              labels,
              datasets: [
                {
                  data: [...fakeData],
                  label: `High`,
                  borderColor: "rgb(53, 162, 235)",
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                  ...graphDatasets,
                },
                {
                  data: [...fakeData],
                  label: `Low`,
                  borderColor: "rgb(255, 99, 132)",
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  ...graphDatasets,
                },
              ],
            }}
          />
        );
      case "M1":
        return (
          <Line
            options={graphOptions}
            data={{
              labels,
              datasets: [
                {
                  data: [...fakeData],
                  label: `High`,
                  borderColor: "rgb(53, 162, 235)",
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                  ...graphDatasets,
                },
                {
                  data: [...fakeData],
                  label: `Low`,
                  borderColor: "rgb(255, 99, 132)",
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  ...graphDatasets,
                },
              ],
            }}
          />
        );
      case "M2":
        return (
          <Line
            options={graphOptions}
            data={{
              labels,
              datasets: [
                {
                  data: [...fakeData],
                  label: `High`,
                  borderColor: "rgb(53, 162, 235)",
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                  ...graphDatasets,
                },
                {
                  data: [...fakeData],
                  label: `Low`,
                  borderColor: "rgb(255, 99, 132)",
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  ...graphDatasets,
                },
              ],
            }}
          />
        );
      case "M3":
        return (
          <Line
            options={graphOptions}
            data={{
              labels,
              datasets: [
                {
                  data: [...fakeData],
                  label: `High`,
                  borderColor: "rgb(53, 162, 235)",
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                  ...graphDatasets,
                },
                {
                  data: [...fakeData],
                  label: `Low`,
                  borderColor: "rgb(255, 99, 132)",
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  ...graphDatasets,
                },
              ],
            }}
          />
        );
      case "MG2":
        return (
          <Line
            options={graphOptions}
            data={{
              labels,
              datasets: [
                {
                  data: [...fakeData],
                  label: `High`,
                  borderColor: "rgb(53, 162, 235)",
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                  ...graphDatasets,
                },
                {
                  data: [...fakeData],
                  label: `Low`,
                  borderColor: "rgb(255, 99, 132)",
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  ...graphDatasets,
                },
              ],
            }}
          />
        );
      case "M4":
        return (
          <Line
            options={graphOptions}
            data={{
              labels,
              datasets: [
                {
                  data: [...fakeData],
                  label: `High`,
                  borderColor: "rgb(53, 162, 235)",
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                  ...graphDatasets,
                },
                {
                  data: [...fakeData],
                  label: `Low`,
                  borderColor: "rgb(255, 99, 132)",
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  ...graphDatasets,
                },
              ],
            }}
          />
        );
      case "M5":
        return (
          <Line
            options={graphOptions}
            data={{
              labels,
              datasets: [
                {
                  data: [...fakeData],
                  label: `High`,
                  borderColor: "rgb(53, 162, 235)",
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                  ...graphDatasets,
                },
                {
                  data: [...fakeData],
                  label: `Low`,
                  borderColor: "rgb(255, 99, 132)",
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  ...graphDatasets,
                },
              ],
            }}
          />
        );
      case "M6":
        return (
          <Line
            options={graphOptions}
            data={{
              labels,
              datasets: [
                {
                  data: [...fakeData],
                  label: `High`,
                  borderColor: "rgb(53, 162, 235)",
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                  ...graphDatasets,
                },
                {
                  data: [...fakeData],
                  label: `Low`,
                  borderColor: "rgb(255, 99, 132)",
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  ...graphDatasets,
                },
              ],
            }}
          />
        );
      default:
        return (
          <Line
            options={graphOptions}
            data={{
              labels,
              datasets: [
                {
                  data: [...fakeData],
                  label: `High`,
                  borderColor: "rgb(53, 162, 235)",
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                  ...graphDatasets,
                },
                {
                  data: [...fakeData],
                  label: `Low`,
                  borderColor: "rgb(255, 99, 132)",
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  ...graphDatasets,
                },
              ],
            }}
          />
        );
    }
  }, [graphDatasets, graphOptions, tabs.tabName]);

  return <React.Fragment>{MultipleGraph}</React.Fragment>;
};

export default Graph;
