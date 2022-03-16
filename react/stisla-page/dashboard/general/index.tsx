import Image from "next/image";
import StatisticCard4 from "./statistic-card-4";
import StatisticChart1 from "./statistic-chart-1";
import StatisticStats1 from "./statistic-stats-1";

export default function GeneralDashboard() {
  return (
    <div className="main-content">
      <section className="section">
        <div className="section-header">
          <h1>Dashboard</h1>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <StatisticCard4 
              header="Total Admin"
              text="10"
              icon="far fa-user"
              iconBg="bg-primary"/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <StatisticCard4 
              header="News"
              text="42"
              icon="far fa-user"
              iconBg="bg-danger"/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <StatisticCard4 
              header="Reports"
              text="1,201"
              icon="far fa-file"
              iconBg="bg-warning"/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <StatisticCard4 
              header="Online Users"
              text="47"
              icon="fas fa-circle"
              iconBg="bg-success"/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-12 col-12 col-sm-12">
            <StatisticChart1 />
          </div>
          <div className="col-lg-4 col-md-12 col-12 col-sm-12">
            <StatisticStats1 />
          </div>
        </div>
      </section>
    </div>
  );
}