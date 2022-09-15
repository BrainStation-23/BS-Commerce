import { useRouter } from "next/router";
import type { FC } from "react";
import { useAppDispatch } from "../../../redux-hooks";
import { removeToken } from "../../../toolkit/AuthSlice";

import layout from "../styles/layout.module.css";

interface Props {
  toggleSidebar: (sideBarStatus: boolean) => void;
  showSidebar: boolean;
  displayName: string;
}

const Headerbar: FC<Props> = ({
  toggleSidebar,
  showSidebar,
  displayName,
}: Props) => {
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
        transition: "all 0.3s linear",
      }}
    >
      <i
        className={`bi bi-list ${layout.link}`}
        onClick={() => toggleSidebar(!showSidebar)}
        style={{
          padding: "8px 16px",
        }}
      />
      <div style={{ color: "#656159" }}>
        <span style={{ padding: "8px 16px" }}>{displayName}</span>
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

export default Headerbar;
