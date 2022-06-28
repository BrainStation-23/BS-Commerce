import layout from "./styles/layout.module.css";

const SidebarLink = (props: any) => {
  const { menu, expandedMenuId, handleShowSubMenu, showSidebar } = props;
  return (
    <div
      className={`d-flex flex-row justify-content-between ${layout.sidebarLink}`}
      style={{
        padding: "8px 16px",
        backgroundColor:
          expandedMenuId === menu.id ? "rgba(255,255,255,.1)" : "",
        overflowX: "hidden",
        whiteSpace: "nowrap",
        cursor: "pointer",
      }}
      onClick={() =>
        menu.subMenus.length > 0 ? handleShowSubMenu(menu.id) : ""
      }
    >
      <span>
        <span className="me-2">{menu.icon}</span>
        <span hidden={!props.showSidebar}>{menu.name}</span>
      </span>
      {menu.subMenus.length > 0 ? (
        <i
          className={`bi bi-chevron-left`}
          hidden={!props.showSidebar}
          style={{
            transition: "all 0.3s ease-in",
            transform: expandedMenuId === menu.id ? "rotate(-90deg)" : "",
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default SidebarLink;
