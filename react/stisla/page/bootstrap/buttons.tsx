export default function BootstrapButtons() {
  return (
    <div className="main-content">
      <section className="section">
        <div className="section-header">
          <h1>Buttons</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
            <div className="breadcrumb-item"><a href="#">Bootstrap Components</a></div>
            <div className="breadcrumb-item">Button</div>
          </div>
        </div>

        <div className="section-body">
          <h2 className="section-title">Buttons</h2>
          <p className="section-lead">
            Use Bootstrap’s custom button styles for actions in forms, dialogs, and
            more with support for multiple sizes, states, and more.
          </p>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Basic</h4>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use the <code>.btn .btn-color</code> classes.
                  </p>
                  <div className="buttons">
                    <a href="#" className="btn btn-primary">Primary</a>
                    <a href="#" className="btn btn-secondary">Secondary</a>
                    <a href="#" className="btn btn-info">Info</a>
                    <a href="#" className="btn btn-warning">Warning</a>
                    <a href="#" className="btn btn-danger">Danger</a>
                    <a href="#" className="btn btn-success">Success</a>
                    <a href="#" className="btn btn-light">Light</a>
                    <a href="#" className="btn btn-dark">Dark</a>
                    <a href="#" className="btn">Link</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Buttons <code>.btn-outline</code></h4>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use the <code>.btn .btn-outline-color</code> classes.
                  </p>
                  <div className="buttons">
                    <a href="#" className="btn btn-outline-primary">Primary</a>
                    <a href="#" className="btn btn-outline-secondary">Secondary</a>
                    <a href="#" className="btn btn-outline-info">Info</a>
                    <a href="#" className="btn btn-outline-warning">Warning</a>
                    <a href="#" className="btn btn-outline-danger">Danger</a>
                    <a href="#" className="btn btn-outline-success">Success</a>
                    <a href="#" className="btn btn-outline-light">Light</a>
                    <a href="#" className="btn btn-outline-dark">Dark</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Button Sizes</h4>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use the <code>.btn-lg</code> or <code>.btn-sm</code> classes.
                  </p>
                  <div className="buttons">
                    <a href="#" className="btn btn-sm btn-warning">Small</a>
                    <a href="#" className="btn btn-danger">Normal</a>
                    <a href="#" className="btn btn-lg btn-dark">Large</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Button States</h4>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use the <code>.disabled</code> or
                    <code>.btn-progress</code> classes.
                  </p>
                  <div className="buttons">
                    <a href="#" className="btn btn-primary">Normal</a>
                    <a href="#" className="btn disabled btn-primary">Disabled</a>
                    <a href="#" className="btn disabled btn-primary btn-progress"
                    >Progress</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Icon Button</h4>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use the <code>.btn-icon</code> and
                    <code>.icon-left</code> classes.
                  </p>
                  <div className="buttons">
                    <a href="#" className="btn btn-icon icon-left"
                    ><i className="far fa-user"></i> Default</a
                    >
                    <a href="#" className="btn btn-icon icon-left btn-primary"
                    ><i className="far fa-edit"></i> Primary</a
                    >
                    <a href="#" className="btn btn-icon icon-left btn-secondary"
                    ><i className="far fa-user"></i> Secondary</a
                    >
                    <a href="#" className="btn btn-icon icon-left btn-info"
                    ><i className="fas fa-info-circle"></i> Info</a
                    >
                    <a href="#" className="btn btn-icon icon-left btn-warning"
                    ><i className="fas fa-exclamation-triangle"></i> Warning</a
                    >
                    <a href="#" className="btn btn-icon icon-left btn-danger"
                    ><i className="fas fa-times"></i> Danger</a
                    >
                    <a href="#" className="btn btn-icon icon-left btn-success"
                    ><i className="fas fa-check"></i> Success</a
                    >
                    <a href="#" className="btn btn-icon icon-left btn-light"
                    ><i className="fas fa-star"></i> Light</a
                    >
                    <a href="#" className="btn btn-icon icon-left btn-dark"
                    ><i className="far fa-file"></i> Dark</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Only Icon Button</h4>
                </div>
                <div className="card-body">
                  <p className="text-muted">Use the <code>.btn-icon</code> className.</p>
                  <div className="buttons">
                    <a href="#" className="btn btn-icon btn-primary"
                    ><i className="far fa-edit"></i
                    ></a>
                    <a href="#" className="btn btn-icon btn-secondary"
                    ><i className="far fa-user"></i
                    ></a>
                    <a href="#" className="btn btn-icon btn-info"
                    ><i className="fas fa-info-circle"></i
                    ></a>
                    <a href="#" className="btn btn-icon btn-warning"
                    ><i className="fas fa-exclamation-triangle"></i
                    ></a>
                    <a href="#" className="btn btn-icon btn-danger"
                    ><i className="fas fa-times"></i
                    ></a>
                    <a href="#" className="btn btn-icon btn-success"
                    ><i className="fas fa-check"></i
                    ></a>
                    <a href="#" className="btn btn-icon btn-light"
                    ><i className="fas fa-star"></i
                    ></a>
                    <a href="#" className="btn btn-icon btn-dark"
                    ><i className="far fa-file"></i
                    ></a>
                  </div>
                  <p className="text-muted mt-2">Sizes.</p>
                  <div className="buttons">
                    <a href="#" className="btn btn-icon btn-sm btn-warning"
                    ><i className="fas fa-exclamation-triangle"></i
                    ></a>
                    <a href="#" className="btn btn-icon btn-danger"
                    ><i className="fas fa-times"></i
                    ></a>
                    <a href="#" className="btn btn-icon btn-lg btn-success"
                    ><i className="fas fa-check"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Button Group</h4>
                </div>
                <div className="card-body">
                  <div
                    className="btn-group mb-3"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" className="btn btn-secondary">Left</button>
                    <button type="button" className="btn btn-secondary">Middle</button>
                    <button type="button" className="btn btn-secondary">Right</button>
                  </div>
                  <div
                    className="btn-group mb-3"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" className="btn btn-danger">Left</button>
                    <button type="button" className="btn btn-warning">Middle</button>
                    <button type="button" className="btn btn-success">Right</button>
                  </div>
                  <div
                    className="btn-group mb-3 btn-group-sm"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" className="btn btn-primary">Left</button>
                    <button type="button" className="btn btn-primary">Middle</button>
                    <button type="button" className="btn btn-primary">Right</button>
                  </div>
                  <div className="clearfix"></div>
                  <div
                    className="btn-group btn-group-lg"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" className="btn btn-danger">Left</button>
                    <button type="button" className="btn btn-danger">Middle</button>
                    <button type="button" className="btn btn-danger">Right</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Vertical Variation</h4>
                </div>
                <div className="card-body">
                  <div
                    className="btn-group-vertical"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" className="btn btn-secondary">Left</button>
                    <button type="button" className="btn btn-secondary">Middle</button>
                    <button type="button" className="btn btn-secondary">Right</button>
                    <button type="button" className="btn btn-secondary">Justify</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}