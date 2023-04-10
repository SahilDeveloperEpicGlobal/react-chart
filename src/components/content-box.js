import React from "react";
import styles from "../styles/home.module.scss";
import CloseIcon from "../components/icons/CloseIcon";
import { removePin } from "../store/slices/pins";

class ContentBox extends React.Component {
  render() {
    return (
      <ul className={styles["content-box"]}>
        {this.props.pins?.once?.name && (
          <li>
            Global Commodity Price Index For {this.props.pins?.once?.name}{" "}
            {`[${this.props.pins?.once?.country}]`}{" "}
            {this.props.pins?.once?.url && (
              <a
                href={this.props.pins?.once?.url}
                style={{
                  fontWeight: "500",
                }}
              >
                ,Link to data (external)
              </a>
            )}
          </li>
        )}
        {this.props.pinned?.length > 0 &&
          this.props.pinned.map((item, index) => {
            return (
              <li
                key={index}
                style={{
                  color: `#${item.color}`,
                }}
              >
                <span
                  className={styles["close-icon"]}
                  onClick={() => this.props.dispatch(removePin(item))}
                >
                  <CloseIcon height={16} width={16} fill="#555" />
                </span>
                Global Commodity Price Index For {item.name} [
                {this.props.tabs.countryPin[index]?.name}
                ],{" "}
                <a
                  href={item?.url}
                  style={{
                    fontWeight: "500",
                  }}
                >
                  Link to data (external)
                </a>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default ContentBox;
