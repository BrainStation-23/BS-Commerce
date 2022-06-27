import type { NextComponentType } from "next";
import Image from "next/image";
import { useState } from "react";
import Link from "next/Link";
import HeaderBar from "./headerBar";
import bsLogo from "../../assests/bs23.png";
import sidebar from "./styles/sidebar.module.css";
const Sidebar: NextComponentType = (props: any) => {
  const menuItems = [
    { name: "Dashboard", to: "/", icon: <i className="bi bi-tv"></i> },
    {
      name: "Catalog",
      // to: "/",
      icon: <i className="bi bi-card-list"></i>,
      subMenus: [
        {
          name: "Products",
          to: "/Product",
          icon: <i className="bi bi-bullseye"></i>,
        },
        {
          name: "Categories",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
        {
          name: "Categories",
          to: "",
          icon: <i className="bi bi-bullseye"></i>,
        },
      ],
    },
    {
      name: "Sales",
      // to: "/",
      icon: <i className="bi bi-cart"></i>,
      subMenus: [
        {
          name: "Orders",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
        {
          name: "Shipments",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
        {
          name: "Return requests",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
        {
          name: "Recurring payments",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
        {
          name: "Gift cards",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
      ],
    },
    {
      name: "Customers",
      to: "/",
      icon: <i className="bi bi-person" />,
      subMenus: [
        {
          name: "Customers",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
        {
          name: "Customers role",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
        {
          name: "Online customers",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
        {
          name: "Admins",
          to: "/users/admin",
          icon: <i className="bi bi-bullseye"></i>,
        },
      ],
    },
    {
      name: "Promotions",
      to: "/",
      icon: <i className="bi bi-tags" />,
      subMenus: [
        {
          name: "Discounts",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
        {
          name: "Affiliates",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
        {
          name: "Newsletter subscribers",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
        {
          name: "Campaigns",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
      ],
    },
    {
      name: "System",
      to: "/",
      icon: <i className="bi bi-box" />,
      subMenus: [
        {
          name: "System information",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
        {
          name: "Log",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
        {
          name: "Warnings",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
        {
          name: "Maintenance",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
      ],
    },
    {
      name: "Reports",
      to: "/",
      icon: <i className="bi bi-graph-up-arrow" />,
      subMenus: [
        {
          name: "Sales summary",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
        {
          name: "Low stock",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
        {
          name: "Bestsellers",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
        {
          name: "Products never purchased",
          to: "/",
          icon: <i className="bi bi-bullseye"></i>,
        },
      ],
    },
  ];
  const chevronUp = <i className="bi bi-chevron-up"></i>;
  const chevronDown = <i className="bi bi-chevron-down"></i>;
  const [inactive, setInactive] = useState(false);
  // const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState([false, false, false]);

  const manageToggleSubmenu = (index: number) => {
    let toggleState = [...showSubMenu];
    toggleState[index] = !toggleState[index];
    // setShowSubMenu(!showSubMenu);
    setShowSubMenu(toggleState);
  };
  const handleTogglebarStatus = () => {
    setInactive(!inactive);
    props.adjustContainer();
  };
  return (
    <>
      <HeaderBar handleTogglebarStatus={handleTogglebarStatus} />
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
          <div className={sidebar.title}>BS Commerce</div>
          {/* <div
            onClick={() => setInactive(!inactive)}
            className={sidebar.toggle_menu_btn}
          >
            <i className="bi bi-list"></i>
          </div>  */}
        </div>
        <div className={sidebar.search_controller}>
          <button className={sidebar.search_btn}>
            <i className="bi bi-search"></i>
          </button>
          <input type="text" placeholder="search" />
        </div>
        <div className={sidebar.main_menu}>
          <div>
            {/* Menus */}
            {menuItems.map((menuItem, index) => (
              <div key={index}>
                <a
                  onClick={(e) => manageToggleSubmenu(index)}
                  className={sidebar.menu_item}
                >
                  <div className={sidebar.menu_icon}>{menuItem.icon}</div>
                  <div className={sidebar.menu_item_text}>
                    <Link href={`${menuItem.to}`} passHref>
                      <span>{menuItem.name}</span>
                    </Link>
                    <span className={sidebar.menu_chevron}>
                      {menuItem.subMenus && menuItem.subMenus.length > 0
                        ? showSubMenu[index]
                          ? chevronUp
                          : chevronDown
                        : ""}
                    </span>
                  </div>
                </a>
                {menuItem.subMenus && menuItem.subMenus.length > 0 ? (
                  <>
                    <div
                      className={
                        showSubMenu[index]
                          ? sidebar.sub_menu_active
                          : sidebar.sub_menu
                      }
                    >
                      {menuItem.subMenus.map((subMenu, index) => (
                        <div key={index}>
                          <Link href={`${subMenu.to}`}>
                            <a className="text-white">
                              <div className={sidebar.submenu_icon}>
                                {subMenu.icon}
                              </div>
                              <span>{subMenu.name}</span>
                              {/* {subMenu.name} */}
                            </a>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
