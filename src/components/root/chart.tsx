import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  elements: {
    bar: {
      borderRadius: 10,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },

  plugins: {
    legend: {
      display: false,
    },
    title: {
      padding: 40,
      display: true,
      text: "Daily Visitors",
    },
    customElements: {
      customGradient: {
        color: "red",
        index: 0,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: "rgb(222, 222, 222)",
    },
    {
      label: "Dataset 2",
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: "rgb(16, 16, 16)",
    },
  ],
};

export default function BarChart() {
  return <Bar options={options} data={data} />;
}
