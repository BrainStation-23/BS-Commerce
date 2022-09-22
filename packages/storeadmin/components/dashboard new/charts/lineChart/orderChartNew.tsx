import type { FC } from 'react';
import { useState } from 'react';
import { Line, Bar, Scatter, Bubble } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarController,
  BarElement,
} from 'chart.js';
ChartJS.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
const OrderTypeChartNew: FC = () => {
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
        label: 'Order Placed',
        data: [10, 23, 36, 48, 54, 66, 75, 45, 54, 88, 105, 66],
        backgroundColor: 'rgba(32, 214, 155, 1)',
        borderColor: 'grey',
        borderRadious: 30,
        barThickness: 5,
        barPercentage: 0.5,
        maxBarThickness: 8,
        minBarLength: 2,
        //fill: true,
      },
    ],
  });

  return (
    <>
      <div
        className="border-info border-top border-3"
        style={{ backgroundColor: 'rgb(245, 245, 245)' }}
      >
        <div className="d-flex gx-2 justify-content-between px-4 pt-3">
          <div className="d-flex">
            <i className="bi bi-cart me-2"></i>
            <p>Sales Report</p>
          </div>
          <div onClick={(e) => setAccordion(!accordion)}>
            {accordion ? hide : show}
          </div>
        </div>
        {accordion && <hr className="mt-0" />}
        {accordion && (
          <div className="mb-5 px-5 pt-2">
            <Bar data={data} height={200} />
          </div>
        )}
      </div>
    </>
  );
};

export default OrderTypeChartNew;
