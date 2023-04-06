import React from "react";
import { connect } from "react-redux";
import Graph from "../components/graph";
import styles from "../styles/home.module.scss";
import { addPin, updateTab, addContent, removePin } from "../store/slices/tabs";
import CascadeTree from "../components/cascade-tree";
import { Cascade, TreeItem, TreeWraper } from "../components/cascade-tree";
import response3 from "../constant/response3.json";
import DataPayloadResponse from "../constant/DataPayloadResponse.json";
import aa from "../constant/aa.json";
import extractGroup from "../utils/extractGroup";
import extractData from "../utils/extractData";
import CloseIcon from "../components/icons/CloseIcon";

const countries = [
  { value: "1", label: "USA" },
  { value: "2", label: "Australia" },
  { value: "3", label: "Cambodia" },
  { value: "4", label: "India" },
];

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

    return (
      <>
        <div className={styles.graphtab}>
          <div className={styles.tabs}>
            {this.props.tabs.pin.length > 0 && (
              <div className={styles["selected-chips"]}>
                <ul>
                  {this.props.tabs.pin.map((item, index) => {
                    return (
                      <li key={index}>
                        {item}
                        <span
                          onClick={() => this.props.dispatch(removePin(item))}
                        >
                          <CloseIcon height={16} width={16} fill="#555" />
                        </span>
                      </li>
                    );
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

                  {/* <TreeItem>
                    <Cascade
                      checked={this.state.tabOne}
                      onClick={() =>
                        this.whenOpen("tabOne", !this.state.tabOne)
                      }
                    >{`MG1`}</Cascade>
                    <TreeWraper
                      style={{
                        maxHeight: this.state.tabOne ? "200px" : "0px",
                        overflow: "hidden",
                        transition: "all 200ms ease",
                      }}
                    >
                      {catOne.category.map((item) => {
                        const active = this.props.tabs.tab === item.label;

                        return (
                          <TreeItem
                            onClick={() =>
                              this.props.dispatch(
                                updateTab({
                                  key: "tab",
                                  value: item.label,
                                })
                              )
                            }
                          >
                            <Cascade
                              active={active}
                              pinned={this.props.tabs.pin.includes(item.label)}
                              pinProps={{
                                show: active,
                                onClick: (event) => {
                                  this.whenPin(event, item.label);
                                },
                              }}
                            >
                              {item.label}
                            </Cascade>
                          </TreeItem>
                        );
                      })}
                    </TreeWraper>
                  </TreeItem> */}
                  {/* <TreeItem>
                    <Cascade
                      checked={this.state.tabTwo}
                      onClick={() =>
                        this.whenOpen("tabTwo", !this.state.tabTwo)
                      }
                    >{`MG2`}</Cascade>
                    <TreeWraper
                      style={{
                        maxHeight: this.state.tabTwo ? "200px" : "0px",
                        overflow: "hidden",
                        transition: "all 200ms ease",
                      }}
                    >
                      {catTwo.category.map((item) => {
                        const active = this.props.tabs.tab === item.label;
                        return (
                          <TreeItem
                            onClick={() =>
                              this.props.dispatch(
                                updateTab({
                                  key: "tab",
                                  value: item.label,
                                })
                              )
                            }
                          >
                            <Cascade
                              active={active}
                              pinned={this.props.tabs.pin.includes(item.label)}
                              pinProps={{
                                show: this.props.tabs.tab === item.label,
                                onClick: (event) => {
                                  this.whenPin(event, item.label);
                                },
                              }}
                            >
                              {item.label}
                            </Cascade>
                          </TreeItem>
                        );
                      })}
                    </TreeWraper>
                  </TreeItem> */}
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
                    {countries.map((item, index) => {
                      return (
                        <option key={index} value={item.label}>
                          {item.label}
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
              {this.props.tabs?.content?.label && (
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    padding: "1rem",
                    background: "#f1f1f1",
                    marginTop: "10px",
                    borderRadius: "8px",
                  }}
                >
                  {/* <li>{this.props.tabs?.content?.value}</li> */}

                  {this.props.tabs?.content?.label && (
                    <li>value : {this.props.tabs?.content?.label}</li>
                  )}
                  {this.props.tabs?.content?.url && (
                    <li>
                      url :
                      <a href={this.props.tabs?.content?.url}>
                        {this.props.tabs?.content?.url}
                      </a>
                    </li>
                  )}
                </ul>
              )}
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

class TreeItemComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      tabOne: false,
    };
    this.whenOpen = (key, value) => {
      this.setState({
        [key]: value,
      });
    };
    this.whenPin = (event, label) => {
      event.stopPropagation();
      this.props.dispatch(addPin(label));
    };
  }

  render() {
    return (
      <>
        <TreeItem>
          <Cascade
            checked={this.state.tabOne}
            onClick={() => this.whenOpen("tabOne", !this.state.tabOne)}
          >
            {this.props.label}
          </Cascade>
          <TreeWraper
            style={{
              maxHeight: this.state.tabOne ? "1200px" : "0px",
              overflow: "hidden",
              transition: "all 200ms ease",
            }}
          >
            {this.props.options.map((item) => {
              const active = this.props.tabs.tab === item.label;
              return (
                <TreeItem
                  onClick={() => {
                    this.props.dispatch(
                      updateTab({
                        key: "tab",
                        value: item.label,
                      })
                    );
                    this.props.dispatch(addContent(item));
                  }}
                >
                  <Cascade
                    active={active}
                    pinned={this.props.tabs.pin.includes(item.label)}
                    pinProps={{
                      show: active,
                      onClick: (event) => {
                        this.whenPin(event, item.label);
                      },
                    }}
                  >
                    {item.label}
                  </Cascade>
                </TreeItem>
              );
            })}
          </TreeWraper>
        </TreeItem>
      </>
    );
  }
}
