import type { NextComponentType } from "next";
import Image from "next/image";
import { useState } from "react";
import bsLogo from "../../assests/bs23.png";
import sidebar from "./styles/sidebar.module.css";
const Sidebar: NextComponentType = () => {
  const menuItems = [
    { name: "Dashboard", to: "/", icon: <i className="bi bi-tv"></i> },
    {
      name: "Catalog",
      to: "/",
      icon: <i className="bi bi-card-list"></i>,
      subMenus: [
        {
          name: "Categories",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
        {
          name: "Manufacturers",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
      ],
    },
    { name: "Sales", to: "/", icon: <i className="bi bi-cart"></i> },
  ];
  const [inactive, setInactive] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <>
      <div
        className={
          inactive
            ? sidebar.side_menu
            : `${sidebar.side_menu} $ ${sidebar.side_menu_inactive}`
        }
      >
        <div className={sidebar.top_section}>
          <div className={sidebar.logo}>
            <Image src={bsLogo} alt="bs-logo" />
          </div>
          <div
            onClick={() => setInactive(!inactive)}
            className={sidebar.toggle_menu_btn}
          >
            <i className="bi bi-list"></i>
          </div>
        </div>
        <div className={sidebar.search_controller}>
          <button className={sidebar.search_btn}>
            <i className="bi bi-search"></i>
          </button>
          <input type="text" placeholder="search" />
        </div>
        <div className={sidebar.main_menu}>
          <ul>
            {/* Menus */}
            {menuItems.map((menuItem, index) => (
              <li key={index}>
                <a
                  onClick={() => setShowSubMenu(!showSubMenu)}
                  className={sidebar.menu_item}
                >
                  <div className={sidebar.menu_icon}>{menuItem.icon}</div>
                  <span>{menuItem.name}</span>
                  {menuItem.subMenus && menuItem.subMenus.length > 0 ? (
                    <ul
                      className={
                        showSubMenu ? sidebar.sub_menu_active : sidebar.sub_menu
                      }
                    >
                      {menuItem.subMenus.map((subMenu, index) => (
                        <li key={index}>
                          <a>
                            <div className={sidebar.submenu_icon}>
                              {subMenu.icon}
                            </div>
                            {/* <span>{subMenu.name}</span> */}
                            {subMenu.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
