export default function StatisticCard1() {
  return (
    <div className="card card-statistic-2">
      <div className="card-stats">
        <div className="card-stats-title">
          Order Statistics -
          <div className="dropdown d-inline">
            <a onClick={e => e.preventDefault()}
              className="font-weight-600 dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              id="orders-month"
            >August</a
            >
            <ul className="dropdown-menu dropdown-menu-sm">
              <li className="dropdown-title">Select Month</li>
              <li><a onClick={e => e.preventDefault()} href="#" className="dropdown-item">January</a></li>
              <li><a onClick={e => e.preventDefault()} href="#" className="dropdown-item">February</a></li>
              <li><a onClick={e => e.preventDefault()} href="#" className="dropdown-item">March</a></li>
              <li><a onClick={e => e.preventDefault()} href="#" className="dropdown-item">April</a></li>
              <li><a onClick={e => e.preventDefault()} href="#" className="dropdown-item">May</a></li>
              <li><a onClick={e => e.preventDefault()} href="#" className="dropdown-item">June</a></li>
              <li><a onClick={e => e.preventDefault()} href="#" className="dropdown-item">July</a></li>
              <li><a onClick={e => e.preventDefault()} href="#" className="dropdown-item active">August</a></li>
              <li><a onClick={e => e.preventDefault()} href="#" className="dropdown-item">September</a></li>
              <li><a onClick={e => e.preventDefault()} href="#" className="dropdown-item">October</a></li>
              <li><a onClick={e => e.preventDefault()} href="#" className="dropdown-item">November</a></li>
              <li><a onClick={e => e.preventDefault()} href="#" className="dropdown-item">December</a></li>
            </ul>
          </div>
        </div>
        <div className="card-stats-items">
          <div className="card-stats-item">
            <div className="card-stats-item-count">24</div>
            <div className="card-stats-item-label">Pending</div>
          </div>
          <div className="card-stats-item">
            <div className="card-stats-item-count">12</div>
            <div className="card-stats-item-label">Shipping</div>
          </div>
          <div className="card-stats-item">
            <div className="card-stats-item-count">23</div>
            <div className="card-stats-item-label">Completed</div>
          </div>
        </div>
      </div>
      <div className="card-icon shadow-primary bg-primary">
        <i className="fas fa-archive"></i>
      </div>
      <div className="card-wrap">
        <div className="card-header">
          <h4>Total Orders</h4>
        </div>
        <div className="card-body">59</div>
      </div>
    </div>
  )
}