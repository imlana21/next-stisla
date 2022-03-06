export default function StatisticCard2() {
  return (
    <div className="card card-statistic-2">
      <div className="card-chart">
        <canvas id="balance-chart" height="80"></canvas>
      </div>
      <div className="card-icon shadow-primary bg-primary">
        <i className="fas fa-dollar-sign"></i>
      </div>
      <div className="card-wrap">
        <div className="card-header">
          <h4>Balance</h4>
        </div>
        <div className="card-body">$187,13</div>
      </div>
    </div>
  )
}