export default function BootstrapBreadcrumb() {
  return (
    <section className="section">
      <div className="section-header">
        <h1>Breadcrumb</h1>
        <div className="section-header-breadcrumb">
          <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
          <div className="breadcrumb-item"><a href="#">Bootstrap Components</a></div>
          <div className="breadcrumb-item">Breadcrumb</div>
        </div>
      </div>

      <div className="section-body">
        <h2 className="section-title">Breadcrumb</h2>
        <p className="section-lead">
          Indicate the current page’s location within a navigational hierarchy
          that automatically adds separators via CSS.
        </p>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4>Default</h4>
              </div>
              <div className="card-body">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">
                      Home
                    </li>
                  </ol>
                </nav>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Library</a></li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Data
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Icon</h4>
              </div>
              <div className="card-body">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active">
                      <i className="fas fa-tachometer-alt"></i> Home
                    </li>
                  </ol>
                </nav>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#"><i className="fas fa-tachometer-alt"></i> Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#"><i className="far fa-file"></i> Library</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <i className="fas fa-list"></i> Data
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4>Background</h4>
              </div>
              <div className="card-body">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb bg-primary text-white-all">
                    <li className="breadcrumb-item">
                      <a href="#"><i className="fas fa-tachometer-alt"></i> Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#"><i className="far fa-file"></i> Library</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <i className="fas fa-list"></i> Data
                    </li>
                  </ol>
                </nav>

                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb bg-warning text-white-all">
                    <li className="breadcrumb-item">
                      <a href="#"><i className="fas fa-tachometer-alt"></i> Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#"><i className="far fa-file"></i> Library</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <i className="fas fa-list"></i> Data
                    </li>
                  </ol>
                </nav>

                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb bg-success text-white-all">
                    <li className="breadcrumb-item">
                      <a href="#"><i className="fas fa-tachometer-alt"></i> Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#"><i className="far fa-file"></i> Library</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <i className="fas fa-list"></i> Data
                    </li>
                  </ol>
                </nav>

                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb bg-danger text-white-all">
                    <li className="breadcrumb-item">
                      <a href="#"><i className="fas fa-tachometer-alt"></i> Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#"><i className="far fa-file"></i> Library</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <i className="fas fa-list"></i> Data
                    </li>
                  </ol>
                </nav>

                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb bg-secondary text-white-all">
                    <li className="breadcrumb-item">
                      <a href="#"><i className="fas fa-tachometer-alt"></i> Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#"><i className="far fa-file"></i> Library</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <i className="fas fa-list"></i> Data
                    </li>
                  </ol>
                </nav>

                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb bg-dark text-white-all">
                    <li className="breadcrumb-item">
                      <a href="#"><i className="fas fa-tachometer-alt"></i> Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#"><i className="far fa-file"></i> Library</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <i className="fas fa-list"></i> Data
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}