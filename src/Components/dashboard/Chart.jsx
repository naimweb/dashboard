import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Tooltip,Legend} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar","Apri"],
  datasets: [
    {
      label: "Sales",
      data: [400, 300, 250,300],
      backgroundColor: "skyblue",
      
    },
  ],
};

export default function Chart() {
  return <Bar data={data}  />
}
