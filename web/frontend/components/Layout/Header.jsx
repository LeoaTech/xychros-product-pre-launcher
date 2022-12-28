import { useState, Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import { xychrosLogo } from "../../assets";
import HeaderProfile from "../ui/HeaderProfile";
import { IconContext } from "react-icons";
import { MdOutlinePriceChange } from "react-icons/md";
import { CgNotes } from "react-icons/cg";

import "../../assets/index.css";
import "./Header.css";
import StateContext from "../../context/StateContext";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const { activeMenu, setActiveMenu } = useContext(StateContext);

  const handleToggle = () => setActiveMenu((prev) => !prev);
  console.log(activeMenu);
  return (
    <header>
      <div className="header-left-menu">
        <RxHamburgerMenu
          className="hamburger__menu-icon"
          onClick={handleToggle}
        />
        <img
          src={xychrosLogo}
          alt="Nice work on building a Shopify app"
          className="header-left"
        />
      </div>

      <img src={xychrosLogo} className="header-center" />
      <div className="header-right">
        <IconContext.Provider
          value={{
            // color: '#011936',
            size: "35px",
          }}
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span className="icon-image">
              <MdOutlinePriceChange />
            </span>
            <span className="icon-text">Pricing</span>
          </NavLink>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            // color: '#011936',
            size: "30px",
          }}
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span className="icon-image">
              <CgNotes />
            </span>
            <span className="icon-text">FAQs</span>
          </NavLink>
          <HeaderProfile />
        </IconContext.Provider>
      </div>
    </header>
  );
}
