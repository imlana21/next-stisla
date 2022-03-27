export default function BootstrapAlert() {
  return (
    <div className="main-content">
      <section className="section">
        <div className="section-header">
          <h1>Alert</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
            <div className="breadcrumb-item"><a href="#">Bootstrap Components</a></div>
            <div className="breadcrumb-item">Alert</div>
          </div>
        </div>

        <div className="section-body">
          <h2 className="section-title">Alerts</h2>
          <p className="section-lead">
            Provide contextual feedback messages for typical user actions with the
            handful of available and flexible alert messages.
          </p>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Default</h4>
                </div>
                <div className="card-body">
                  <div className="alert alert-primary">This is a primary alert.</div>
                  <div className="alert alert-secondary">
                    This is a secondary alert.
                  </div>
                  <div className="alert alert-success">This is a success alert.</div>
                  <div className="alert alert-danger">This is a danger alert.</div>
                  <div className="alert alert-warning">This is a warning alert.</div>
                  <div className="alert alert-info">This is a info alert.</div>
                  <div className="alert alert-light">This is a light alert.</div>
                  <div className="alert alert-dark">This is a dark alert.</div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4>Icon</h4>
                </div>
                <div className="card-body">
                  <div className="alert alert-primary alert-has-icon">
                    <div className="alert-icon"><i className="far fa-lightbulb"></i></div>
                    <div className="alert-body">
                      <div className="alert-title">Primary</div>
                      This is a primary alert.
                    </div>
                  </div>
                  <div className="alert alert-secondary alert-has-icon">
                    <div className="alert-icon"><i className="far fa-lightbulb"></i></div>
                    <div className="alert-body">
                      <div className="alert-title">Secondary</div>
                      This is a secondary alert.
                    </div>
                  </div>
                  <div className="alert alert-success alert-has-icon">
                    <div className="alert-icon"><i className="far fa-lightbulb"></i></div>
                    <div className="alert-body">
                      <div className="alert-title">Success</div>
                      This is a success alert.
                    </div>
                  </div>
                  <div className="alert alert-danger alert-has-icon">
                    <div className="alert-icon"><i className="far fa-lightbulb"></i></div>
                    <div className="alert-body">
                      <div className="alert-title">Danger</div>
                      This is a danger alert.
                    </div>
                  </div>
                  <div className="alert alert-warning alert-has-icon">
                    <div className="alert-icon"><i className="far fa-lightbulb"></i></div>
                    <div className="alert-body">
                      <div className="alert-title">Warning</div>
                      This is a warning alert.
                    </div>
                  </div>
                  <div className="alert alert-info alert-has-icon">
                    <div className="alert-icon"><i className="far fa-lightbulb"></i></div>
                    <div className="alert-body">
                      <div className="alert-title">Info</div>
                      This is a info alert.
                    </div>
                  </div>
                  <div className="alert alert-light alert-has-icon">
                    <div className="alert-icon"><i className="far fa-lightbulb"></i></div>
                    <div className="alert-body">
                      <div className="alert-title">Light</div>
                      This is a light alert.
                    </div>
                  </div>
                  <div className="alert alert-dark alert-has-icon">
                    <div className="alert-icon"><i className="far fa-lightbulb"></i></div>
                    <div className="alert-body">
                      <div className="alert-title">Dark</div>
                      This is a dark alert.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Title</h4>
                </div>
                <div className="card-body">
                  <div className="alert alert-primary">
                    <div className="alert-title">Primary</div>
                    This is a primary alert.
                  </div>
                  <div className="alert alert-secondary">
                    <div className="alert-title">Secondary</div>
                    This is a secondary alert.
                  </div>
                  <div className="alert alert-success">
                    <div className="alert-title">Success</div>
                    This is a success alert.
                  </div>
                  <div className="alert alert-danger">
                    <div className="alert-title">Danger</div>
                    This is a danger alert.
                  </div>
                  <div className="alert alert-warning">
                    <div className="alert-title">Warning</div>
                    This is a warning alert.
                  </div>
                  <div className="alert alert-info">
                    <div className="alert-title">Info</div>
                    This is a info alert.
                  </div>
                  <div className="alert alert-light">
                    <div className="alert-title">Light</div>
                    This is a light alert.
                  </div>
                  <div className="alert alert-dark">
                    <div className="alert-title">Dark</div>
                    This is a dark alert.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4>Dismissable</h4>
                </div>
                <div className="card-body">
                  <div className="alert alert-primary alert-dismissible show fade">
                    <div className="alert-body">
                      <button className="close" data-dismiss="alert">
                        <span>&times;</span>
                      </button>
                      This is a primary alert.
                    </div>
                  </div>
                  <div className="alert alert-secondary alert-dismissible show fade">
                    <div className="alert-body">
                      <button className="close" data-dismiss="alert">
                        <span>&times;</span>
                      </button>
                      This is a secondary alert.
                    </div>
                  </div>
                  <div className="alert alert-success alert-dismissible show fade">
                    <div className="alert-body">
                      <button className="close" data-dismiss="alert">
                        <span>&times;</span>
                      </button>
                      This is a success alert.
                    </div>
                  </div>
                  <div className="alert alert-danger alert-dismissible show fade">
                    <div className="alert-body">
                      <button className="close" data-dismiss="alert">
                        <span>&times;</span>
                      </button>
                      This is a danger alert.
                    </div>
                  </div>
                  <div className="alert alert-warning alert-dismissible show fade">
                    <div className="alert-body">
                      <button className="close" data-dismiss="alert">
                        <span>&times;</span>
                      </button>
                      This is a warning alert.
                    </div>
                  </div>
                  <div className="alert alert-info alert-dismissible show fade">
                    <div className="alert-body">
                      <button className="close" data-dismiss="alert">
                        <span>&times;</span>
                      </button>
                      This is a info alert.
                    </div>
                  </div>
                  <div className="alert alert-light alert-dismissible show fade">
                    <div className="alert-body">
                      <button className="close" data-dismiss="alert">
                        <span>&times;</span>
                      </button>
                      This is a light alert.
                    </div>
                  </div>
                  <div className="alert alert-dark alert-dismissible show fade">
                    <div className="alert-body">
                      <button className="close" data-dismiss="alert">
                        <span>&times;</span>
                      </button>
                      This is a dark alert.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}