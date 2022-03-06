import CustomerTicketCard from "./customer-ticket";
import InvoicesCard from "./invoices-card";
import TopProductCard from "./top-product-card";
import BudgetSalesChart from "./budget-sales-chart";
import BestProductCard from "./best-product-card";
import TopCountries from "./top-countries";
import StatisticCard1 from "./statistic-card-1";
import StatisticCard2 from "./statistic-card-2";
import StatisticCard3 from "./statistic-card-3";

export default function EcommercePage() {
  return (
    <div className="main-content">
      <section className="section">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <StatisticCard1 />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <StatisticCard2 />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <StatisticCard3 />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <BudgetSalesChart />
          </div>
          <div className="col-lg-4">
            <TopProductCard />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <BestProductCard />
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
              <CustomerTicketCard />
            </div>
          </div>
      </section>
    </div>
  );
}