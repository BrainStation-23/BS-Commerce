import type { FC } from 'react';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
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
} from 'chart.js';
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
  const show = <i className="bi bi-plus"></i>;
  const hide = <i className="bi bi-dash-lg"></i>;
  const [accordion, setAccordion] = useState(true);
  const [data, setData] = useState({
    labels: [
      'Jan',
      'Feb',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        label: 'USer Chart Datasets',
        data: [10, 23, 16, 100, 54, 77, 35, 25, 54, 68, 15, 66],
        backgroundColor: 'green',
        borderColor: 'grey',
        // fill: true,
      },
    ],
  });
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
          <div
            style={{
              ['fontSize' as any]: '15px',
              ['color' as any]: 'black',
              paddingLeft: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                ['paddingRight' as any]: '10px',
                ['color' as any]: 'black',
                ['fontSize' as any]: '15x',
              }}
            >
              <i className="bi bi-people-fill"></i>
            </span>
            New Customer Data
          </div>
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
            <span style={{ ['paddingLeft' as any]: '25px' }}>
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
        {accordion && (
          <div
            style={{
              ['minHeight' as any]: '350px',
              ['backgroundColor' as any]: '#f5f5f5',
              ['border' as any]: '2px',
              ['borderRadius' as any]: '5px',
              transition: 'all 0.3s ease',
              // transition: "height 0.3s ease",
            }}
          >
            <div style={{ ['padding' as any]: '10px' }}>
              <Line data={data}></Line>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserTypeChart;
