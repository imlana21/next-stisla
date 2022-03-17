import Image from "next/image";

export default function StatisticStats1() {
  return(
    <div className="card">
      <div className="card-header">
        <h4>This Week Stats</h4>
        <div className="card-header-action">
          <div className="dropdown">
            <a
              href="javascript:void(0)"
              className="dropdown-toggle btn btn-primary"
              data-toggle="dropdown">
                Filter
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a href="javascript:void(0)" className="dropdown-item has-icon">
                <i className="far fa-circle"></i> 
                Electronic
              </a>
              <a href="javascript:void(0)" className="dropdown-item has-icon">
                <i className="far fa-circle"></i> 
                T-shirt 
              </a>
              <a href="javascript:void(0)" className="dropdown-item has-icon">
                <i className="far fa-circle"></i> 
                Hat
              </a>
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
                    className="rounded"
                    width="50"
                    height="50"
                    src="/img/products/product-1-50.png"
                    alt="product"
                  />
                </a>
                <div className="ml-3 media-body">
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
                    className="rounded"
                    width="50"
                    height="50"
                    src="/img/products/product-2-50.png"
                    alt="product"
                  />
                </a>
                <div className="ml-3 media-body">
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
                    className="rounded"
                    width="50"
                    height="50"
                    src="/img/products/product-3-50.png"
                    alt="product"
                  />
                </a>
                <div className="ml-3 media-body">
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
  )
}