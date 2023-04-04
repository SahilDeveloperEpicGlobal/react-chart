import React from "react";
import { connect } from "react-redux";
import Graph from "../components/graph";
import country from "../constant/country";
import styles from "../styles/home.module.scss";
import { updateTab } from "../store/slices/tabs";
import { catOne, catTwo } from "../constant/tabs-array";
import CascadeTree, {
  Cascade,
  TreeItem,
  TreeWraper,
} from "../components/cascade-tree";

class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      tabOne: true,
      tabTwo: true,
    };
    this.whenOpen = (key, value) => {
      this.setState({
        [key]: value,
      });
    };
    this.whenPin = (event) => {
      event.stopPropagation();
      console.log("Clicked On Pin");
    };
  }
  render() {
    return (
      <>
        <div className={styles.graphtab}>
          <div className={styles.tabs}>
            {/* <label className={styles.mainlabel}>Col1</label>
            <div className={styles["tab-container"]}>
              <label
                className={styles.label}
                onClick={() => this.whenOpen("tabOne", !this.state.tabOne)}
              >
                {this.state.tabOne ? (
                  <RemoveBox height={18} width={18} fill="#555" />
                ) : (
                  <AddBox height={18} width={18} fill="#555" />
                )}
                {catOne.name}
              </label>
              <ul style={dropdownStyle.dOne}>
                {catOne.category.map((item, index) => {
                  const active = this.props.tabs.tabOne === item.label;
                  return (
                    <li
                      style={{
                        background: active ? "#8093f1" : "",
                      }}
                      key={index}
                      onClick={() =>
                        this.props.dispatch(
                          updateTab({
                            key: "tabOne",
                            value: item.label,
                          })
                        )
                      }
                    >
                      <span className={styles["name"]}>{item.label}</span>
                      {active ? (
                        <PinIcon height={16} width={16} fill="#fff" />
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles["tab-container"]}>
              <label
                className={styles.label}
                onClick={() => this.whenOpen("tabTwo", !this.state.tabTwo)}
              >
                {this.state.tabTwo ? (
                  <RemoveBox height={18} width={18} fill="#555" />
                ) : (
                  <AddBox height={18} width={18} fill="#555" />
                )}
                {catTwo.name}
              </label>
              <ul style={dropdownStyle.dTwo}>
                {catTwo.category.map((item, index) => {
                  const active = this.props.tabs.tabTwo === item.label;

                  return (
                    <li
                      style={{
                        background: active ? "rgb(255, 99, 132)" : "",
                      }}
                      key={index}
                      onClick={() =>
                        this.props.dispatch(
                          updateTab({
                            key: "tabTwo",
                            value: item.label,
                          })
                        )
                      }
                    >
                      <span className={styles["name"]}>{item.label}</span>
                      {this.props.tabs.tabTwo === item.label ? (
                        <PinIcon height={16} width={16} fill="#fff" />
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </div> */}

            <CascadeTree>
              <TreeItem>
                <Cascade>Col</Cascade>
                <TreeWraper>
                  <TreeItem>
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
                        const active = this.props.tabs.tabOne === item.label;

                        return (
                          <TreeItem
                            onClick={() =>
                              this.props.dispatch(
                                updateTab({
                                  key: "tabOne",
                                  value: item.label,
                                })
                              )
                            }
                          >
                            <Cascade
                              active={active}
                              pinProps={{
                                show: active,
                                onClick: (event) => {
                                  this.whenPin(event);
                                  updateTab({
                                    key: "tabOne",
                                    value: item.label,
                                  });
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
                  <TreeItem>
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
                        const active = this.props.tabs.tabTwo === item.label;

                        return (
                          <TreeItem
                            onClick={() =>
                              this.props.dispatch(
                                updateTab({
                                  key: "tabTwo",
                                  value: item.label,
                                })
                              )
                            }
                          >
                            <Cascade
                              active={active}
                              pinProps={{
                                show: this.props.tabs.tabTwo === item.label,
                                onClick: (event) => {
                                  this.whenPin(event);
                                  updateTab({
                                    key: "tabTwo",
                                    value: item.label,
                                  });
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
                </TreeWraper>
              </TreeItem>
            </CascadeTree>
          </div>
          <div className={styles.raectselectbox}>
            <div className={styles.reactgraph}>
              <ul>
                <li>
                  <select defaultValue={country[10].name}>
                    {country.map((item, index) => {
                      return (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </li>
                <li>
                  <select defaultValue={country[20].name}>
                    {country.map((item, index) => {
                      return (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </li>
              </ul>
              <Graph />
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
