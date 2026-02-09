import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: "rgb(75, 192, 192)",
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: { display: false },
    y: { display: false },
  },
};

function MyLineChart() {
  return (
    <div className="w-full h-[50px]">
      <Line data={data} options={options} />
    </div>
  );
}

export default MyLineChart;
