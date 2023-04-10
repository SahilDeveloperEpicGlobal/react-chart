import React from "react";
import { Cascade, TreeItem, TreeWraper } from "./cascade-tree";
import { updateState } from "../store/slices/pins";

class TreeItemComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      open: false,
    };
    this.whenOpen = (key, value) => {
      this.setState({
        [key]: value,
      });
    };
  }

  render() {
    return (
      <>
        <TreeItem>
          <Cascade
            checked={this.state.open}
            onClick={() => this.whenOpen("open", !this.state.open)}
          >
            {this.props.label}
          </Cascade>
          <TreeWraper
            style={{
              maxHeight: this.state.open ? "1200px" : "0px",
              overflow: "hidden",
              transition: "all 200ms ease",
            }}
          >
            {this.props.options.map((item) => {
              const active = this.props.pins?.once?.name === item.label;
              return (
                <TreeItem
                  onClick={() => {
                    if (this.props.pins.once?.country) {
                      this.props.dispatch(
                        updateState({
                          key: "once",
                          value: {
                            ...this.props.pins.once,
                            name: item?.label,
                            url: item?.url,
                          },
                        })
                      );
                    } else {
                      alert("Please select country first");
                    }
                  }}
                >
                  <Cascade plusMinus={false} active={active}>
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

export default TreeItemComponent;
