export default function BootstrapPagination() {
  return (
    <div className="main-content">
      <section className="section">
        <div className="section-header">
          <h1>Pagination</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active"><a href="javascript:void(0)">Dashboard</a></div>
            <div className="breadcrumb-item"><a href="javascript:void(0)">Bootstrap Components</a></div>
            <div className="breadcrumb-item">Pagination</div>
          </div>
        </div>

        <div className="section-body">
          <h2 className="section-title">Pagination</h2>
          <p className="section-lead">
            Examples for showing pagination to indicate a series of related content
            exists across multiple pages.
          </p>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Pagination</h4>
                </div>
                <div className="card-body">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="page-link" href="javascript:void(0)">Previous</a>
                      </li>
                      <li className="page-item"><a className="page-link" href="javascript:void(0)">1</a></li>
                      <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
                      <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                      <li className="page-item">
                        <a className="page-link" href="javascript:void(0)">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4>Disabled &amp; Active State</h4>
                </div>
                <div className="card-body">
                  <nav aria-label="...">
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <a className="page-link" href="javascript:void(0)" tabIndex={-1}> Previous </a>
                      </li>
                      <li className="page-item"><a className="page-link" href="javascript:void(0)">1</a></li>
                      <li className="page-item active">
                        <a className="page-link" href="javascript:void(0)"
                        >2 <span className="sr-only">(current)</span></a
                        >
                      </li>
                      <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                      <li className="page-item">
                        <a className="page-link" href="javascript:void(0)">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Icon</h4>
                </div>
                <div className="card-body">
                  <div className="buttons">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item">
                          <a className="page-link" href="javascript:void(0)" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="javascript:void(0)">1</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="javascript:void(0)">2</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="javascript:void(0)">3</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="javascript:void(0)" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4>Sizing</h4>
                </div>
                <div className="card-body">
                  <nav aria-label="...">
                    <ul className="pagination pagination-sm">
                      <li className="page-item disabled">
                        <a className="page-link" href="javascript:void(0)" tabIndex={-1}>1</a>
                      </li>
                      <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
                      <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                    </ul>
                  </nav>
                  <nav aria-label="...">
                    <ul className="pagination pagination-lg">
                      <li className="page-item disabled">
                        <a className="page-link" href="javascript:void(0)" tabIndex={-1}>1</a>
                      </li>
                      <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
                      <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}