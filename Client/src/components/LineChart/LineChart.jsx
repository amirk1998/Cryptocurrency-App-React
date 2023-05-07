import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ coinHistory, currentPrice, coinName, timePeriod }) => {
  const coinPrice = [];
  const coinTimeStamp = [];

  if (coinHistory) {
    for (let i = 0; i < coinHistory.data.history.length; i++) {
      // console.log('hello', i);
      coinPrice.push(coinHistory.data.history[i].price);
      coinTimeStamp.push(
        new Date(
          coinHistory.data.history[i].timestamp * 1000
        ).toLocaleDateString()
      );
    }
  }

  // console.log(coinTimeStamp);
  // console.log(coinPrice);

  coinPrice.reverse();
  coinTimeStamp.reverse();

  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      // y: {
      //   beginAtZero: true,
      // },
    },
    title: {
      display: true,
      text: 'Sample Line Chart',
    },
    legend: {
      display: true,
      position: 'bottom',
    },
  };

  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between'>
        <p className='font-semibold text-slate-800 text-xl lg:text-3xl col-span-2 my-4'>
          {coinName} Price Chart ({timePeriod})
        </p>
        <div className='flex gap-x-8 text-base lg:text-lg font-semibold'>
          <p>Change: {coinHistory && coinHistory.data.change} %</p>
          <p>
            Current {coinName} Price : ${currentPrice}
          </p>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
