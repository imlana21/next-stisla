import AdminLayout from "@layouts/admin-layout";
import StatisticCanvas2 from "@stisla/dashboard/card/statistic-canvas-2";
import StatisticCard from "@stisla/dashboard/card/statistic-card";
import StatisticStats1 from "@stisla/dashboard/card/statistic-stats-1";
import Head from "next/head";

export default function DashboardDefault() {
  return (
    <AdminLayout>
      <Head>
        <title> Dashboard Default </title>
      </Head>
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Dashboard</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <StatisticCard
                header="Total Admin"
                text="10"
                icon="far fa-user"
                iconBg="bg-primary" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <StatisticCard
                header="News"
                text="42"
                icon="far fa-user"
                iconBg="bg-danger" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <StatisticCard
                header="Reports"
                text="1,201"
                icon="far fa-file"
                iconBg="bg-warning" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <StatisticCard
                header="Online Users"
                text="47"
                icon="fas fa-circle"
                iconBg="bg-success" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-12 col-12 col-sm-12">
              <StatisticCanvas2 />
            </div>
            <div className="col-lg-4 col-md-12 col-12 col-sm-12">
              <StatisticStats1 />
            </div>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
}