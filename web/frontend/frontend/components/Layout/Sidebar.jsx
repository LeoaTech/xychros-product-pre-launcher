import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { IoHome, IoSettingsSharp } from "react-icons/io5";
import { FaBullhorn } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdAddCircle } from "react-icons/md/";
import "./Sidebar.css";
import "../../assets/index.css";
import CustomerSupport from "../../assets/CustomerSupport.png";
import Omnichannel from "../../assets/Omnichannel.png";
import Webhook from "../../assets/Webhook.png";
import StateContext from "../../context/StateContext";

export default function Sidebar() {
  const { activeMenu, setActiveMenu } = useContext(StateContext);

  const handleToggle = () => setActiveMenu((prev) => !prev);
  return (
    <div className={activeMenu ? "sidebar-nav inactive" : "sidebar-nav"}>
      <div className="menu__icon">
        <RxHamburgerMenu className="hamburger__icon" onClick={handleToggle} />
      </div>
      <NavLink
        to="/newcampaigns"
        className={({ isActive }) =>
          isActive ? "active sidebar-nav-link" : "sidebar-nav-link"
        }
      >
      
        <div
          className={
            activeMenu ? "sidebar-button" : "sidebar-button button-primary"
          }
        >
          <span className="add-icon">
            <MdAddCircle />
          </span>
          {activeMenu && <span className="addicon-text"> New Campaign</span>}
        </div>
      </NavLink>
      <IconContext.Provider
        value={{
          size: "25px",
        }}
      >
        <div
          className={({ activeMenu }) =>
            activeMenu ? "sidebar-nav" : "sidebar-nav nav-icon"
          }
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active sidebar-nav-link" : "sidebar-nav-link"
            }
          >
            <span className="icon-image">
              <IoHome onTouchMove={() => handleClick("Home")} />
            </span>
            {activeMenu && <span className="icon-text">Home</span>}
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/campaigns"
            className={({ isActive }) =>
              isActive ? "active sidebar-nav-link" : "sidebar-nav-link"
            }
          >
            <span className="icon-image">
              <FaBullhorn />
            </span>
            {activeMenu && <span className="icon-text">Campaigns</span>}
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/referrals"
            className={({ isActive }) =>
              isActive ? "active sidebar-nav-link" : "sidebar-nav-link"
            }
          >
            <img src={Omnichannel} alt="Referrals" className="icon-image" />

            {activeMenu && <span className="icon-text">Referrals</span>}
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "active sidebar-nav-link" : "sidebar-nav-link"
            }
          >
            <span className="icon-image">
              <IoSettingsSharp />
            </span>
            {activeMenu && <span className="icon-text">Settings</span>}
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/integrations"
            className={({ isActive }) =>
              isActive ? "active sidebar-nav-link" : "sidebar-nav-link"
            }
          >
            <img src={Webhook} alt="Integrations" className="icon-image" />

            {activeMenu && <span className="icon-text">Integrations</span>}
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/support"
            className={({ isActive }) =>
              isActive ? "active sidebar-nav-link" : "sidebar-nav-link"
            }
          >
            <img
              src={CustomerSupport}
              alt="Customer Support"
              className="icon-image"
            />

            {activeMenu && <span className="icon-text">Support</span>}
          </NavLink>
        </div>
      </IconContext.Provider>
    </div>
  );
}
