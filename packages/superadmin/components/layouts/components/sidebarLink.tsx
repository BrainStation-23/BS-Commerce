import layout from "../styles/layout.module.css";
import { ISidebarData } from "./SidebarData";
import Link from "next/link";

interface Props {
  menu: ISidebarData;
  expandedMenuId: number;
  handleShowSubMenu: (id: number) => void;
  selectedMenuId: number;
  handleSelectedId: (id: number) => void;
  showSidebar: boolean;
}

const SidebarLink = ({
  menu,
  expandedMenuId,
  handleShowSubMenu,
  showSidebar,
  selectedMenuId,
  handleSelectedId,
}: Props) => {
  // const { menu, expandedMenuId, handleShowSubMenu, showSidebar, selectedMenuId, handleSelectedId } = props;
  return (
    <>
      <div
        className={`d-flex flex-row justify-content-between ${layout.sidebarLink}`}
        style={{
          padding: "8px 16px",
          backgroundColor: expandedMenuId === menu.id ? "#494E53" : "",
          overflowX: "hidden",
          whiteSpace: "nowrap",
          cursor: "pointer",
          color: expandedMenuId === menu.id ? "#fff" : "",
          borderLeft: selectedMenuId === menu.id ? "3px solid #007BFF" : "",
        }}
        onClick={() => handleShowSubMenu(menu.id)}
      >
        <span>
          <span className="me-2">{menu.icon}</span>
          <span hidden={!showSidebar}>{menu.name}</span>
        </span>
        {menu.subMenus.length > 0 ? (
          <i
            className={`bi bi-chevron-left`}
            hidden={!showSidebar}
            style={{
              transition: "all 0.3s linear",
              transform: expandedMenuId === menu.id ? "rotate(-90deg)" : "",
            }}
          />
        ) : (
          ""
        )}
      </div>

      {/* Submenu part ↓ */}
      <div hidden={!showSidebar}>
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
              transition: "max-height .3s linear",
            }}
          >
            {menu.subMenus.map((subMenu) => (
              <Link key={subMenu.name} href={subMenu.to} passHref>
                <div
                  onClick={() => handleSelectedId(menu.id)}
                  className={layout.link}
                  style={{ padding: "5px 15px", cursor: "pointer" }}
                >
                  <span className="me-2">{subMenu.icon}</span>
                  {subMenu.name}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default SidebarLink;
