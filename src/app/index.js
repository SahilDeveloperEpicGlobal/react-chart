import React from "react";
import { connect } from "react-redux";
import Graph from "../components/graph";
import styles from "../styles/home.module.scss";
import CascadeTree from "../components/cascade-tree";
import { Cascade, TreeItem, TreeWraper } from "../components/cascade-tree";
import response3 from "../constant/response3.json";
import DataPayloadResponse from "../constant/DataPayloadResponse.json";
import Country_Data from "../constant/2country_Data[1].json";
import extractGroup from "../utils/extractGroup";
import extractData from "../utils/extractData";
import extractCountry from "../utils/extractCountry";
import TreeItemComponent from "../components/tree-item";
import ContentBox from "../components/content-box";
import Select from "react-select";
import PinIcon from "../components/icons/PinIcon";
import PinSelectedIcon from "../components/icons/PinSelectedIcon";
import { updateState } from "../store/slices/pins";

class App extends React.Component {
  constructor() {
    super(...arguments);
    this.updateState = (key, value) => {
      this.setState({
        [key]: value,
      });
    };
  }

  render() {
    // EXTRACT MEASURE GROUP
    const array = extractGroup(response3);
    // EXTRACT MEASURE DATA
    const lineData = extractData(DataPayloadResponse);

    const data = extractCountry(Country_Data);

    const countryData = data.Country.map((item, index) => {
      return {
        id: index,
        value: item.DisplayName.toLowerCase(),
        label: item.DisplayName,
      };
    });

    console.log(this.props.pins);
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
                        pins={this.props.pins}
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
                  <div className={styles["select"]}>
                    <Select
                      defaultValue={countryData[0]}
                      options={countryData}
                      onChange={(value) =>
                        this.props.dispatch(
                          updateState({
                            key: "once",
                            value: {
                              ...this.props.pins.once,
                              country: value?.label,
                            },
                          })
                        )
                      }
                    />
                    <span
                      onClick={() => {
                        if (this.props.pins.once?.name) {
                          updateState({
                            key: "pinned",
                            value: this.props.pins.once,
                          });
                        }
                      }}
                    >
                      {false ? (
                        <PinSelectedIcon height={16} width={16} fill="#555" />
                      ) : (
                        <PinIcon height={16} width={16} fill="#555" />
                      )}
                    </span>
                  </div>
                </li>
              </ul>
              <Graph lineData={lineData} pins={this.props.pins} />
            </div>
            <div>
              <ContentBox
                pins={this.props.pins}
                dispatch={this.props.dispatch}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  pins: state.pins,
});
export default connect(mapStateToProps)(App);
