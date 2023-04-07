import React from "react";
import { connect } from "react-redux";
import Graph from "../components/graph";
import styles from "../styles/home.module.scss";
import { addPin, removePin } from "../store/slices/tabs";
import CascadeTree from "../components/cascade-tree";
import { Cascade, TreeItem, TreeWraper } from "../components/cascade-tree";
import response3 from "../constant/response3.json";
import DataPayloadResponse from "../constant/DataPayloadResponse.json";
import CPINSAAll_Country from "../constant/CPINSAAll_Country.json";
import extractGroup from "../utils/extractGroup";
import extractData from "../utils/extractData";
import CloseIcon from "../components/icons/CloseIcon";
import extractCountry from "../utils/extractCountry";
import TreeItemComponent from "../components/tree-item";

class ContentBox extends React.Component {
  render() {
    return (
      <ul className={styles["content-box"]}>
        {this.props.tabs.pin.map((item, index) => {
          return (
            <li key={index}>
              Global Commodity Price Index For {item} [{this.props.country}],{" "}
              <a
                href="/"
                style={{
                  color: "#3F51B5",
                  fontWeight: "500",
                }}
              >
                Link to data (external)
              </a>
              <span
                className={styles["close-icon"]}
                onClick={() => this.props.dispatch(removePin(item))}
              >
                <CloseIcon height={16} width={16} fill="#555" />
              </span>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContentBox;
