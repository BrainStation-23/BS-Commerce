import type { FC } from 'react';
import { useState, useEffect } from 'react';
import {
  Chart as chartjs,
  Tooltip,
  Title,
  ArcElement,
  Legend,
  PieController,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
chartjs.register(Tooltip, Title, ArcElement, Legend, PieController);
const SellesPieChart: FC = () => {
  const show = <i className="bi bi-plus"></i>;
  const hide = <i className="bi bi-dash-lg"></i>;
  const [accordion, setAccordion] = useState(false);
  const [data, setData] = useState({
    labels: [
      'Electronics',
      'Groceries',
      "Men's Fashion",
      'Toiletries',
      'Womens-Jewleries',
    ],
    datasets: [
      {
        data: [10, 30, 43, 55, 23],
        backgroundColor: [
          ' #00FF00',
          '#FF0000',
          '#0000FF',
          '#FFFF00',
          '#FF8000',
        ],
      },
    ],
    text: '20%',
  });
  const options = {
    plugins: {
      legend: {
        position: 'right',
        align: 'start',
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
        ctx.font = fontSize + 'em sans-serif';
        ctx.textBaseline = 'middle';
        var text = '20%',
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
          ['width' as any]: '100%',
        }}
      >
        <div
          style={{
            ['borderTop' as any]: '3px solid blue',
            ['borderBottom' as any]: '1px solid #808080',
            ['borderLeft' as any]: '1px solid',
            ['borderRight' as any]: '1px solid',
            ['borderRadius' as any]: '3px',
            ['color' as any]: 'white',
            ['backgroundColor' as any]: '#f8f9fa',
            ['display' as any]: 'flex',
            ['justifyContent' as any]: 'space-between',
          }}
        >
          <h3
            style={{
              ['fontSize' as any]: '15px',
              ['color' as any]: 'black',
              paddingLeft: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                ['paddingRight' as any]: '5px',
                ['color' as any]: 'black',
                ['fontSize' as any]: '15px',
              }}
            >
              <i className="bi bi-lightning-fill"></i>
            </span>
            Sales Data
          </h3>
          <div style={{ ['padding' as any]: '15px' }}>
            <span style={{ ['padding' as any]: '5px' }}>
              <button
                style={{
                  ['backgroundColor' as any]: '#00c0ef',
                  ['color' as any]: 'white',
                  ['borderColor' as any]: '#00acd6',
                  ['padding' as any]: '0px 7px',
                  ['fontSize' as any]: '12px',
                  ['border' as any]: 'none',
                }}
              >
                Day
              </button>
            </span>
            <span style={{ ['padding' as any]: '15px' }}>
              <button
                style={{
                  ['backgroundColor' as any]: '#00c0ef',
                  ['color' as any]: 'white',
                  ['borderColor' as any]: '#00acd6',
                  ['padding' as any]: '0px 7px',
                  ['fontSize' as any]: '12px',
                  ['border' as any]: 'none',
                }}
              >
                Month
              </button>
            </span>
            <span>
              <button
                style={{
                  ['backgroundColor' as any]: '#00c0ef',
                  ['borderColor' as any]: '#00acd6',
                  ['color' as any]: 'white',
                  ['padding' as any]: '0px 7px',
                  ['fontSize' as any]: '12px',
                  ['border' as any]: 'none',
                }}
              >
                Year
              </button>
            </span>
            <span style={{ ['padding-left' as any]: '25px' }}>
              <button
                style={{
                  ['backgroundColor' as any]: '#f5f5f5',
                  ['color' as any]: 'black',
                  ['padding' as any]: '0px 7px',
                  ['border' as any]: 'none',
                }}
                onClick={(e) => setAccordion(!accordion)}
              >
                {accordion ? hide : show}
              </button>
            </span>
          </div>
        </div>
        <div>
          {accordion && (
            <div
              style={{
                ['minHeight' as any]: '250px',
                ['backgroundColor' as any]: '#f5f5f5',
                ['border' as any]: '2px',
                ['borderRadius' as any]: '5px',
                transition: 'all 0.3s ease',
                // transition: "height 0.3s ease",
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <div style={{ width: '65%', padding: '17px' }}>
                  {/* <Doughnut data={data} plugins={plugins} options={options} /> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SellesPieChart;
