import type { FC } from "react";
import { useState, useEffect } from "react";
import {
  Chart as chartjs,
  Tooltip,
  Title,
  ArcElement,
  Legend,
  PieController,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
chartjs.register(Tooltip, Title, ArcElement, Legend, PieController);
const SellesPieChart: FC = () => {
  const [data, setData] = useState({
    labels: [
      "Electronics",
      "Groceries",
      "Men's Fashion",
      "Toiletries",
      "Womens-Jewleries",
    ],
    datasets: [
      {
        data: [10, 30, 43, 55, 23],
        backgroundColor: [
          " #00FF00",
          "#FF0000",
          "#0000FF",
          "#FFFF00",
          "#FF8000",
        ],
      },
    ],
    text: "20%",
  });
  const options = {
    plugins: {
      legend: {
        position: "right",
        align: "start",
        reverse: true,
      },
    },
  };
  const plugins = [
    {
      beforeDraw: function (chart: any) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 200).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        var text = "20%",
          textX = Math.round((width - ctx.measureText(text).width) / 3.5),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];
  useEffect(() => {});
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
              <i className="bi bi-lightning-fill"></i>
            </span>
            Sales Data
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "65%", padding: "17px" }}>
            <Doughnut data={data} plugins={plugins} options={options} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SellesPieChart;
