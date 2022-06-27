import { useRouter } from "next/router";
import type { FC } from "react";
import { useState } from "react";
import { useAppDispatch } from "../../redux-hooks";
import { removeToken } from "../../toolkit/AuthSlice";

import nav from "./styles/navbar.module.css";

const HeaderBar: FC = (props: any) => {
  const [toggleSidebar, setTogglesidebar] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const changeTogglebarStatus = () => {
    setTogglesidebar(!toggleSidebar);
    props.handleTogglebarStatus();
  };

  const handleLogout = () => {
    localStorage.removeItem("persist:root");
    dispatch(removeToken);
    router.push("/account/login");
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
          <div className={nav.nav_username}>{props.displayName}</div>
          <div
            className={nav.nav_username}
            style={{ cursor: "pointer" }}
            onClick={() => handleLogout()}
          >
            Logout
          </div>
          <div className={nav.nav_settings}>
            <i className="bi bi-gear"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBar;
