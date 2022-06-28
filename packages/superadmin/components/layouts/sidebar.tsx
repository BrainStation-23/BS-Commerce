import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import SidebarLink from "./sidebarLink";

import bsOnlyLogo from "../../assests/bs-icon.svg";
import bsFullLogo from "../../assests/BS-Logo-Blue_Hr.svg";

import layout from "./styles/layout.module.css";

const Sidebar: NextComponentType = (props: any) => {
  const [expandedMenuId, setExpandedMenuId] = useState<number>(-1);

  const subMenuIcon = <i className="bi bi-record-circle" />;

  const menuItems = [
    {
      name: "Dashboard",
      to: "/home",
      icon: <i className="bi bi-tv" />,
      id: 0,
      subMenus: [],
    },
    {
      name: "Catalog",
      to: "",
      icon: <i className="bi bi-card-list"></i>,
      id: 1,
      subMenus: [
        {
          name: "Products",
          to: "/Product",
          icon: subMenuIcon,
        },
        {
          name: "Manufacturers",
          to: "/Admin/Manufacturer/list",
          icon: subMenuIcon,
        },
        {
          name: "Categories",
          to: "/category",
          icon: subMenuIcon,
        },
      ],
    },
    {
      name: "Promotion",
      to: "",
      icon: <i className="bi bi-tags"></i>,
      id: 2,
      subMenus: [
        {
          name: "Discount",
          to: "/promotion/discount",
          icon: subMenuIcon,
        },
        {
          name: "Campaign",
          to: "/promotion/campaign",
          icon: subMenuIcon,
        },
      ],
    },
    {
      name: "Users",
      to: "",
      id: 3,
      icon: <i className="bi bi-people-fill"></i>,
      subMenus: [
        {
          name: "Admins",
          to: "/users/admin",
          icon: subMenuIcon,
        },
      ],
    },
    {
      name: "System",
      to: "",
      id: 4,
      icon: <i className="bi bi-box"></i>,
      subMenus: [
        {
          name: "Log",
          to: "/system/log",
          icon: subMenuIcon,
        },
        {
          name: "Scheduled Task",
          to: "/system/scheduled-task",
          icon: subMenuIcon,
        },
      ],
    },
    {
      name: "Reports",
      to: "",
      id: 5,
      icon: <i className="bi bi-graph-up-arrow"></i>,
      subMenus: [
        {
          name: "Sales Summary",
          to: "/report/sales-summary",
          icon: subMenuIcon,
        },
        {
          name: "Registered Customers",
          to: "/report/registered-customers",
          icon: subMenuIcon,
        },
        {
          name: "Customer by Order Numbers",
          to: "/report/customers-by-number-of-orders",
          icon: subMenuIcon,
        },
        {
          name: "Best Customers on Total Order",
          to: "/report/best-customers-by-order-total",
          icon: subMenuIcon,
        },
      ],
    },
  ];

  const handleShowSubMenu = (id: number) => {
    if (id === expandedMenuId) setExpandedMenuId(-1);
    else setExpandedMenuId(id);
  };

  return (
    <div
      style={{
        height: "100%",
        minHeight: "100vh",
        width: props.showSidebar ? "250px" : "74px",
        backgroundColor: "#343a40",
        position: "relative",
        transition: "width 0.3s ease-in",
        boxShadow: "0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)",
      }}
      onClick={() => props.toggleSidebar(true)}
      // onMouseEnter={() => props.toggleSidebar(true)}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "56px", borderBottom: "1px solid #4b545c" }}
      >
        {props.showSidebar ? (
          <Image src={bsFullLogo} alt="Brain Station 23 Logo" />
        ) : (
          <Image src={bsOnlyLogo} alt="Brain Station 23 Logo" />
        )}
      </div>

      {menuItems.map((menu) => (
        <div
          key={menu.id}
          className={`d-flex flex-column justify-content-start ${layout.link}`}
          // style={{ color: "#C2C7D0" }}
        >
          {menu.to !== "" ? (
            <Link href={menu.to} passHref>
              <div onClick={() => handleShowSubMenu(-1)}>
                <SidebarLink
                  menu={menu}
                  expandedMenuId={expandedMenuId}
                  handleShowSubMenu={handleShowSubMenu}
                  showSidebar={props.showSidebar}
                />
              </div>
            </Link>
          ) : (
            <SidebarLink
              menu={menu}
              expandedMenuId={expandedMenuId}
              handleShowSubMenu={handleShowSubMenu}
              showSidebar={props.showSidebar}
            />
          )}

          {/* Submenu part ↓ */}
          <div hidden={!props.showSidebar}>
            {menu.subMenus.length > 0 ? (
              <div
                className="d-flex flex-column justify-content-start"
                style={{
                  color: "#C2C7D0",
                  backgroundColor: "rgba(255,255,255,.05)",
                  overflow: "hidden",
                  maxHeight:
                    expandedMenuId === menu.id
                      ? menu.subMenus.length * 50 + "px"
                      : "0px",
                  height: "auto",
                  transition: "max-height .3s ease-in",
                }}
              >
                {menu.subMenus.map((subMenu) => (
                  <Link key={subMenu.name} href={subMenu.to} passHref>
                    <span style={{ padding: "5px 15px", cursor: "pointer" }}>
                      <span className="me-2">{subMenu.icon}</span>
                      {subMenu.name}
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
