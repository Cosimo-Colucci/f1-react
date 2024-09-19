import PropTypes from "prop-types";
import { MenuButton, MenuItem, Menu, Dropdown } from "@mui/base";
import { useState } from "react";
import classNames from "classnames";
const CustomDropdown = ({ options, id, menuLabel }) => {
  const [open, setOpen] = useState(false);
  console.log(options);
  return (
    <Dropdown>
      <MenuButton
        id={id}
        className="text-[#d6d6d6] font-bold mr-4"
        onClick={() => setOpen(!open)}
      >
        {menuLabel}
      </MenuButton>
      <Menu className="bg-[#023e8a] border border-solid border-[#d6d6d6] shadow-2xl rounded-md">
        {options.map((option) => (
          <MenuItem
            className={classNames("cursor-pointer font-semibold p-2", {
              "text-[#d6d6d6] hover:bg-[#d6d6d6] hover:text-[#023e8a]":
                !option.isActive,
              "text-[#023e8a] bg-[#d6d6d6]": option.isActive,
            })}
            key={option.label}
            onClick={option.onClick}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </Dropdown>
  );
};

CustomDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  menuLabel: PropTypes.string.isRequired,
};

export default CustomDropdown;
