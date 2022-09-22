import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

const StockPieNew: FC = () => {
  const show = <i className="bi bi-plus"></i>;
  const hide = <i className="bi bi-dash-lg"></i>;
  const [accordion, setAccordion] = useState(false);

  Chart.register(ArcElement);
  const labels = [
    'Electronics',
    'Groceries',
    "Men's Fashion",
    'Toiletries',
    'Womens-Jewleries',
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        data: [10, 30, 43, 55, 23],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
        hoverBorderWidth: 3,
        hoverBorderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
      },
    ],
  };

  return (
    <>
      <div
        className="border-info border-top border-3"
        style={{ backgroundColor: 'rgb(245, 245, 245)' }}
      >
        <div className="d-flex gx-2 justify-content-between px-4 pt-3">
          <div className="d-flex">
            <i className="bi bi-cart me-2"></i>
            <p>Sales Data</p>
          </div>
          <div onClick={(e) => setAccordion(!accordion)}>
            {accordion ? hide : show}
          </div>
        </div>
        {accordion && <hr className="mt-0" />}
        {accordion && (
          <div className="mb-5 px-5 pt-2 pb-5">
            <Doughnut
              data={data}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default StockPieNew;
