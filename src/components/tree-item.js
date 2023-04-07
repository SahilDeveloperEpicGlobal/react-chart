import React from "react";
import { Cascade, TreeItem, TreeWraper } from "./cascade-tree";
import { addContent, addPin, updateTab } from "../store/slices/tabs";
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

export default TreeItemComponent;
