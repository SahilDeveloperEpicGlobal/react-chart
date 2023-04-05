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
  TimeScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import moment from "moment/moment";
import "chartjs-adapter-moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
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
          type: "time",
          time: {
            unit: "day",
            tooltipFormat: "YYYY-MM-DD",
            parser: "YYYY/MM",
            displayFormats: {
              day: "YYYY/MM",
            },
          },
          ticks: {
            maxTicksLimit: 11.1,
          },
          display: true,
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
    let { country, category, lineData } = this.props;

    const _dataOne = () => {
      switch (this.props.tabs.tab) {
        case "M1":
          return this.props.lineData.slice(150, 200);
        case "M2":
          return this.props.lineData.slice(150, 200);
        case "M3":
          return this.props.lineData.slice(200, 250);
        case "M4":
          return this.props.lineData.slice(180, 220);
        case "M5":
          return this.props.lineData.slice(220, 270);
        case "M6":
          return this.props.lineData.slice(270, 360);
        default:
          return [];
      }
    };

    const dataTwo = (label) => {
      switch (label) {
        case "M1":
          return lineData.slice(100, 150);
        case "M2":
          return lineData.slice(150, 200);
        case "M3":
          return lineData.slice(200, 250);
        case "M4":
          return lineData.slice(180, 220);
        case "M5":
          return lineData.slice(220, 270);
        case "M6":
          return lineData.slice(270, 360);
        default:
          return [];
      }
    };

    const dataOne = _dataOne();

    const labels = this.props.lineData
      .slice(0, 50)
      .map((data) => moment(data.date).format("YYYY/MM/DD"));

    return (
      <React.Fragment>
        <Line
          height={`200px`}
          options={this.graphOptions}
          data={{
            label: this.props.tabs.tab,
            labels,
            datasets: [
              {
                data: dataOne.map((item) => item.FSRaw),
                label: `High`,
                borderColor: "#8093f1",
                backgroundColor: "#8093f1",
                ...this.graphDatasets,
              },
              // ...this.props.tabs.pin.map((item, index) => {
              //   return {
              //     data: dataTwo(item),
              //     label: item,
              //     borderColor: `rgb(255, ${132 + index * 20}, ${
              //       132 + index * 20
              //     })`,
              //     backgroundColor: `rgb(255, ${132 + index * 20}, ${
              //       132 + index * 10
              //     })`,
              //     ...this.graphDatasets,
              //   };
              // }),
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
