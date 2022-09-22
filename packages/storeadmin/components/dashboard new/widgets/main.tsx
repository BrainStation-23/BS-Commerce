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
      <div className="pe-4 ms-3 mb-4">
        <div className="row gy-5 mt-1">
          {widgets.map((widget) => {
            return (
              <div key={widget.id} className="col-4 gx-4">
                <div className="card" style={{ border: "none" }}>
                  <div
                    className="position-relative card-body"
                    style={{
                      backgroundColor: `${widget.bgColor}`,
                      borderRadius: "5px",
                    }}
                  >
                    <div className="text-white">
                      <h3>{widget.statVal}</h3>
                      <p>{widget.name}</p>
                    </div>
                    <div className="position-absolute translate-middle end-0 fs-1 top-50 z-0 text-black opacity-25">
                      {widget.icon}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StatWidgets;
