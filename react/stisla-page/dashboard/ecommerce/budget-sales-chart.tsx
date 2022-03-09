import { useRef } from 'react';
import { Chart, Line } from 'react-chartjs-2';
import { CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement} from 'chart.js';

export default function BudgetSalesChart() {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

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
              tension: 0.1,
              borderWidth: 2,
              backgroundColor: 'rgba(63, 82, 227, 0.8)',
              borderColor: 'rgba(63,82,227,.8)',
              borderCapStyle: 'round',
              borderDash: [],
              borderDashOffset: 0.0,
              pointRadius: 3.5,
              pointBackgroundColor: "transparent",
              pointHoverBackgroundColor: "rgba(63,82,227,.8)",
              pointBorderWidth: 0,
              pointHoverBorderWidth: 2.5,
              pointHoverRadius: 1,
              pointHitRadius: 10,
            },
            {
              label: "Budget",
              data: [2207, 3403, 2200, 5025, 2302, 4208, 3880, 4880],
              fill: false,
              backgroundColor: "rgba(254,86,83,.7)",
              borderColor: "#742774",
              pointBorderWidth: 0,
              pointRadius: 3.5,
              pointBackgroundColor: "transparent",
              pointHoverBackgroundColor: "rgba(254,86,83,.8)",
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
            },
            scales: {
              y: {
                grid: {
                  color: "#f2f2f2",
                  drawBorder: false
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