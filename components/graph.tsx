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
import Payload from "@/constant/payload";

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

const labels = [
  "January",
  "January",
  "January",
  "January",
  "January",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];
console.clear();
const Graph = () => {
  const graphData = React.useRef<number[]>([]);
  Payload.Data.map((iterator_one) => {
    return iterator_one.map((iterator_two) => {
      if (Array.isArray(iterator_two)) {
        return iterator_two.map((iterator_three) => {
          if (typeof iterator_three === "number") {
            graphData.current.push(iterator_three);
            return iterator_three;
          }
        });
      }
    });
  });

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

  return (
    <React.Fragment>
      <Line
        options={graphOptions}
        data={{
          labels: Array.from({ length: 100 }).map((_, i) => i),
          datasets: [
            {
              data: graphData.current,
              label: `High`,
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(53, 162, 235, 0.5)",
              ...graphDatasets,
            },
            {
              data: graphData.current.slice(100, 200),
              label: `Low`,
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
              ...graphDatasets,
            },
          ],
        }}
      />
    </React.Fragment>
  );
};

export default Graph;
