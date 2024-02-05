import React, { useContext } from "react";
import { RiBook2Line } from "react-icons/ri";
import { HiOutlineMoon } from "react-icons/hi";
import { MdCircle } from "react-icons/md";
import { ThemeContext } from "./ContextTheme";

const Navigation = () => {
  const { darkTheme, handleStateChange } = useContext(ThemeContext);

  return (
    <div>
      <div className="iconContainer">
        <RiBook2Line color="#757575" className="bookIcon" />
      </div>
      <div className="rightNav flex">
        <div>
          <select
            className={`select border border-spacing-0 ${
              darkTheme ? "dark" : ""
            }`}
          >
            <option>Sans Serif</option>
            <option>Arial</option>
            <option>Times New Roman</option>
          </select>
        </div>
        <span className={`vLine vr ${darkTheme ? "dark" : ""}`}></span>

        <div
          onClick={handleStateChange}
          className="toggleContainer flex gap-2 justify-end items-center"
        >
          <span
            className={`toggleButton flex items-center ${
              darkTheme ? "dark" : ""
            }`}
          >
            <MdCircle size="0.88rem" color="#ffffff" />
          </span>
          <div>
            <HiOutlineMoon
              size="18"
              className={`mb-1 moon ${darkTheme ? "dark" : ""}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
