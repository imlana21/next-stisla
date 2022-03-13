import { Line } from 'react-chartjs-2';
import { 
  CategoryScale, Chart as ChartJS, 
  LinearScale, 
  LineElement, 
  PointElement, 
  Legend,
  Filler,
  Tooltip,
} from 'chart.js';

export default function BudgetSalesChart() {
  ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Legend,
    Filler,
    Tooltip,
  );

  return (
    <div className="card">
      <div className="card-header">
        <h4>Budget vs Sales</h4>
      </div>
      <div className="card-body">
        <Line
          data={{
            labels: [
              "January",
              "February",
              "March",
              "April",
              "June",
              "May",
              "July",
              "August",
            ],
            datasets: [{
              label: "Sales",
              data: [3200, 1800, 4305, 3022, 6310, 5120, 5880, 6154],
              fill: true,
              backgroundColor: 'rgba(63, 82, 227, 0.8)',
              borderColor: 'transparent',
              pointBorderWidth: 0,
              pointRadius: 3.5,
              pointBackgroundColor: "transparent",
              pointHoverBackgroundColor: "rgba(63,82,227,.8)",
            },
            {
              label: "Budget",
              data: [2207, 3403, 2200, 5025, 2302, 4208, 3880, 4880],
              fill: true,
              backgroundColor: "rgba(254,86,83,.7)",
              borderColor: "transparent",
              pointBorderWidth: 0,
              pointRadius: 3.5,
              pointBackgroundColor: "transparent",
            }],
          }}
          options={{
            plugins: {
              legend: {
                display: true,
                position: "bottom",
                labels: {
                  font: {
                    size: 14
                  },
                  color: "#323130"
                }
              },
              tooltip: {
                displayColors: true,
                boxWidth: 10,
                boxHeight: 10,
                boxPadding: 5
              }
            },
            scales: {
              y: {
                grid: {
                  color: "#f2f2f2",
                  drawBorder: false,
                },
                ticks: {
                  stepSize: 1500,
                  callback: (value, index, values) => {
                    return `$${value}`;
                  },
                },
                suggestedMin: 100,
                suggestedMax: 100
              },
              x: {
                grid: {
                  display: false,
                  tickLength: 15
                },
              }
            }
          }}
        />
      </div>
    </div>
  );
}