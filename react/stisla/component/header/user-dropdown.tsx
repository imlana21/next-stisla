import Image from "next/image";

export default function HeaderUserDropdown() {
  return (
    <li className="dropdown">
      <a onClick={event => event.preventDefault()}
        href="#"
        data-toggle="dropdown"
        className="nav-link dropdown-toggle nav-link-lg nav-link-user">
        <Image
          alt="image"
          src="/img/avatar/avatar-1.png"
          className="rounded-circle align-items-center"
          width="30"
          height="30"
        />
        <div className="d-sm-none d-lg-inline-block pl-2">
          Hi, Bang Ujang
        </div>
      </a>
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
        <a onClick={event => event.preventDefault()} className="dropdown-item has-icon text-danger">
          <i className="fas fa-sign-out-alt"></i> Logout
        </a>
      </div>
    </li>
  );
}