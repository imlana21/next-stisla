import Image from "next/image";

export default function EcommerceComponent() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card card-statistic-2">
            <div className="card-stats">
              <div className="card-stats-title">
                Order Statistics -
                <div className="dropdown d-inline">
                  <a
                    className="font-weight-600 dropdown-toggle"
                    data-toggle="dropdown"
                    href="javascript:void(0)"
                    id="orders-month"
                    >August</a
                  >
                  <ul className="dropdown-menu dropdown-menu-sm">
                    <li className="dropdown-title">Select Month</li>
                    <li><a href="javascript:void(0)" className="dropdown-item">January</a></li>
                    <li><a href="javascript:void(0)" className="dropdown-item">February</a></li>
                    <li><a href="javascript:void(0)" className="dropdown-item">March</a></li>
                    <li><a href="javascript:void(0)" className="dropdown-item">April</a></li>
                    <li><a href="javascript:void(0)" className="dropdown-item">May</a></li>
                    <li><a href="javascript:void(0)" className="dropdown-item">June</a></li>
                    <li><a href="javascript:void(0)" className="dropdown-item">July</a></li>
                    <li><a href="javascript:void(0)" className="dropdown-item active">August</a></li>
                    <li><a href="javascript:void(0)" className="dropdown-item">September</a></li>
                    <li><a href="javascript:void(0)" className="dropdown-item">October</a></li>
                    <li><a href="javascript:void(0)" className="dropdown-item">November</a></li>
                    <li><a href="javascript:void(0)" className="dropdown-item">December</a></li>
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
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
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
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
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
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header">
              <h4>Budget vs Sales</h4>
            </div>
            <div className="card-body">
              <canvas id="myChart" height="158"></canvas>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card gradient-bottom">
            <div className="card-header">
              <h4>Top 5 Products</h4>
              <div className="card-header-action dropdown">
                <a
                  href="javascript:void(0)"
                  data-toggle="dropdown"
                  className="btn btn-danger dropdown-toggle"
                  >Month</a
                >
                <ul className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                  <li className="dropdown-title">Select Period</li>
                  <li><a href="javascript:void(0)" className="dropdown-item">Today</a></li>
                  <li><a href="javascript:void(0)" className="dropdown-item">Week</a></li>
                  <li><a href="javascript:void(0)" className="dropdown-item active">Month</a></li>
                  <li><a href="javascript:void(0)" className="dropdown-item">This Year</a></li>
                </ul>
              </div>
            </div>
            <div className="card-body" id="top-5-scroll">
              <ul className="list-unstyled list-unstyled-border">
                <li className="media">
                  <Image
                    className="mr-3 rounded"
                    width="55"
                    src="/img/products/product-3-50.png"
                    alt="product"
                  />
                  <div className="media-body">
                    <div className="float-right">
                      <div className="font-weight-600 text-muted text-small">
                        86 Sales
                      </div>
                    </div>
                    <div className="media-title">oPhone S9 Limited</div>
                    <div className="mt-1">
                      <div className="budget-price">
                        <div
                          className="budget-price-square bg-primary"
                          data-width="64%"
                        ></div>
                        <div className="budget-price-label">$68,714</div>
                      </div>
                      <div className="budget-price">
                        <div
                          className="budget-price-square bg-danger"
                          data-width="43%"
                        ></div>
                        <div className="budget-price-label">$38,700</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="media">
                  <Image
                    className="mr-3 rounded"
                    width="55"
                    src="/img/products/product-4-50.png"
                    alt="product"
                  />
                  <div className="media-body">
                    <div className="float-right">
                      <div className="font-weight-600 text-muted text-small">
                        67 Sales
                      </div>
                    </div>
                    <div className="media-title">iBook Pro 2018</div>
                    <div className="mt-1">
                      <div className="budget-price">
                        <div
                          className="budget-price-square bg-primary"
                          data-width="84%"
                        ></div>
                        <div className="budget-price-label">$107,133</div>
                      </div>
                      <div className="budget-price">
                        <div
                          className="budget-price-square bg-danger"
                          data-width="60%"
                        ></div>
                        <div className="budget-price-label">$91,455</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="media">
                  <Image
                    className="mr-3 rounded"
                    width="55"
                    src="/img/products/product-1-50.png"
                    alt="product"
                  />
                  <div className="media-body">
                    <div className="float-right">
                      <div className="font-weight-600 text-muted text-small">
                        63 Sales
                      </div>
                    </div>
                    <div className="media-title">Headphone Blitz</div>
                    <div className="mt-1">
                      <div className="budget-price">
                        <div
                          className="budget-price-square bg-primary"
                          data-width="34%"
                        ></div>
                        <div className="budget-price-label">$3,717</div>
                      </div>
                      <div className="budget-price">
                        <div
                          className="budget-price-square bg-danger"
                          data-width="28%"
                        ></div>
                        <div className="budget-price-label">$2,835</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="media">
                  <Image
                    className="mr-3 rounded"
                    width="55"
                    src="/img/products/product-3-50.png"
                    alt="product"
                  />
                  <div className="media-body">
                    <div className="float-right">
                      <div className="font-weight-600 text-muted text-small">
                        28 Sales
                      </div>
                    </div>
                    <div className="media-title">oPhone X Lite</div>
                    <div className="mt-1">
                      <div className="budget-price">
                        <div
                          className="budget-price-square bg-primary"
                          data-width="45%"
                        ></div>
                        <div className="budget-price-label">$13,972</div>
                      </div>
                      <div className="budget-price">
                        <div
                          className="budget-price-square bg-danger"
                          data-width="30%"
                        ></div>
                        <div className="budget-price-label">$9,660</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="media">
                  <Image
                    className="mr-3 rounded"
                    width="55"
                    src="/img/products/product-5-50.png"
                    alt="product"
                  />
                  <div className="media-body">
                    <div className="float-right">
                      <div className="font-weight-600 text-muted text-small">
                        19 Sales
                      </div>
                    </div>
                    <div className="media-title">Old Camera</div>
                    <div className="mt-1">
                      <div className="budget-price">
                        <div
                          className="budget-price-square bg-primary"
                          data-width="35%"
                        ></div>
                        <div className="budget-price-label">$7,391</div>
                      </div>
                      <div className="budget-price">
                        <div
                          className="budget-price-square bg-danger"
                          data-width="28%"
                        ></div>
                        <div className="budget-price-label">$5,472</div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card-footer pt-3 d-flex justify-content-center">
              <div className="budget-price justify-content-center">
                <div className="budget-price-square bg-primary" data-width="20"></div>
                <div className="budget-price-label">Selling Price</div>
              </div>
              <div className="budget-price justify-content-center">
                <div className="budget-price-square bg-danger" data-width="20"></div>
                <div className="budget-price-label">Budget Price</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}