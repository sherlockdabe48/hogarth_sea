import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/Header.scss";
import collapse_icon from "../resources/icons/collapse_icon.svg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const onClickCollapseIcon = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <div className="header">
      <div className="header_logo">Study</div>
      <div className="header_menuWrapper">
        <ul className="no_style_list">
          <li>
            <NavLink
              to={"/overview"}
              className={({ isActive }) =>
                isActive ? "link active_link" : "link"
              }
            >
              ภาพรวม
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/teachers"}
              className={({ isActive }) =>
                isActive ? "link active_link" : "link"
              }
            >
              คุณครู
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/students"}
              className={({ isActive }) =>
                isActive ? "link active_link" : "link"
              }
            >
              นักเรียน
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="mobile_nav_menu_wrapper">
        <img
          className={`collapse_icon ${mobileMenuOpen ? "active" : ""}`}
          onClick={onClickCollapseIcon}
          src={collapse_icon}
          alt=""
        />
        {mobileMenuOpen && (
          <div className="mobile_nav_menu">
            <ul className="mobile_nav_menu_list">
              <li>
                <NavLink
                  to={"/overview"}
                  className={({ isActive }) =>
                    isActive ? "link active_link" : "link"
                  }
                >
                  ภาพรวม
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/teachers"}
                  className={({ isActive }) =>
                    isActive ? "link active_link" : "link"
                  }
                >
                  คุณครู
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/students"}
                  className={({ isActive }) =>
                    isActive ? "link active_link" : "link"
                  }
                >
                  นักเรียน
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
