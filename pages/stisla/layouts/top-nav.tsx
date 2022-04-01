import Image from "next/image";

export default function TopNavLayouts() {
  return (
    <div>
      <div className="navbar-bg"></div>
      <nav className="navbar navbar-expand-lg main-navbar">
        <a href="index.html" className="navbar-brand sidebar-gone-hide">Stisla</a>
        <div className="navbar-nav">
          <a href="#" className="nav-link sidebar-gone-show" data-toggle="sidebar"><i className="fas fa-bars"></i></a>
        </div>
        <div className="nav-collapse">
          <a className="sidebar-gone-show nav-collapse-toggle nav-link" href="#">
            <i className="fas fa-ellipsis-v"></i>
          </a>
          <ul className="navbar-nav">
            <li className="nav-item active"><a href="#" className="nav-link">Application</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Report Something</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Server Status</a></li>
          </ul>
        </div>
        <form className="form-inline ml-auto">
          <ul className="navbar-nav">
            <li><a href="#" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i className="fas fa-search"></i></a></li>
          </ul>
          <div className="search-element">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width="250" />
              <button className="btn" type="submit"><i className="fas fa-search"></i></button>
              <div className="search-backdrop"></div>
              <div className="search-result">
                <div className="search-header">
                  Histories
                </div>
                <div className="search-item">
                  <a href="#">How to hack NASA using CSS</a>
                  <a href="#" className="search-close"><i className="fas fa-times"></i></a>
                </div>
                <div className="search-item">
                  <a href="#">Kodinger.com</a>
                  <a href="#" className="search-close"><i className="fas fa-times"></i></a>
                </div>
                <div className="search-item">
                  <a href="#">#Stisla</a>
                  <a href="#" className="search-close"><i className="fas fa-times"></i></a>
                </div>
                <div className="search-header">
                  Result
                </div>
                <div className="search-item">
                  <a href="#">
                    <Image className="mr-3 rounded" width="30" height="30" src="/img/products/product-3-50.png" alt="product" />
                      oPhone S9 Limited Edition
                  </a>
                </div>
                <div className="search-item">
                  <a href="#">
                    <Image className="mr-3 rounded" width="30" height="30" src="/img/products/product-2-50.png" alt="product" />
                      Drone X2 New Gen-7
                  </a>
                </div>
                <div className="search-item">
                  <a href="#">
                    <Image className="mr-3 rounded" width="30" height="30" src="/img/products/product-1-50.png" alt="product" />
                      Headphone Blitz
                  </a>
                </div>
                <div className="search-header">
                  Projects
                </div>
                <div className="search-item">
                  <a href="#">
                    <div className="search-icon bg-danger text-white mr-3">
                      <i className="fas fa-code"></i>
                    </div>
                    Stisla Admin Template
                  </a>
                </div>
                <div className="search-item">
                  <a href="#">
                    <div className="search-icon bg-primary text-white mr-3">
                      <i className="fas fa-laptop"></i>
                    </div>
                    Create a new Homepage Design
                  </a>
                </div>
              </div>
          </div>
        </form>
        <ul className="navbar-nav navbar-right">
          <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" className="nav-link nav-link-lg message-toggle beep"><i className="far fa-envelope"></i></a>
            <div className="dropdown-menu dropdown-list dropdown-menu-right">
              <div className="dropdown-header">Messages
                <div className="float-right">
                  <a href="#">Mark All As Read</a>
                </div>
              </div>
              <div className="dropdown-list-content dropdown-list-message">
                <a href="#" className="dropdown-item dropdown-item-unread">
                  <div className="dropdown-item-avatar">
                    <Image alt="image" height="30" width="30" src="/img/avatar/avatar-1.png" className="rounded-circle" />
                      <div className="is-online"></div>
                  </div>
                  <div className="dropdown-item-desc">
                    <b>Kusnaedi</b>
                    <p>Hello, Bro!</p>
                    <div className="time">10 Hours Ago</div>
                  </div>
                </a>
                <a href="#" className="dropdown-item dropdown-item-unread">
                  <div className="dropdown-item-avatar">
                    <Image alt="image" height="30" width="30" src="/img/avatar/avatar-2.png" className="rounded-circle" />
                  </div>
                  <div className="dropdown-item-desc">
                    <b>Dedik Sugiharto</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                    <div className="time">12 Hours Ago</div>
                  </div>
                </a>
                <a href="#" className="dropdown-item dropdown-item-unread">
                  <div className="dropdown-item-avatar">
                    <Image alt="image" height="30" width="30" src="/img/avatar/avatar-3.png" className="rounded-circle" />
                      <div className="is-online"></div>
                  </div>
                  <div className="dropdown-item-desc">
                    <b>Agung Ardiansyah</b>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="time">12 Hours Ago</div>
                  </div>
                </a>
                <a href="#" className="dropdown-item">
                  <div className="dropdown-item-avatar">
                    <Image alt="image" height="30" width="30" src="/img/avatar/avatar-4.png" className="rounded-circle" />
                  </div>
                  <div className="dropdown-item-desc">
                    <b>Ardian Rahardiansyah</b>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                    <div className="time">16 Hours Ago</div>
                  </div>
                </a>
                <a href="#" className="dropdown-item">
                  <div className="dropdown-item-avatar">
                    <Image alt="image" height="30" width="30" src="/img/avatar/avatar-5.png" className="rounded-circle" />
                  </div>
                  <div className="dropdown-item-desc">
                    <b>Alfa Zulkarnain</b>
                    <p>Exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                    <div className="time">Yesterday</div>
                  </div>
                </a>
              </div>
              <div className="dropdown-footer text-center">
                <a href="#">View All <i className="fas fa-chevron-right"></i></a>
              </div>
            </div>
          </li>
          <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" className="nav-link notification-toggle nav-link-lg beep"><i className="far fa-bell"></i></a>
            <div className="dropdown-menu dropdown-list dropdown-menu-right">
              <div className="dropdown-header">Notifications
                <div className="float-right">
                  <a href="#">Mark All As Read</a>
                </div>
              </div>
              <div className="dropdown-list-content dropdown-list-icons">
                <a href="#" className="dropdown-item dropdown-item-unread">
                  <div className="dropdown-item-icon bg-primary text-white">
                    <i className="fas fa-code"></i>
                  </div>
                  <div className="dropdown-item-desc">
                    Template update is available now!
                    <div className="time text-primary">2 Min Ago</div>
                  </div>
                </a>
                <a href="#" className="dropdown-item">
                  <div className="dropdown-item-icon bg-info text-white">
                    <i className="far fa-user"></i>
                  </div>
                  <div className="dropdown-item-desc">
                    <b>You</b> and <b>Dedik Sugiharto</b> are now friends
                    <div className="time">10 Hours Ago</div>
                  </div>
                </a>
                <a href="#" className="dropdown-item">
                  <div className="dropdown-item-icon bg-success text-white">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="dropdown-item-desc">
                    <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to <b>Done</b>
                    <div className="time">12 Hours Ago</div>
                  </div>
                </a>
                <a href="#" className="dropdown-item">
                  <div className="dropdown-item-icon bg-danger text-white">
                    <i className="fas fa-exclamation-triangle"></i>
                  </div>
                  <div className="dropdown-item-desc">
                    Low disk space. Let&squot;s clean it!
                    <div className="time">17 Hours Ago</div>
                  </div>
                </a>
                <a href="#" className="dropdown-item">
                  <div className="dropdown-item-icon bg-info text-white">
                    <i className="fas fa-bell"></i>
                  </div>
                  <div className="dropdown-item-desc">
                    Welcome to Stisla template!
                    <div className="time">Yesterday</div>
                  </div>
                </a>
              </div>
              <div className="dropdown-footer text-center">
                <a href="#">View All <i className="fas fa-chevron-right"></i></a>
              </div>
            </div>
          </li>
          <li className="dropdown"><a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
            <Image alt="image" height="30" width="30" src="/img/avatar/avatar-1.png" className="rounded-circle mr-1" />
              <div className="d-sm-none d-lg-inline-block">Hi, Ujang Maman</div></a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-title">Logged in 5 min ago</div>
              <a href="features-profile.html" className="dropdown-item has-icon">
                <i className="far fa-user"></i> Profile
              </a>
              <a href="features-activities.html" className="dropdown-item has-icon">
                <i className="fas fa-bolt"></i> Activities
              </a>
              <a href="features-settings.html" className="dropdown-item has-icon">
                <i className="fas fa-cog"></i> Settings
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item has-icon text-danger">
                <i className="fas fa-sign-out-alt"></i> Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>

      <nav className="navbar navbar-secondary navbar-expand-lg">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a href="#" data-toggle="dropdown" className="nav-link has-dropdown"><i className="fas fa-fire"></i><span>Dashboard</span></a>
              <ul className="dropdown-menu">
                <li className="nav-item"><a href="index-0.html" className="nav-link">General Dashboard</a></li>
                <li className="nav-item"><a href="index.html" className="nav-link">Ecommerce Dashboard</a></li>
              </ul>
            </li>
            <li className="nav-item active">
              <a href="#" className="nav-link"><i className="far fa-heart"></i><span>Top Navigation</span></a>
            </li>
            <li className="nav-item dropdown">
              <a href="#" data-toggle="dropdown" className="nav-link has-dropdown"><i className="far fa-clone"></i><span>Multiple Dropdown</span></a>
              <ul className="dropdown-menu">
                <li className="nav-item"><a href="#" className="nav-link">Not Dropdown Link</a></li>
                <li className="nav-item dropdown"><a href="#" className="nav-link has-dropdown">Hover Me</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a href="#" className="nav-link">Link</a></li>
                    <li className="nav-item dropdown"><a href="#" className="nav-link has-dropdown">Link 2</a>
                      <ul className="dropdown-menu">
                        <li className="nav-item"><a href="#" className="nav-link">Link</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Link</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Link</a></li>
                      </ul>
                    </li>
                    <li className="nav-item"><a href="#" className="nav-link">Link 3</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      { /* Main Content */ }
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Top Navigation</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
              <div className="breadcrumb-item"><a href="#">Layout</a></div>
              <div className="breadcrumb-item">Top Navigation</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">This is Example Page</h2>
            <p className="section-lead">This page is just an example for you to create your own page.</p>
            <div className="card">
              <div className="card-header">
                <h4>Example Card</h4>
              </div>
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="card-footer bg-whitesmoke">
                This is card footer
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="main-footer">
        <div className="footer-left">
          Copyright &copy; 2018 <div className="bullet"></div> Design By <a href="https://nauval.in/">Muhamad Nauval Azhar</a>
        </div>
        <div className="footer-right">
          2.3.0
        </div>
      </footer>
    </div>
  )
}