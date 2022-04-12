import BasicLayout from "@stisla/basic-layout";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

export default function ComponentStatisticPage() {

  useEffect(() => {
    // import { StaticsGraph } from "../../js/StaticsGraph";
    // import ProgressHeightWidth from "../../js/ProgressHeightWidth";
  });

  return (
    <BasicLayout>
      <Head>
        <title> Statistic Component </title>
      </Head>
      <section className="section">
        <div className="section-header">
          <h1>Statistic</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active">
              <a href="#">Dashboard</a>
            </div>
            <div className="breadcrumb-item">
              <a href="#">Components</a>
            </div>
            <div className="breadcrumb-item">Statistic</div>
          </div>
        </div>

        <div className="section-body">
          <h2 className="section-title">Statistics</h2>
          <p className="section-lead">
            The chat component and is equipped with a JavaScript API, making
            it easy for you to integrate with Back-end.
          </p>

          <div className="row">
            <div className="col-12 col-sm-12 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Summary</h4>
                  <div className="card-header-action">
                    <a
                      href="#summary-chart"
                      data-tab="summary-tab"
                      className="btn active"
                    >
                      Chart
                    </a>
                    <a
                      href="#summary-text"
                      data-tab="summary-tab"
                      className="btn"
                    >
                      Text
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <div className="summary">
                    <div
                      className="summary-info"
                      data-tab-group="summary-tab"
                      id="summary-text"
                    >
                      <h4>$1,858</h4>
                      <div className="text-muted">
                        Sold 4 items on 2 customers
                      </div>
                      <div className="d-block mt-2">
                        <a href="#">View All</a>
                      </div>
                    </div>
                    <div
                      className="summary-chart active"
                      data-tab-group="summary-tab"
                      id="summary-chart"
                    >
                      <canvas id="myChart" height="180"></canvas>
                    </div>
                    <div className="summary-item">
                      <h6 className="mt-3">
                        Item List <span className="text-muted">(4 Items)</span>
                      </h6>
                      <ul className="list-unstyled list-unstyled-border">
                        <li className="media">
                          <a href="#">
                            <Image
                              alt="image"
                              className="mr-3 rounded"
                              width="50"
                              height="50"
                              src="/img/products/product-4-50.png"
                            />
                          </a>
                          <div className="media-body">
                            <div className="media-right">$805</div>
                            <div className="media-title">
                              <a href="#">iBook Noob</a>
                            </div>
                            <div className="text-small text-muted">
                              by <a href="#">Ahmad Sutisna</a>{" "}
                              <div className="bullet"></div> Sunday
                            </div>
                          </div>
                        </li>
                        <li className="media">
                          <a href="#">
                            <Image
                              alt="image"
                              className="mr-3 rounded"
                              width="50"
                              height="50"
                              src="/img/products/product-1-50.png"
                            />
                          </a>
                          <div className="media-body">
                            <div className="media-right">$405</div>
                            <div className="media-title">
                              <a href="#">Headphone Blitz</a>
                            </div>
                            <div className="text-small text-muted">
                              by <a href="#">Hasan Basri</a>{" "}
                              <div className="bullet"></div> Sunday
                            </div>
                          </div>
                        </li>
                        <li className="media">
                          <a href="#">
                            <Image
                              alt="image"
                              className="mr-3 rounded"
                              width="50"
                              height="50"
                              src="/img/products/product-2-50.png"
                            />
                          </a>
                          <div className="media-body">
                            <div className="media-right">$499</div>
                            <div className="media-title">
                              <a href="#">RocketZ</a>
                            </div>
                            <div className="text-muted text-small">
                              by <a href="#">Hasan Basri</a>{" "}
                              <div className="bullet"></div> Sunday
                            </div>
                          </div>
                        </li>
                        <li className="media">
                          <a href="#">
                            <Image
                              alt="image"
                              className="mr-3 rounded"
                              width="50"
                              height="50"
                              src="/img/products/product-3-50.png"
                            />
                          </a>
                          <div className="media-body">
                            <div className="media-right">$149</div>
                            <div className="media-title">
                              <a href="#">Xiaomay Readme 4.0</a>
                            </div>
                            <div className="text-small text-muted">
                              by <a href="#">Kusnaedi</a>{" "}
                              <div className="bullet"></div> Tuesday
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Statistics</h4>
                  <div className="card-header-action">
                    <a href="#" className="btn active">
                      Week
                    </a>
                    <a href="#" className="btn">
                      Month
                    </a>
                    <a href="#" className="btn">
                      Year
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <canvas id="myChart2" height="180"></canvas>
                  <div className="statistic-details mt-1">
                    <div className="statistic-details-item">
                      <div className="text-small text-muted">
                        <span className="text-primary">
                          <i className="fas fa-caret-up"></i>
                        </span>{" "}
                        7%
                      </div>
                      <div className="detail-value">$243</div>
                      <div className="detail-name">Today</div>
                    </div>
                    <div className="statistic-details-item">
                      <div className="text-small text-muted">
                        <span className="text-danger">
                          <i className="fas fa-caret-down"></i>
                        </span>{" "}
                        23%
                      </div>
                      <div className="detail-value">$2,902</div>
                      <div className="detail-name">This Week</div>
                    </div>
                    <div className="statistic-details-item">
                      <div className="text-small text-muted">
                        <span className="text-primary">
                          <i className="fas fa-caret-up"></i>
                        </span>
                        9%
                      </div>
                      <div className="detail-value">$12,821</div>
                      <div className="detail-name">This Month</div>
                    </div>
                    <div className="statistic-details-item">
                      <div className="text-small text-muted">
                        <span className="text-primary">
                          <i className="fas fa-caret-up"></i>
                        </span>{" "}
                        19%
                      </div>
                      <div className="detail-value">$92,142</div>
                      <div className="detail-name">This Year</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mt-4">
                <div className="card-header">
                  <h4>Popular Browser</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col mb-4 mb-lg-0 text-center">
                      <div className="browser browser-chrome"></div>
                      <div className="mt-2 font-weight-bold">Chrome</div>
                      <div className="text-small text-muted">
                        <span className="text-primary">
                          <i className="fas fa-caret-up"></i>
                        </span>{" "}
                        48%
                      </div>
                    </div>
                    <div className="col mb-4 mb-lg-0 text-center">
                      <div className="browser browser-firefox"></div>
                      <div className="mt-2 font-weight-bold">Firefox</div>
                      <div className="text-small text-muted">
                        <span className="text-primary">
                          <i className="fas fa-caret-up"></i>
                        </span>{" "}
                        26%
                      </div>
                    </div>
                    <div className="col mb-4 mb-lg-0 text-center">
                      <div className="browser browser-safari"></div>
                      <div className="mt-2 font-weight-bold">Safari</div>
                      <div className="text-small text-muted">
                        <span className="text-danger">
                          <i className="fas fa-caret-down"></i>
                        </span>{" "}
                        14%
                      </div>
                    </div>
                    <div className="col mb-4 mb-lg-0 text-center">
                      <div className="browser browser-opera"></div>
                      <div className="mt-2 font-weight-bold">Opera</div>
                      <div className="text-small text-muted">7%</div>
                    </div>
                    <div className="col mb-4 mb-lg-0 text-center">
                      <div className="browser browser-internet-explorer"></div>
                      <div className="mt-2 font-weight-bold">IE</div>
                      <div className="text-small text-muted">
                        <span className="text-primary">
                          <i className="fas fa-caret-up"></i>
                        </span>{" "}
                        5%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Visitors</h4>
                </div>
                <div className="card-body">
                  <div id="visitorMap" data-height="190"></div>
                </div>
                <div className="card-footer card-footer-grey pt-0">
                  <div className="statistic-details mt-4 align-items-center justify-content-center">
                    <div className="statistic-details-item col-sm-4 col-12">
                      <div className="detail-chart">
                        <div className="sparkline-line-chart"></div>
                      </div>
                      <div className="detail-value">12,329</div>
                      <div className="detail-name">Visits</div>
                    </div>
                    <div className="statistic-details-item col-sm-4 col-12">
                      <div className="detail-chart">
                        <div className="sparkline-line-chart"></div>
                      </div>
                      <div className="detail-value">28%</div>
                      <div className="detail-name">Referral</div>
                    </div>
                    <div className="statistic-details-item col-sm-4 col-12">
                      <div className="detail-chart">
                        <div className="sparkline-line-chart"></div>
                      </div>
                      <div className="detail-value">72%</div>
                      <div className="detail-name">Organic</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3 col-6 mb-md-0 mb-4 text-center">
                      <div className="img-shadow flag-icon flag-icon-id"></div>
                      <div className="mt-2 font-weight-bold text-nowrap">
                        Indonesia
                      </div>
                      <div className="text-small text-muted">8,400</div>
                    </div>
                    <div className="col-sm-3 col-6 mb-md-0 mb-4 text-center">
                      <div className="img-shadow flag-icon flag-icon-ps"></div>
                      <div className="mt-2 font-weight-bold text-nowrap">
                        Palestine
                      </div>
                      <div className="text-small text-muted">
                        <span className="text-primary">
                          <i className="fas fa-caret-up"></i>
                        </span>{" "}
                        7,328
                      </div>
                    </div>
                    <div className="col-sm-3 col-6 text-center">
                      <div className="img-shadow flag-icon flag-icon-sy"></div>
                      <div className="mt-2 font-weight-bold text-nowrap">
                        Syiria
                      </div>
                      <div className="text-small text-muted">
                        <span className="text-danger">
                          <i className="fas fa-caret-down"></i>
                        </span>{" "}
                        5,830
                      </div>
                    </div>
                    <div className="col-sm-3 col-6 text-center">
                      <div className="img-shadow flag-icon flag-icon-my"></div>
                      <div className="mt-2 font-weight-bold text-nowrap">
                        Malaysia
                      </div>
                      <div className="text-small text-muted">4,763</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-6 mt-lg-0 mt-sm-4">
              <div className="card">
                <div className="card-header">
                  <h4>Referral URL</h4>
                </div>
                <div className="card-body">
                  <canvas id="myChart3" height="170"></canvas>

                  <div className="mb-4 mt-4">
                    <div className="text-small float-right font-weight-bold text-muted">
                      558
                    </div>
                    <div className="font-weight-bold mb-1">Google</div>
                    <div className="progress" data-height="3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="80%"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}> </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-small float-right font-weight-bold text-muted">
                      338
                    </div>
                    <div className="font-weight-bold mb-1">Facebook</div>
                    <div className="progress" data-height="3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="67%"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-small float-right font-weight-bold text-muted">
                      238
                    </div>
                    <div className="font-weight-bold mb-1">Bing</div>
                    <div className="progress" data-height="3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="58%"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-small float-right font-weight-bold text-muted">
                      190
                    </div>
                    <div className="font-weight-bold mb-1">Yahoo</div>
                    <div className="progress" data-height="3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="36%"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BasicLayout>
  )
}