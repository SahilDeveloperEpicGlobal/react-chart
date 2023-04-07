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
import ContentBox from "../components/content-box";

const categories = [
  { value: "1", label: "Commodities" },
  { value: "2", label: "Catalog" },
  { value: "3", label: "Consumer" },
];

class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      country: "USA",
      category: "Commodities",
    };
    this.updateState = (key, value) => {
      this.setState({
        [key]: value,
      });
    };
    this.whenPin = (event, label) => {
      event.stopPropagation();
      this.props.dispatch(addPin(label));
    };
    this.onRemoveChip = (item) => {
      console.log(item);
      // this.props.dispatch(removePin(item));
    };
  }

  render() {
    // EXTRACT MEASURE GROUP
    const array = extractGroup(response3);
    // EXTRACT MEASURE DATA
    const lineData = extractData(DataPayloadResponse);

    const country = extractCountry(CPINSAAll_Country);

    return (
      <>
        <div className={styles.graphtab}>
          <div className={styles.tabs}>
            {this.props.tabs.pin.length > 0 && (
              <div className={styles["selected-chips"]}>
                <ul>
                  {this.props.tabs.pin.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </div>
            )}
            <CascadeTree>
              <TreeItem>
                <Cascade>Col</Cascade>
                <TreeWraper>
                  {array.map((item, _index) => {
                    return (
                      <TreeItemComponent
                        label={item.label}
                        options={item.options}
                        tabs={this.props.tabs}
                        dispatch={this.props.dispatch}
                      />
                    );
                  })}
                </TreeWraper>
              </TreeItem>
            </CascadeTree>
          </div>
          <div className={styles.raectselectbox}>
            <div className={styles.reactgraph}>
              <ul>
                <li>
                  <select
                    defaultValue={this.state.country}
                    onChange={({ target }) =>
                      this.updateState("country", target.value)
                    }
                  >
                    {country.map((item, index) => {
                      return (
                        <option key={index} value={item.DisplayName}>
                          {item.DisplayName}
                        </option>
                      );
                    })}
                  </select>
                </li>
                <li>
                  <select
                    defaultValue={this.state.category}
                    onChange={({ target }) =>
                      this.updateState("category", target.value)
                    }
                  >
                    {categories.map((item, index) => {
                      return (
                        <option key={index} value={item.label}>
                          {item.label}
                        </option>
                      );
                    })}
                  </select>
                </li>
              </ul>
              <Graph
                lineData={lineData}
                country={this.state.country}
                category={this.state.category}
              />
            </div>
            <div>
              <ContentBox
                tabs={this.props.tabs}
                dispatch={this.props.dispatch}
                country={this.state.country}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  tabs: state.tabs,
});
export default connect(mapStateToProps)(App);
