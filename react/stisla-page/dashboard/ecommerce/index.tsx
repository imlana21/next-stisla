import TicketCard from "./ticket-card";
import InvoicesCard from "./invoices-card";
import TopProductCard from "./top-product-card";
import TopCountries from "./top-countries";
import StatisticMonth from "./statistic-month";
import StatisticCanvas from "./statistic-canvas";
import BasicCard from "./basic-card";
import { Line } from 'react-chartjs-2';
import $ from "jquery";
import { 
  Chart as ChartJS,
  CategoryScale, 
  Filler, 
  Legend, 
  LinearScale, 
  LineElement, 
  PointElement, 
  Tooltip 
} from "chart.js";
import Image from "next/image";
import { useEffect } from "react";

export default function EcommercePage() {
  ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Legend,
    Filler,
    Tooltip,
  );

  useEffect( () => {
  });

  return (
    <div className="main-content">
      <section className="section">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <StatisticMonth />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <StatisticCanvas 
              cardId="balance-chart"
              iconBg="bg-primary"
              icon="fas fa-dollar-sign"
              title="Balance"
              text="$187,13" />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <StatisticCanvas 
                cardId="sales-chart"
                iconBg="bg-primary"
                icon="fas fa-shopping-bag"
                title="Sales"
                text="4,732" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <BasicCard title="Budget vs Sales">
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
                }} />
            </BasicCard>
          </div>
          <div className="col-lg-4">
            <TopProductCard />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <BasicCard title="Best Products">
              <div className="owl-carousel owl-theme" id="products-carousel">
                <div>
                  <div className="product-item pb-3">
                    <div className="product-image">
                      <Image src="/img/products/product-4-50.png"
                        alt="image"
                        className="img-fluid"
                        width="55"
                        height="55"
                      />
                    </div>
                    <div className="product-details">
                      <div className="product-name">iBook Pro 2018</div>
                      <div className="product-review">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="text-muted text-small">67 Sales</div>
                      <div className="product-cta">
                        <a href="#" className="btn btn-primary">
                          Detail
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="product-item">
                    <div className="product-image">
                      <Image
                        alt="image"
                        src="/img/products/product-3-50.png"
                        className="img-fluid"
                        width="55"
                        height="55"
                      />
                    </div>
                    <div className="product-details">
                      <div className="product-name">oPhone S9 Limited</div>
                      <div className="product-review">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half"></i>
                      </div>
                      <div className="text-muted text-small">86 Sales</div>
                      <div className="product-cta">
                        <a href="#" className="btn btn-primary">
                          Detail
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="product-item">
                    <div className="product-image">
                      <Image
                        alt="image"
                        src="/img/products/product-1-50.png"
                        className="img-fluid"
                        width="55"
                        height="55"
                      />
                    </div>
                    <div className="product-details">
                      <div className="product-name">Headphone Blitz</div>
                      <div className="product-review">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <div className="text-muted text-small">63 Sales</div>
                      <div className="product-cta">
                        <a href="#" className="btn btn-primary">
                          Detail
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BasicCard>
          </div>
          <div className="col-md-6">
            <TopCountries />
          </div>
        </div>
        <div className="row">
            <div className="col-md-8">
              <InvoicesCard />
            </div>
            <div className="col-md-4">
              <TicketCard />
            </div>
          </div>
      </section>
    </div>
  );
}