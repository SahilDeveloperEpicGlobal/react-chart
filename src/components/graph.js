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
import Payload from "../constant/payload";
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
      switch (this.props.tabs.tab) {
        case "M1":
          return graphData.slice(100, 150);
        case "M2":
          return graphData.slice(150, 200);
        case "M3":
          return graphData.slice(200, 250);
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

    const dataTwo = (label) => {
      switch (label) {
        case "M1":
          return graphData.slice(100, 150);
        case "M2":
          return graphData.slice(150, 200);
        case "M3":
          return graphData.slice(200, 250);
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

    return (
      <React.Fragment>
        <Line
          height={`200px`}
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
              ...this.props.tabs.pin.map((item, index) => {
                return {
                  data: dataTwo(item),
                  label: item,
                  borderColor: `rgb(255, ${132 + index * 20}, ${
                    132 + index * 20
                  })`,
                  backgroundColor: `rgb(255, ${132 + index * 20}, ${
                    132 + index * 10
                  })`,
                  ...this.graphDatasets,
                };
              }),
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
