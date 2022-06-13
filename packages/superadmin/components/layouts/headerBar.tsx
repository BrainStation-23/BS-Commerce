import type { NextComponentType } from "next";
import { useState } from "react";
import nav from "./styles/navbar.module.css";
const HeaderBar: NextComponentType = (props: any) => {
  const [toggleSidebar, setTogglesidebar] = useState(false);
  const changeTogglebarStatus = () => {
    setTogglesidebar(!toggleSidebar);
    props.handleTogglebarStatus();
  };
  return (
    <>
      <div className={toggleSidebar ? nav.container : nav.container_inactive}>
        <div
          onClick={() => changeTogglebarStatus()}
          className={nav.toggle_menu_btn}
        >
          <i className="bi bi-list"></i>
        </div>
        <div className={nav.nav_content}>
          <div className={nav.nav_usernname}>John Smith</div>
          <div className={nav.nav_settings}>
            <i className="bi bi-gear"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBar;
