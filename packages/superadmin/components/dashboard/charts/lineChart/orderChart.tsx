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
const OrderTypeChart: FC = () => {
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
        label: "Order Chart Datasets",
        data: [10, 23, 36, 48, 54, 66, 75, 45, 54, 88, 105, 66],
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
          ["height" as any]: "500px",
          ["backgroundColor" as any]: "#f5f5f5",
          ["border" as any]: "2px solid",
        }}
      >
        <div
          style={{
            ["borderBottom" as any]: "3px solid blue",
            ["color" as any]: "white",
            ["backgroundColor" as any]: "black",
            ["display" as any]: "flex",
            ["justifyContent" as any]: "space-between",
          }}
        >
          <h3
            style={{ ["fontSize" as any]: "20px", ["padding" as any]: "10px" }}
          >
            <span
              style={{
                ["paddingRight" as any]: "5px",
                ["color" as any]: "white",
                ["fontSize" as any]: "25px",
              }}
            >
              <i className="bi bi-cart"></i>
            </span>
            Latest Order Data
          </h3>
          <div style={{ ["padding" as any]: "15px" }}>
            <span style={{ ["padding" as any]: "5px" }}>
              <button
                style={{
                  ["backgroundColor" as any]: "	#87CEFA",
                  ["padding" as any]: "0px 7px",
                }}
              >
                Day
              </button>
            </span>
            <span style={{ ["padding" as any]: "15px" }}>
              <button
                style={{
                  ["backgroundColor" as any]: "	#87CEFA",
                  ["padding" as any]: "0px 7px",
                }}
              >
                Month
              </button>
            </span>
            <span>
              <button
                style={{
                  ["backgroundColor" as any]: "	#87CEFA",
                  ["padding" as any]: "0px 7px",
                }}
              >
                Year
              </button>
            </span>
          </div>
        </div>
        <div style={{ ["padding" as any]: "35px" }}>
          <Line data={data}></Line>
        </div>
      </div>
    </>
  );
};

export default OrderTypeChart;
