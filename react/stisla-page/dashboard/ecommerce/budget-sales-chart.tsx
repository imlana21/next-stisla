export default function BudgetSalesChart() {
  return (
    <div className="card">
      <div className="card-header">
        <h4>Budget vs Sales</h4>
      </div>
      <div className="card-body">
        <canvas id="myChart" height="158"></canvas>
      </div>
    </div>
  );
}