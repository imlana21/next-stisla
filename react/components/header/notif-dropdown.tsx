import { notifData } from "./_data";

export default function HeaderNotifDropdown() {
  const listNotification = notifData.map( (data, i) => {
    return (
      <a href="#"
        key={ `notif${i}` }
        className="dropdown-item">
        <div className={ `dropdown-item-icon ${ data.iconBg } text-white` }>
          <i className={ data.icon }></i>
        </div>
        <div className="dropdown-item-desc">
          { data.notification }
          <div className="time"> { data.time } </div>
        </div>
      </a>
    );
  })
  return (
    <li className="dropdown dropdown-list-toggle">
      <a href="#"
        onClick={event => event.preventDefault()}
        data-toggle="dropdown"
        className="nav-link notification-toggle nav-link-lg beep">
          <i className="far fa-bell"></i>
      </a>
      <div className="dropdown-menu dropdown-list dropdown-menu-right">
        <div className="dropdown-header">
          Notifications
          <div className="float-right">
            <a href="#" 
              onClick={event => event.preventDefault()}>
                Mark All As Read
            </a>
          </div>
        </div>
        <div className="dropdown-list-content dropdown-list-icons">
          { listNotification }
        </div>
        <div className="dropdown-footer text-center">
          <a href="#" 
            onClick={event => event.preventDefault()}>
              View All <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </li>
  );
}