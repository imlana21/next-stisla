export default function HeaderNotifDropdown() {
  return (
    <li className="dropdown dropdown-list-toggle">
      <a
        onClick={event => event.preventDefault()}
        data-toggle="dropdown"
        className="nav-link notification-toggle nav-link-lg beep"
      ><i className="far fa-bell"></i
      ></a>
      <div className="dropdown-menu dropdown-list dropdown-menu-right">
        <div className="dropdown-header">
          Notifications
          <div className="float-right">
            <a onClick={event => event.preventDefault()}>Mark All As Read</a>
          </div>
        </div>
        <div className="dropdown-list-content dropdown-list-icons">
          <a onClick={event => event.preventDefault()} className="dropdown-item dropdown-item-unread">
            <div className="dropdown-item-icon bg-primary text-white">
              <i className="fas fa-code"></i>
            </div>
            <div className="dropdown-item-desc">
              Template update is available now!
              <div className="time text-primary">2 Min Ago</div>
            </div>
          </a>
          <a onClick={event => event.preventDefault()} className="dropdown-item">
            <div className="dropdown-item-icon bg-info text-white">
              <i className="far fa-user"></i>
            </div>
            <div className="dropdown-item-desc">
              <b>You</b> and <b>Dedik Sugiharto</b> are now friends
              <div className="time">10 Hours Ago</div>
            </div>
          </a>
          <a onClick={event => event.preventDefault()} className="dropdown-item">
            <div className="dropdown-item-icon bg-success text-white">
              <i className="fas fa-check"></i>
            </div>
            <div className="dropdown-item-desc">
              <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to
              <b>Done</b>
              <div className="time">12 Hours Ago</div>
            </div>
          </a>
          <a onClick={event => event.preventDefault()} className="dropdown-item">
            <div className="dropdown-item-icon bg-danger text-white">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <div className="dropdown-item-desc">
              Low disk space. Let&lsquo;s clean it!
              <div className="time">17 Hours Ago</div>
            </div>
          </a>
          <a onClick={event => event.preventDefault()} className="dropdown-item">
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
          <a onClick={event => event.preventDefault()}>View All <i className="fas fa-chevron-right"></i></a>
        </div>
      </div>
    </li>
  );
}