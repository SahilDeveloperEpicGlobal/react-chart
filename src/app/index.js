import React from "react";
import { connect } from "react-redux";
import Graph from "../components/graph";
import country from "../constant/country";
import styles from "../styles/home.module.scss";
import { addPin, updateTab, addContent } from "../store/slices/tabs";
import CascadeTree, {
  Cascade,
  TreeItem,
  TreeWraper,
} from "../components/cascade-tree";

import response3 from "../constant/response3.json";

class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      tabOne: false,
      tabTwo: true,
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
    const measureGroupMG = () => {
      var compactJson = response3;
      compactJson = response3;
      var measure_group_list = compactJson.Data[0][0][0].split(",");
      var measures_LS = compactJson.Data[0][1][0].split(",");
      var measures_groups_API = compactJson.Data[0][2][0].split(",");
      var measures_URL = compactJson.Data[0][3][0].split(",");

      let measure_group = {};
      let URL_map = {};
      let measures_map = {};
      let MG = [];

      for (let i = 0; i < measures_LS.length; i++) {
        measures_map[measures_groups_API[i]] = measures_LS[i];
      }

      for (let i = 0; i < measures_groups_API.length; i++) {
        URL_map[measures_groups_API[i]] = measures_URL[i];
      }

      for (let i = 0; i < measure_group_list.length; i++) {
        if (!measure_group[measure_group_list[i]]) {
          measure_group[measure_group_list[i]] = [];
        }
        measure_group[measure_group_list[i]].push(measures_groups_API[i]);
      }

      Object.keys(measure_group).forEach((key) => {
        let options = [];
        for (let i = 0; i < measure_group[key].length; i++) {
          console.log(URL_map[measure_group[key]]);
          options.push({
            value: i,
            label: measure_group[key][i],
            url: URL_map[measure_group[key]],
          });
        }
        MG.push({
          label: key,
          options: options,
        });
      });
      return MG;
    };

    const array = measureGroupMG();

    return (
      <>
        <div className={styles.graphtab}>
          <div className={styles.tabs}>
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
