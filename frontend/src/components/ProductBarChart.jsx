import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function ProductBarChart({ data }) {
  const labels = data.map(item => item._id);
  const values = data.map(item => item.totalRevenue);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Revenue (₹)',
        data: values,
        backgroundColor: '#60a5fa',
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1000,
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default ProductBarChart;
