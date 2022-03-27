import { useState } from "react";

export default function StatisticMonth({ data }: any) {
  const month = [
    "January", 
    "February", 
    "Maret", 
    "April", 
    "Mei",
    "Juni",
    "Juli",
    "Agustus", 
    "September",
    "Oktober",
    "November",
    "Desember"
  ];
  const [monthActive, setMonthActive] = useState("January");

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
              id="orders-month">
                { monthActive }
            </a>
            <ul className="dropdown-menu dropdown-menu-sm">
            <li className="dropdown-title" key={`month-0`}>Select Month</li>
              {
                month.map( (m, i) => {
                  return (
                    <li key={`month-${i+1}`}>
                      <a onClick={ e => { 
                          e.preventDefault(); 
                          setMonthActive(m);
                        } } href="#" 
                        className={ `dropdown-item ${ m == monthActive ? 'active' : ''}` }>
                        { m }
                      </a>
                    </li>
                  )
                })
              }
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