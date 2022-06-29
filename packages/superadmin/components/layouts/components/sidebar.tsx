import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import SidebarLink from "./sidebarLink";

import bsOnlyLogo from "../../../assests/bs-icon.svg";
import bsFullLogo from "../../../assests/BS-Logo-Blue_Hr.svg";
import { SidebarData } from "./SidebarData";

import layout from "../styles/layout.module.css";

interface Props {
  toggleSidebar: (sideBarStatus: boolean) => void;
  showSidebar: boolean;
}

const Sidebar = ({ toggleSidebar, showSidebar }: Props) => {
  const [expandedMenuId, setExpandedMenuId] = useState<number>(-1);
  const [selectedMenuId, setSelectedMenuId] = useState<number>(0);

  const handleShowSubMenu = (id: number) => {
    if (id === expandedMenuId) setExpandedMenuId(-1);
    else setExpandedMenuId(id);
  };

  const handleSelectedId = (id: number) => {
    setSelectedMenuId(id);
  };

  return (
    <div
      style={{
        height: "100%",
        minHeight: "100vh",
        width: showSidebar ? "250px" : "74px",
        backgroundColor: "#343a40",
        position: "fixed",
        transition: "width 0.3s linear",
        boxShadow: "0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)",
      }}
      onClick={() => toggleSidebar(true)}
      // onMouseEnter={() => toggleSidebar(true)}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "56px", borderBottom: "1px solid #4b545c" }}
      >
        {showSidebar ? (
          <Image src={bsFullLogo} alt="Brain Station 23 Logo" />
        ) : (
          <Image src={bsOnlyLogo} alt="Brain Station 23 Logo" />
        )}
      </div>

      {SidebarData.map((menu) => (
        <div
          key={menu.id}
          className={`d-flex flex-column justify-content-start ${layout.link}`}
          // style={{ color: "#C2C7D0" }}
        >
          {menu.to !== "" ? (
            <Link href={menu.to} passHref>
              <div onClick={() => setSelectedMenuId(menu.id)}>
                <SidebarLink
                  menu={menu}
                  expandedMenuId={expandedMenuId}
                  handleShowSubMenu={handleShowSubMenu}
                  selectedMenuId={selectedMenuId}
                  handleSelectedId={handleSelectedId}
                  showSidebar={showSidebar}
                />
              </div>
            </Link>
          ) : (
            <SidebarLink
              menu={menu}
              expandedMenuId={expandedMenuId}
              handleShowSubMenu={handleShowSubMenu}
              selectedMenuId={selectedMenuId}
              handleSelectedId={handleSelectedId}
              showSidebar={showSidebar}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
