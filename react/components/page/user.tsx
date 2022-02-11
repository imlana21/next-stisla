import Image from "next/image";

export default function UserComponent() {
  return (
    <div>
      <div className="section-header">
        <h1>User</h1>
        <div className="section-header-breadcrumb">
          <div className="breadcrumb-item active"><a href="javascript:void(0)">Dashboard</a></div>
          <div className="breadcrumb-item"><a href="javascript:void(0)">Components</a></div>
          <div className="breadcrumb-item">User</div>
        </div>
      </div>

      <div className="section-body">
        <h2 className="section-title">Users</h2>
        <p className="section-lead">
          Components relating to users, lists of users and so on.
        </p>

        <div className="row">
          <div className="col-12 col-sm-12 col-lg-7">
            <div className="card author-box card-primary">
              <div className="card-body">
                <div className="author-box-left">
                  <Image
                    alt="image"
                    src="/img/avatar/avatar-1.png"
                    className="rounded-circle author-box-picture"
                  />
                  <div className="clearfix"></div>
                  <a
                    href="javascript:void(0)"
                    className="btn btn-primary mt-3 follow-btn"
                    data-follow-action="alert('follow clicked');"
                    data-unfollow-action="alert('unfollow clicked');"
                    >Follow</a
                  >
                </div>
                <div className="author-box-details">
                  <div className="author-box-name">
                    <a href="javascript:void(0)">Hasan Basri</a>
                  </div>
                  <div className="author-box-job">Web Developer</div>
                  <div className="author-box-description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="mb-2 mt-3">
                    <div className="text-small font-weight-bold">Follow Hasan On</div>
                  </div>
                  <a href="javascript:void(0)" className="btn btn-social-icon mr-1 btn-facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-social-icon mr-1 btn-twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-social-icon mr-1 btn-github">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-social-icon mr-1 btn-instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <div className="w-100 d-sm-none"></div>
                  <div className="float-right mt-sm-0 mt-3">
                    <a href="javascript:void(0)" className="btn"
                      >View Posts <i className="fas fa-chevron-right"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-lg-5">
            <div className="card card-primary">
              <div className="card-header">
                <h4>Authors</h4>
              </div>
              <div className="card-body pb-0">
                <div className="row">
                  <div className="col-6 col-sm-3 col-lg-3 mb-4 mb-md-0">
                    <div className="avatar-item">
                      <Image
                        alt="image"
                        src="/img/avatar/avatar-1.png"
                        className="img-fluid"
                        data-toggle="tooltip"
                        title="Syahdan Ubaidillah"
                      />
                      <div
                        className="avatar-badge"
                        title="Editor"
                        data-toggle="tooltip"
                      >
                        <i className="fas fa-wrench"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3 col-lg-3 mb-4 mb-md-0">
                    <div className="avatar-item">
                      <Image
                        alt="image"
                        src="/img/avatar/avatar-2.png"
                        className="img-fluid"
                        data-toggle="tooltip"
                        title="Danny Stenvenson"
                      />
                      <div
                        className="avatar-badge"
                        title="Admin"
                        data-toggle="tooltip"
                      >
                        <i className="fas fa-cog"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3 col-lg-3 mb-4 mb-md-0">
                    <div className="avatar-item">
                      <Image
                        alt="image"
                        src="/img/avatar/avatar-3.png"
                        className="img-fluid"
                        data-toggle="tooltip"
                        title="Riko Huang"
                      />
                      <div
                        className="avatar-badge"
                        title="Author"
                        data-toggle="tooltip"
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3 col-lg-3 mb-4 mb-md-0">
                    <div className="avatar-item">
                      <Image
                        alt="image"
                        src="/img/avatar/avatar-4.png"
                        className="img-fluid"
                        data-toggle="tooltip"
                        title="Luthfi Hakim"
                      />
                      <div
                        className="avatar-badge"
                        title="Author"
                        data-toggle="tooltip"
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-7">
            <div className="card">
              <div className="card-header">
                <h4>Comments</h4>
              </div>
              <div className="card-body">
                <ul
                  className="list-unstyled list-unstyled-border list-unstyled-noborder"
                >
                  <li className="media">
                    <Image
                      alt="image"
                      className="mr-3 rounded-circle"
                      width="70"
                      src="/img/avatar/avatar-1.png"
                    />
                    <div className="media-body">
                      <div className="media-right">
                        <div className="text-primary">Approved</div>
                      </div>
                      <div className="media-title mb-1">Rizal Fakhri</div>
                      <div className="text-time">Yesterday</div>
                      <div className="media-description text-muted">
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                      </div>
                      <div className="media-links">
                        <a href="javascript:void(0)">View</a>
                        <div className="bullet"></div>
                        <a href="javascript:void(0)">Edit</a>
                        <div className="bullet"></div>
                        <a href="javascript:void(0)" className="text-danger">Trash</a>
                      </div>
                    </div>
                  </li>
                  <li className="media">
                    <Image
                      alt="image"
                      className="mr-3 rounded-circle"
                      width="70"
                      src="/img/avatar/avatar-2.png"
                    />
                    <div className="media-body">
                      <div className="media-right">
                        <div className="text-warning">Pending</div>
                      </div>
                      <div className="media-title mb-1">Bambang Uciha</div>
                      <div className="text-time">Yesterday</div>
                      <div className="media-description text-muted">
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                      </div>
                      <div className="media-links">
                        <a href="javascript:void(0)">View</a>
                        <div className="bullet"></div>
                        <a href="javascript:void(0)">Edit</a>
                        <div className="bullet"></div>
                        <a href="javascript:void(0)" className="text-danger">Trash</a>
                      </div>
                    </div>
                  </li>
                  <li className="media">
                    <Image
                      alt="image"
                      className="mr-3 rounded-circle"
                      width="70"
                      src="/img/avatar/avatar-3.png"
                    />
                    <div className="media-body">
                      <div className="media-right">
                        <div className="text-primary">Approved</div>
                      </div>
                      <div className="media-title mb-1">Ujang Maman</div>
                      <div className="text-time">Yesterday</div>
                      <div className="media-description text-muted">
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident
                      </div>
                      <div className="media-links">
                        <a href="javascript:void(0)">View</a>
                        <div className="bullet"></div>
                        <a href="javascript:void(0)">Edit</a>
                        <div className="bullet"></div>
                        <a href="javascript:void(0)" className="text-danger">Trash</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-lg-5">
            <div className="card">
              <div className="card-header">
                <h4>User Progress</h4>
              </div>
              <div className="card-body">
                <ul
                  className="list-unstyled user-progress list-unstyled-border list-unstyled-noborder"
                >
                  <li className="media">
                    <Image
                      alt="image"
                      className="mr-3 rounded-circle"
                      width="50"
                      src="/img/avatar/avatar-1.png"
                    />
                    <div className="media-body">
                      <div className="media-title">Rizal Fakhri</div>
                      <div className="text-job text-muted">Web Developer</div>
                    </div>
                    <div className="media-progressbar">
                      <div className="progress-text">30%</div>
                      <div className="progress" data-height="6">
                        <div
                          className="progress-bar bg-primary"
                          data-width="30%"
                        ></div>
                      </div>
                    </div>
                    <div className="media-cta">
                      <a href="javascript:void(0)" className="btn btn-outline-primary">Detail</a>
                    </div>
                  </li>
                  <li className="media">
                    <Image
                      alt="image"
                      className="mr-3 rounded-circle"
                      width="50"
                      src="/img/avatar/avatar-5.png"
                    />
                    <div className="media-body">
                      <div className="media-title">Irwansyah Saputra</div>
                      <div className="text-job text-muted">Web Developer</div>
                    </div>
                    <div className="media-progressbar">
                      <div className="progress-text">67%</div>
                      <div className="progress" data-height="6">
                        <div
                          className="progress-bar bg-primary"
                          data-width="67%"
                        ></div>
                      </div>
                    </div>
                    <div className="media-cta">
                      <a href="javascript:void(0)" className="btn btn-outline-primary">Detail</a>
                    </div>
                  </li>
                  <li className="media">
                    <Image
                      alt="image"
                      className="mr-3 rounded-circle"
                      width="50"
                      src="/img/avatar/avatar-4.png"
                    />
                    <div className="media-body">
                      <div className="media-title">Hasan Basri</div>
                      <div className="text-job text-muted">Web Developer</div>
                    </div>
                    <div className="media-progressbar">
                      <div className="progress-text">45%</div>
                      <div className="progress" data-height="6">
                        <div
                          className="progress-bar bg-primary"
                          data-width="45%"
                        ></div>
                      </div>
                    </div>
                    <div className="media-cta">
                      <a href="javascript:void(0)" className="btn btn-outline-primary">Detail</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card mt-4">
              <div className="card-header">
                <h4>User Details</h4>
              </div>
              <div className="card-body">
                <ul
                  className="list-unstyled user-details list-unstyled-border list-unstyled-noborder"
                >
                  <li className="media">
                    <Image
                      alt="image"
                      className="mr-3 rounded-circle"
                      width="50"
                      src="/img/avatar/avatar-1.png"
                    />
                    <div className="media-body">
                      <div className="media-title">Rizal Fakhri</div>
                      <div className="text-job text-muted">Web Developer</div>
                    </div>
                    <div className="media-items">
                      <div className="media-item">
                        <div className="media-value">1,239</div>
                        <div className="media-label">Posts</div>
                      </div>
                      <div className="media-item">
                        <div className="media-value">10K</div>
                        <div className="media-label">Followers</div>
                      </div>
                      <div className="media-item">
                        <div className="media-value">2,312</div>
                        <div className="media-label">Following</div>
                      </div>
                    </div>
                  </li>
                  <li className="media">
                    <Image
                      alt="image"
                      className="mr-3 rounded-circle"
                      width="50"
                      src="/img/avatar/avatar-5.png"
                    />
                    <div className="media-body">
                      <div className="media-title">Irwansyah Saputra</div>
                      <div className="text-job text-muted">Web Developer</div>
                    </div>
                    <div className="media-items">
                      <div className="media-item">
                        <div className="media-value">4,872</div>
                        <div className="media-label">Posts</div>
                      </div>
                      <div className="media-item">
                        <div className="media-value">43K</div>
                        <div className="media-label">Followers</div>
                      </div>
                      <div className="media-item">
                        <div className="media-value">1,290</div>
                        <div className="media-label">Following</div>
                      </div>
                    </div>
                  </li>
                  <li className="media">
                    <Image
                      alt="image"
                      className="mr-3 rounded-circle"
                      width="50"
                      src="/img/avatar/avatar-4.png"
                    />
                    <div className="media-body">
                      <div className="media-title">Hasan Basri</div>
                      <div className="text-job text-muted">Web Developer</div>
                    </div>
                    <div className="media-items">
                      <div className="media-item">
                        <div className="media-value">1,821</div>
                        <div className="media-label">Posts</div>
                      </div>
                      <div className="media-item">
                        <div className="media-value">14K</div>
                        <div className="media-label">Followers</div>
                      </div>
                      <div className="media-item">
                        <div className="media-value">2,891</div>
                        <div className="media-label">Following</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}