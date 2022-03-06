export default function StatisticCard3() {
  return (
    <div className="card card-statistic-2">
      <div className="card-chart">
        <canvas id="sales-chart" height="80"></canvas>
      </div>
      <div className="card-icon shadow-primary bg-primary">
        <i className="fas fa-shopping-bag"></i>
      </div>
      <div className="card-wrap">
        <div className="card-header">
          <h4>Sales</h4>
        </div>
        <div className="card-body">4,732</div>
      </div>
    </div>
  )
}