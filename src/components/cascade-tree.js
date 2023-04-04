import React from "react";
import PlusMinus from "./plus-minus";
import PinIcon from "./icons/PinIcon";
import styles from "../styles/cascade.module.scss";

const CascadeTree = ({ children }) => {
  return (
    <TreeWraper class={`${styles["tree"]} ${styles["cascade"]}`}>
      {children}
    </TreeWraper>
  );
};
export default CascadeTree;

export const Cascade = ({ active, checked, pinProps, children, ...rest }) => {
  return (
    <div
      className={styles["item-center"]}
      style={{
        background: active ? "#80DEEA" : "",
      }}
      {...rest}
    >
      {<PlusMinus active={checked} />}
      {children}
      {pinProps ? (
        <span
          {...pinProps}
          className={`${
            pinProps?.show ? styles["item-pin"] : styles["item-pin-hover"]
          } ${styles["item-center"]}`}
        >
          <PinIcon height={18} width={18} fill="#555" />
        </span>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export const TreeWraper = (props) => {
  return <ul {...props} />;
};
export const TreeItem = (props) => {
  return <li {...props} />;
};
