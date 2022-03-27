export default function StatisticCanvas2({ header, data }: any) {
  return(
    <div className="card">
      <div className="card-header">
        <h4> { header } </h4>
        <div className="card-header-action">
          <div className="btn-group">
            <a onClick={ (e) => e.preventDefault() } href="" className="btn btn-primary">Week</a>
            <a onClick={ (e) => e.preventDefault() } href="" className="btn">Month</a>
          </div>
        </div>
      </div>
      <div className="card-body">
        <canvas id="myChart" height="182"></canvas>
        <div className="statistic-details mt-sm-4">
          <div className="statistic-details-item">
            <span className="text-muted"
            ><span className="text-primary"
            ><i className="fas fa-caret-up"></i
            ></span>
              7%</span
            >
            <div className="detail-value">$243</div>
            <div className="detail-name">Today&lsquo;s Sales</div>
          </div>
          <div className="statistic-details-item">
            <span className="text-muted">
              <span className="text-danger">
                <i className="fas fa-caret-down"></i>
              </span> 
              23% 
            </span>
            <div className="detail-value">$2,902</div>
            <div className="detail-name">This Week&lsquo;s Sales</div>
          </div>
          <div className="statistic-details-item">
            <span className="text-muted">
              <span className="text-primary">
                <i className="fas fa-caret-up"></i>
              </span> 
              9%
            </span>
            <div className="detail-value">$12,821</div>
            <div className="detail-name">This Month&lsquo;s Sales</div>
          </div>
          <div className="statistic-details-item">
            <span className="text-muted">
              <span className="text-primary">
                <i className="fas fa-caret-up"></i>
              </span>
              19%
            </span>
            <div className="detail-value">$92,142</div>
            <div className="detail-name">This Year&lsquo;s Sales</div>
          </div>
        </div>
      </div>
    </div>
  );
}