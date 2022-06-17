import { FC } from "react";
import card from "./styles/widgets.module.css";
const StatWidgets: FC = () => {
  const widgets = [
    {
      id: Math.floor(Math.random() * 100),
      name: "Orders",
      type: "stat",
      statVal: 15,
      icon: <i className={`bi bi-bag`}></i>,
      bgColor: "#17a2b8",
      link: "/",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Pending User Requests",
      type: "stat",
      statVal: 15,
      icon: <i className="bi bi-arrow-clockwise"></i>,
      bgColor: "#ffc107",
      link: "/",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "New Registered users",
      type: "stat",
      statVal: 15,
      icon: <i className="bi bi-person-plus-fill"></i>,
      bgColor: "#28a745",
      link: "/",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Low Stock Products",
      type: "stat",
      statVal: 15,
      icon: <i className="bi bi-pie-chart-fill"></i>,
      bgColor: "#dc3545",
      link: "/",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Pending user requests",
      type: "stat",
      statVal: 15,
      icon: <i className="bi bi-clock-history"></i>,
      bgColor: " #8F00FF",
      link: "/",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Orders",
      type: "stat",
      statVal: 15,
      icon: <i className={`bi bi-bag`}></i>,
      bgColor: "#654321",
      link: "/",
    },
  ];
  return (
    <>
      <div className={`row ${card.widget_container}`}>
        {widgets.map((widget) => {
          return (
            <div
              key={widget.id}
              className={`col-3 col-md-6 col-lg-4 col-xl-4  ${card.widgets_card}`}
            >
              <div
                className={`${card.small_box} ${card.bg_info}`}
                style={{ ["backgroundColor" as any]: widget.bgColor }}
              >
                <div className={card.inner}>
                  <h3>{widget.statVal}</h3>
                  <p>{widget.name}</p>
                </div>
                <div className={card.icon}>{widget.icon}</div>
                <a className={card.small_box_footer} href={widget.link}>
                  More info
                  <i className="bi bi-arrow-right-circle"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StatWidgets;
