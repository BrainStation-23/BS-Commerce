import type { FC } from "react";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as chartjs,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
chartjs.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);
const UserTypeChart: FC = () => {
  const [data, setData] = useState({
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "USer Chart Datasets",
        data: [10, 23, 16, 100, 54, 77, 35, 25, 54, 68, 15, 66],
        backgroundColor: "green",
        borderColor: "grey",
        // fill: true,
      },
    ],
  });
  return (
    <>
      <div
        style={{
          ["width" as any]: "100%",
          ["height" as any]: "430px",
          ["backgroundColor" as any]: "#f5f5f5",
          ["border" as any]: "2px solid",
        }}
      >
        <div
          style={{
            ["borderTop" as any]: "3px solid blue",
            ["borderBottom" as any]: "3px solid #808080",
            ["color" as any]: "white",
            ["backgroundColor" as any]: "#f8f9fa",
            ["display" as any]: "flex",
            ["justifyContent" as any]: "space-between",
          }}
        >
          <h3
            style={{
              ["fontSize" as any]: "20px",
              ["padding" as any]: "6px",
              ["color" as any]: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                ["paddingRight" as any]: "5px",
                ["color" as any]: "black",
                ["fontSize" as any]: "18px",
              }}
            >
              <i className="bi bi-person-plus-fill"></i>
            </span>
            New Users Added
          </h3>
          <div style={{ ["padding" as any]: "15px" }}>
            <span style={{ ["padding" as any]: "5px" }}>
              <button
                style={{
                  ["backgroundColor" as any]: "#00c0ef",
                  ["borderColor" as any]: "#00acd6",
                  ["padding" as any]: "0px 7px",
                }}
              >
                Day
              </button>
            </span>
            <span style={{ ["padding" as any]: "15px" }}>
              <button
                style={{
                  ["backgroundColor" as any]: "#00c0ef",
                  ["borderColor" as any]: "#00acd6",
                  ["padding" as any]: "0px 7px",
                }}
              >
                Month
              </button>
            </span>
            <span>
              <button
                style={{
                  ["backgroundColor" as any]: "#00c0ef",
                  ["borderColor" as any]: "#00acd6",
                  ["padding" as any]: "0px 7px",
                }}
              >
                Year
              </button>
            </span>
          </div>
        </div>
        <div style={{ ["padding" as any]: "10px" }}>
          <Line data={data}></Line>
        </div>
      </div>
    </>
  );
};

export default UserTypeChart;
