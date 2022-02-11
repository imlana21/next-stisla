import Image from "next/image";

export default function GeneralDashboard() {
  return (
    <div>
      <div className="section-header">
        <h1>Dashboard</h1>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="card card-statistic-1">
            <div className="card-icon bg-primary">
              <i className="far fa-user"></i>
            </div>
            <div className="card-wrap">
              <div className="card-header">
                <h4>Total Admin</h4>
              </div>
              <div className="card-body">10</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="card card-statistic-1">
            <div className="card-icon bg-danger">
              <i className="far fa-newspaper"></i>
            </div>
            <div className="card-wrap">
              <div className="card-header">
                <h4>News</h4>
              </div>
              <div className="card-body">42</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="card card-statistic-1">
            <div className="card-icon bg-warning">
              <i className="far fa-file"></i>
            </div>
            <div className="card-wrap">
              <div className="card-header">
                <h4>Reports</h4>
              </div>
              <div className="card-body">1,201</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="card card-statistic-1">
            <div className="card-icon bg-success">
              <i className="fas fa-circle"></i>
            </div>
            <div className="card-wrap">
              <div className="card-header">
                <h4>Online Users</h4>
              </div>
              <div className="card-body">47</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-12 col-12 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4>Statistics</h4>
              <div className="card-header-action">
                <div className="btn-group">
                  <a href="javascript:void(0)" className="btn btn-primary">Week</a>
                  <a href="javascript:void(0)" className="btn">Month</a>
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
                  <span className="text-muted"
                    ><span className="text-danger"
                      ><i className="fas fa-caret-down"></i
                    ></span>
                    23%</span
                  >
                  <div className="detail-value">$2,902</div>
                  <div className="detail-name">This Week&lsquo;s Sales</div>
                </div>
                <div className="statistic-details-item">
                  <span className="text-muted"
                    ><span className="text-primary"
                      ><i className="fas fa-caret-up"></i></span
                    >9%</span
                  >
                  <div className="detail-value">$12,821</div>
                  <div className="detail-name">This Month&lsquo;s Sales</div>
                </div>
                <div className="statistic-details-item">
                  <span className="text-muted"
                    ><span className="text-primary"
                      ><i className="fas fa-caret-up"></i
                    ></span>
                    19%</span
                  >
                  <div className="detail-value">$92,142</div>
                  <div className="detail-name">This Year&lsquo;s Sales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-12 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4>This Week Stats</h4>
              <div className="card-header-action">
                <div className="dropdown">
                  <a
                    href="javascript:void(0)"
                    className="dropdown-toggle btn btn-primary"
                    data-toggle="dropdown"
                    >Filter</a
                  >
                  <div className="dropdown-menu dropdown-menu-right">
                    <a href="javascript:void(0)" className="dropdown-item has-icon"
                      ><i className="far fa-circle"></i> Electronic</a
                    >
                    <a href="javascript:void(0)" className="dropdown-item has-icon"
                      ><i className="far fa-circle"></i> T-shirt</a
                    >
                    <a href="javascript:void(0)" className="dropdown-item has-icon"
                      ><i className="far fa-circle"></i> Hat</a
                    >
                    <div className="dropdown-divider"></div>
                    <a href="javascript:void(0)" className="dropdown-item">View All</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="summary">
                <div className="summary-info">
                  <h4>$1,053</h4>
                  <div className="text-muted">Sold 3 items on 2 customers</div>
                  <div className="d-block mt-2">
                    <a href="javascript:void(0)">View All</a>
                  </div>
                </div>
                <div className="summary-item">
                  <h6>Item List <span className="text-muted">(3 Items)</span></h6>
                  <ul className="list-unstyled list-unstyled-border">
                    <li className="media">
                      <a href="javascript:void(0)">
                        <Image
                          className="mr-3 rounded"
                          width="50"
                          src="/img/products/product-1-50.png"
                          alt="product"
                        />
                      </a>
                      <div className="media-body">
                        <div className="media-right">$405</div>
                        <div className="media-title">
                          <a href="javascript:void(0)">PlayStation 9</a>
                        </div>
                        <div className="text-muted text-small">
                          by <a href="javascript:void(0)">Hasan Basri</a>
                          <div className="bullet"></div>
                          Sunday
                        </div>
                      </div>
                    </li>
                    <li className="media">
                      <a href="javascript:void(0)">
                        <Image
                          className="mr-3 rounded"
                          width="50"
                          src="/img/products/product-2-50.png"
                          alt="product"
                        />
                      </a>
                      <div className="media-body">
                        <div className="media-right">$499</div>
                        <div className="media-title"><a href="javascript:void(0)">RocketZ</a></div>
                        <div className="text-muted text-small">
                          by <a href="javascript:void(0)">Hasan Basri</a>
                          <div className="bullet"></div>
                          Sunday
                        </div>
                      </div>
                    </li>
                    <li className="media">
                      <a href="javascript:void(0)">
                        <Image
                          className="mr-3 rounded"
                          width="50"
                          src="/img/products/product-3-50.png"
                          alt="product"
                        />
                      </a>
                      <div className="media-body">
                        <div className="media-right">$149</div>
                        <div className="media-title">
                          <a href="javascript:void(0)">Xiaomay Readme 4.0</a>
                        </div>
                        <div className="text-muted text-small">
                          by <a href="javascript:void(0)">Kusnaedi</a>
                          <div className="bullet"></div>
                          Tuesday
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}