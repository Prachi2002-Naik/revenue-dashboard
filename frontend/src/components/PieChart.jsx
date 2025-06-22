import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ data }) {
  const totalRevenue = data.reduce((sum, item) => sum + item.totalRevenue, 0); // Added

  const chartData = {
    labels: data.map((item) => item._id),
    datasets: [
      {
        data: data.map((item) => item.totalRevenue),
        backgroundColor: ['#60a5fa', '#34d399', '#fbbf24', '#f87171', '#c084fc'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.parsed;
            const percentage = ((value / totalRevenue) * 100).toFixed(1);
            return `${label}: ₹${value.toLocaleString()} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="pie-chart-wrapper">
      <Pie data={chartData} options={{ responsive: true, maintainAspectRatio: false }} height={300} width={300} />
    </div>
  );
}

export default PieChart;
