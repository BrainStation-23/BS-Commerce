import { useRouter } from "next/router";
import type { FC } from "react";
import { useAppDispatch } from "../../redux-hooks";
import { removeToken } from "../../toolkit/AuthSlice";

import layout from "./styles/layout.module.css";

const HeaderBar: FC = (props: any) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("persist:root");
    dispatch(removeToken);
    router.push("/account/login");
  };

  return (
    <div
      className="d-flex flex-row justify-content-between align-items-center p-8"
      style={{
        padding: "8px",
        backgroundColor: "#343a40",
        transition: "all 0.3s ease-in",
      }}
    >
      <i
        className={`bi bi-list ${layout.link}`}
        onClick={() => props.toggleSidebar(!props.showSidebar)}
        style={{
          padding: "8px 16px",
        }}
      />
      <div style={{ color: "rgba(255,255,255,.75)" }}>
        <span style={{ padding: "8px 16px" }}>{props.displayName}</span>
        <span
          className={layout.link}
          style={{ padding: "8px 16px" }}
          onClick={() => handleLogout()}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default HeaderBar;
