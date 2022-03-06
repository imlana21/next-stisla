export default function HeroComponent() {
  return (
    <div>
      <div className="section-header">
        <h1>Hero</h1>
        <div className="section-header-breadcrumb">
          <div className="breadcrumb-item active"><a href="javascript:void(0)">Dashboard</a></div>
          <div className="breadcrumb-item"><a href="javascript:void(0)">Components</a></div>
          <div className="breadcrumb-item">Hero</div>
        </div>
      </div>

      <div className="section-body">
        <h2 className="section-title">Hero</h2>
        <p className="section-lead">
          Components that can be used to make something bigger than the header.
        </p>

        <div className="row">
          <div className="col-12 mb-4">
            <div className="hero bg-primary text-white">
              <div className="hero-inner">
                <h2>Welcome Back, Ujang!</h2>
                <p className="lead">
                  This page is a place to manage posts, categories and more.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 mb-4">
            <div className="hero bg-primary text-white">
              <div className="hero-inner">
                <h2>Welcome, Ujang!</h2>
                <p className="lead">
                  You almost arrived, complete the information about your account
                  to complete registration.
                </p>
                <div className="mt-4">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-outline-white btn-lg btn-icon icon-left"
                    ><i className="far fa-user"></i> Setup Account</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mb-4">
            <div className="hero align-items-center bg-success text-white">
              <div className="hero-inner text-center">
                <h2>Congratulations</h2>
                <p className="lead">
                  You have successfully registered with our system. Next, you can
                  log in to the dashboard with your account.
                </p>
                <div className="mt-4">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-outline-white btn-lg btn-icon icon-left"
                    ><i className="fas fa-sign-in-alt"></i> Login</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mb-4">
            <div
              className="hero text-white hero-bg-image hero-bg-parallax"
              style={{backgroundImage: `url('/img/unsplash/andre-benz-1214056-unsplash.jpg')`}}
            >
              <div className="hero-inner">
                <h2>Welcome, Ujang!</h2>
                <p className="lead">
                  You almost arrived, complete the information about your account
                  to complete registration.
                </p>
                <div className="mt-4">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-outline-white btn-lg btn-icon icon-left"
                    ><i className="far fa-user"></i> Setup Account</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mb-4">
            <div
              className="hero text-white hero-bg-image"
              style={{backgroundImage: `url('/img/unsplash/eberhard-grossgasteiger-1207565-unsplash.jpg')`}}
            >
              <div className="hero-inner">
                <h2>Welcome, Ujang!</h2>
                <p className="lead">
                  You almost arrived, complete the information about your account
                  to complete registration.
                </p>
                <div className="mt-4">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-outline-white btn-lg btn-icon icon-left"
                    ><i className="far fa-user"></i> Setup Account</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}