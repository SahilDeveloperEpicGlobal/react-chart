import React from "react";
import css from "../styles/dropdown.module.scss";

const Dropdown = (props) => {
  // props.name
  const [items, setItem] = React.useState(props.items);

  React.useEffect(() => {
    setItem(items);
  }, [items]);
  const [isOpen, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
  };

  return (
    <div className={css["dropdown"]}>
      <div className={css["dropdown-header"]} onClick={toggleDropdown}>
        {selectedItem
          ? items?.find((item) => item.id === selectedItem).label
          : "Select your destination"}
      </div>
      <div className={`${css["dropdown-body"]} ${isOpen && css["open"]}`}>
        {items.map((item) => (
          <div
            className={css["dropdown-item"]}
            onClick={(e) => handleItemClick(item.id)}
          >
            <span
              className={`${css["dropdown-item-dot"]} ${
                item.id === selectedItem && css["selected"]
              }`}
            >
              •{" "}
            </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;

// Dropdown.propTypes = {
//   name: PropTypes.string,
//   items: PropTypes.array({
//     id: PropTypes.number,
//     label: PropTypes.string,
//   }),
// };
