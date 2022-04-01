export default function BootstrapBadge() {
  return (
    <section className="section">
      <div className="section-header">
        <h1>Badge</h1>
        <div className="section-header-breadcrumb">
          <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
          <div className="breadcrumb-item"><a href="#">Bootstrap Components</a></div>
          <div className="breadcrumb-item">Badge</div>
        </div>
      </div>

      <div className="section-body">
        <h2 className="section-title">Badges</h2>
        <p className="section-lead">
          Examples for badges, our small count and labeling component.
        </p>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4>Heading</h4>
              </div>
              <div className="card-body">
                <h1>Heading 1 <span className="badge badge-secondary">New</span></h1>
                <h2>Heading 2 <span className="badge badge-secondary">New</span></h2>
                <h3>Heading 3 <span className="badge badge-secondary">New</span></h3>
                <h4>Heading 4 <span className="badge badge-secondary">New</span></h4>
                <h5>Heading 5 <span className="badge badge-secondary">New</span></h5>
                <h6>Heading 6 <span className="badge badge-secondary">New</span></h6>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Variation</h4>
              </div>
              <div className="card-body">
                <div className="badges">
                  <span className="badge badge-primary">Primary</span>
                  <span className="badge badge-secondary">Secondary</span>
                  <span className="badge badge-success">Success</span>
                  <span className="badge badge-danger">Danger</span>
                  <span className="badge badge-warning">Warning</span>
                  <span className="badge badge-info">Info</span>
                  <span className="badge badge-light">Light</span>
                  <span className="badge badge-dark">Dark</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4>Button</h4>
              </div>
              <div className="card-body">
                <div className="buttons">
                  <div className="section-title mt-0">Simple</div>
                  <button type="button" className="btn btn-primary">
                    Notifications <span className="badge badge-transparent">4</span>
                  </button>
                  <button type="button" className="btn btn-danger">
                    Notifications <span className="badge badge-transparent">4</span>
                  </button>
                  <button type="button" className="btn btn-warning">
                    Notifications <span className="badge badge-transparent">4</span>
                  </button>
                  <button type="button" className="btn btn-success">
                    Notifications <span className="badge badge-transparent">4</span>
                  </button>
                  <button type="button" className="btn btn-dark">
                    Notifications <span className="badge badge-transparent">4</span>
                  </button>
                  <div className="section-title">Icons</div>
                  <button
                    type="button"
                    className="btn btn-primary btn-icon icon-left"
                  >
                    <i className="fas fa-plane"></i> Notifications
                    <span className="badge badge-transparent">4</span>
                  </button>
                  <button type="button" className="btn btn-danger btn-icon icon-left">
                    <i className="fas fa-plane"></i> Notifications
                    <span className="badge badge-transparent">4</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning btn-icon icon-left"
                  >
                    <i className="fas fa-plane"></i> Notifications
                    <span className="badge badge-transparent">4</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-success btn-icon icon-left"
                  >
                    <i className="fas fa-plane"></i> Notifications
                    <span className="badge badge-transparent">4</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Link</h4>
              </div>
              <div className="card-body">
                <div className="badges">
                  <a href="#" className="badge badge-primary">Primary</a>
                  <a href="#" className="badge badge-secondary">Secondary</a>
                  <a href="#" className="badge badge-success">Success</a>
                  <a href="#" className="badge badge-danger">Danger</a>
                  <a href="#" className="badge badge-warning">Warning</a>
                  <a href="#" className="badge badge-info">Info</a>
                  <a href="#" className="badge badge-light">Light</a>
                  <a href="#" className="badge badge-dark">Dark</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}