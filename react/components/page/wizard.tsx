export default function WizardComponent() {
  return (
    <div>
      <div className="section-header">
        <h1>Wizard</h1>
        <div className="section-header-breadcrumb">
          <div className="breadcrumb-item active"><a href="javascript:void(0)">Dashboard</a></div>
          <div className="breadcrumb-item"><a href="javascript:void(0)">Components</a></div>
          <div className="breadcrumb-item">Wizard</div>
        </div>
      </div>

      <div className="section-body">
        <h2 className="section-title">Wizard</h2>
        <p className="section-lead">
          The wizard is a component to simplify a process with a step-by-step
          method.
        </p>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4>Order Status</h4>
              </div>
              <div className="card-body">
                <div className="row mt-4">
                  <div className="col-12 col-lg-8 offset-lg-2">
                    <div className="wizard-steps">
                      <div className="wizard-step wizard-step-active">
                        <div className="wizard-step-icon">
                          <i className="fas fa-tshirt"></i>
                        </div>
                        <div className="wizard-step-label">Order Placed</div>
                      </div>
                      <div className="wizard-step wizard-step-active">
                        <div className="wizard-step-icon">
                          <i className="fas fa-credit-card"></i>
                        </div>
                        <div className="wizard-step-label">Payment Completed</div>
                      </div>
                      <div className="wizard-step wizard-step-active">
                        <div className="wizard-step-icon">
                          <i className="fas fa-shipping-fast"></i>
                        </div>
                        <div className="wizard-step-label">Product Shipped</div>
                      </div>
                      <div className="wizard-step wizard-step-success">
                        <div className="wizard-step-icon">
                          <i className="fas fa-check"></i>
                        </div>
                        <div className="wizard-step-label">Order Completed</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12 col-lg-8 offset-lg-2">
                    <div className="wizard-steps">
                      <div className="wizard-step wizard-step-active">
                        <div className="wizard-step-icon">
                          <i className="fas fa-tshirt"></i>
                        </div>
                        <div className="wizard-step-label">Order Placed</div>
                      </div>
                      <div className="wizard-step wizard-step-active">
                        <div className="wizard-step-icon">
                          <i className="fas fa-credit-card"></i>
                        </div>
                        <div className="wizard-step-label">Payment Completed</div>
                      </div>
                      <div className="wizard-step wizard-step-active">
                        <div className="wizard-step-icon">
                          <i className="fas fa-shipping-fast"></i>
                        </div>
                        <div className="wizard-step-label">Product Shipped</div>
                      </div>
                      <div className="wizard-step wizard-step-danger">
                        <div className="wizard-step-icon">
                          <i className="fas fa-times"></i>
                        </div>
                        <div className="wizard-step-label">Order Canceled</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12 col-lg-8 offset-lg-2">
                    <div className="wizard-steps">
                      <div className="wizard-step wizard-step-active">
                        <div className="wizard-step-icon">
                          <i className="fas fa-tshirt"></i>
                        </div>
                        <div className="wizard-step-label">Order Placed</div>
                      </div>
                      <div className="wizard-step wizard-step-active">
                        <div className="wizard-step-icon">
                          <i className="fas fa-credit-card"></i>
                        </div>
                        <div className="wizard-step-label">Payment Completed</div>
                      </div>
                      <div className="wizard-step wizard-step-active">
                        <div className="wizard-step-icon">
                          <i className="fas fa-shipping-fast"></i>
                        </div>
                        <div className="wizard-step-label">Product Shipped</div>
                      </div>
                      <div className="wizard-step wizard-step-warning">
                        <div className="wizard-step-icon">
                          <i className="fas fa-stopwatch"></i>
                        </div>
                        <div className="wizard-step-label">Order Pending</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12 col-lg-8 offset-lg-2">
                    <div className="wizard-steps">
                      <div className="wizard-step wizard-step-active">
                        <div className="wizard-step-icon">
                          <i className="fas fa-tshirt"></i>
                        </div>
                        <div className="wizard-step-label">Order Placed</div>
                      </div>
                      <div className="wizard-step wizard-step-active">
                        <div className="wizard-step-icon">
                          <i className="fas fa-credit-card"></i>
                        </div>
                        <div className="wizard-step-label">Payment Completed</div>
                      </div>
                      <div className="wizard-step wizard-step-active">
                        <div className="wizard-step-icon">
                          <i className="fas fa-shipping-fast"></i>
                        </div>
                        <div className="wizard-step-label">Product Shipped</div>
                      </div>
                      <div className="wizard-step wizard-step-info">
                        <div className="wizard-step-icon">
                          <i className="fas fa-info"></i>
                        </div>
                        <div className="wizard-step-label">Order Completed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4>Create New App</h4>
              </div>
              <div className="card-body">
                <div className="row mt-4">
                  <div className="col-12 col-lg-8 offset-lg-2">
                    <div className="wizard-steps">
                      <div className="wizard-step wizard-step-active">
                        <div className="wizard-step-icon">
                          <i className="far fa-user"></i>
                        </div>
                        <div className="wizard-step-label">User Account</div>
                      </div>
                      <div className="wizard-step">
                        <div className="wizard-step-icon">
                          <i className="fas fa-box-open"></i>
                        </div>
                        <div className="wizard-step-label">Create an App</div>
                      </div>
                      <div className="wizard-step">
                        <div className="wizard-step-icon">
                          <i className="fas fa-server"></i>
                        </div>
                        <div className="wizard-step-label">Server Information</div>
                      </div>
                    </div>
                  </div>
                </div>

                <form className="wizard-content mt-2">
                  <div className="wizard-pane">
                    <div className="form-group row align-items-center">
                      <label className="col-md-4 text-md-right text-left">Name</label>
                      <div className="col-lg-4 col-md-6">
                        <input type="text" name="name" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row align-items-center">
                      <label className="col-md-4 text-md-right text-left"
                        >Email</label
                      >
                      <div className="col-lg-4 col-md-6">
                        <input type="email" name="email" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-4 text-md-right text-left mt-2"
                        >Address</label
                      >
                      <div className="col-lg-4 col-md-6">
                        <textarea className="form-control" name="address"></textarea>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-4 text-md-right text-left mt-2"
                        >Role</label
                      >
                      <div className="col-lg-4 col-md-6">
                        <div className="selectgroup w-100">
                          <label className="selectgroup-item">
                            <input
                              type="radio"
                              name="value"
                              value="developer"
                              className="selectgroup-input"
                            />
                            <span className="selectgroup-button">Developer</span>
                          </label>
                          <label className="selectgroup-item">
                            <input
                              type="radio"
                              name="value"
                              value="ceo"
                              className="selectgroup-input"
                            />
                            <span className="selectgroup-button">CEO</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-4"></div>
                      <div className="col-lg-4 col-md-6">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="agree"
                            className="custom-control-input"
                            id="agree"
                          />
                          <label className="custom-control-label" htmlFor="agree"
                            >I agree with the terms and conditions</label
                          >
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-4"></div>
                      <div className="col-lg-4 col-md-6 text-right">
                        <a href="javascript:void(0)" className="btn btn-icon icon-right btn-primary"
                          >Next <i className="fas fa-arrow-right"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}