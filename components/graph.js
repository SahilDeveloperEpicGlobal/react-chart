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
import Payload from "@/constant/payload";
import { connect } from "react-redux";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const fakeData = Array.from({ length: 40 }).map((_, i) => i / 10);
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
class Graph extends React.Component {
  constructor() {
    super(...arguments);
    this.graphOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart",
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
    this.graphDatasets = {
      tension: 0.4,
      borderWidth: 1,
      pointHitRadius: 10,
      pointStyle: "circle",
      pointRadius: 2,
    };
  }
  render() {
    let graphData = [];
    Payload.Data.map((iterator_one) => {
      return iterator_one.map((iterator_two) => {
        if (Array.isArray(iterator_two)) {
          return iterator_two.map((iterator_three) => {
            if (typeof iterator_three === "number") {
              graphData.push(iterator_three);
              return iterator_three;
            }
          });
        }
      });
    });
    const _dataOne = () => {
      switch (this.props.tabs.tabOne) {
        case "M1":
          return graphData.slice(100, 150);
        case "M2":
          return graphData.slice(150, 200);
        case "M3":
          return graphData.slice(200, 250);
        default:
          return [];
      }
    };
    const _dataTwo = () => {
      switch (this.props.tabs.tabTwo) {
        case "M4":
          return graphData.slice(180, 220);
        case "M5":
          return graphData.slice(220, 270);
        case "M6":
          return graphData.slice(270, 360);
        default:
          return [];
      }
    };
    const dataOne = _dataOne();
    const dataTwo = _dataTwo();
    return (
      <React.Fragment>
        <Line
          height={195}
          options={this.graphOptions}
          data={{
            // labels,
            labels: Array.from({ length: 30 }).map((_, i) => i),
            datasets: [
              {
                data: dataOne,
                label: `High`,
                borderColor: "#8093f1",
                backgroundColor: "#8093f1",
                ...this.graphDatasets,
              },
              {
                data: dataTwo,
                label: `Low`,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgb(255, 99, 132)",
                ...this.graphDatasets,
              },
            ],
          }}
        />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  tabs: state.tabs,
});
export default connect(mapStateToProps)(Graph);
