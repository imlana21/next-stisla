export default function BootstrapNavbar() {
  return (
    <div>
      <div className="section-header">
        <h1>Navbar</h1>
        <div className="section-header-breadcrumb">
          <div className="breadcrumb-item active"><a href="javascript:void(0)">Dashboard</a></div>
          <div className="breadcrumb-item"><a href="javascript:void(0)">Bootstrap Components</a></div>
          <div className="breadcrumb-item">Navbar</div>
        </div>
      </div>

      <div className="section-body">
        <h2 className="section-title">Navbar</h2>
        <p className="section-lead">
          Examples for Bootstrap’s powerful, responsive navigation header, the
          navbar. Includes support for branding, navigation, and more, including
          support for our collapse plugin.
        </p>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4>Brand</h4>
              </div>
              <div className="card-body">
                <nav className="navbar bg-primary">
                  <a className="navbar-brand" href="javascript:void(0)">My App</a>
                </nav>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Items</h4>
              </div>
              <div className="card-body">
                <nav className="navbar navbar-expand-lg bg-primary">
                  <a className="navbar-brand" href="javascript:void(0)">My App</a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <a className="nav-link" href="javascript:void(0)"
                          >Home <span className="sr-only">(current)</span></a
                        >
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="javascript:void(0)">Features</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="javascript:void(0)">Pricing</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled" href="javascript:void(0)">Disabled</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4>Form</h4>
              </div>
              <div className="card-body">
                <nav className="navbar bg-primary">
                  <a className="navbar-brand" href="javascript:void(0)">My App</a>
                  <form className="form-inline">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-dark" type="submit">
                      Search
                    </button>
                  </form>
                </nav>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Text</h4>
              </div>
              <div className="card-body">
                <nav className="navbar navbar-expand-lg bg-primary">
                  <a className="navbar-brand" href="javascript:void(0)">My App</a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="javascript:void(0)"
                          >Home <span className="sr-only">(current)</span></a
                        >
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="javascript:void(0)">Features</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="javascript:void(0)">Pricing</a>
                      </li>
                    </ul>
                    <span className="navbar-text">
                      Navbar text with an inline element
                    </span>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}