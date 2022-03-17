import Image from "next/image";
import { messageData } from "./_data";

export default function HeaderMessageDropdown() {
  const listMessage = messageData.map( (data, i) => {
    return (
      <a href={ data.messageUrl }
        key={ `message${i}` }
        className="dropdown-item dropdown-item-unread">
          <div className="dropdown-item-avatar">
            <Image
              alt="image"
              src={ data.imgUrl }
              className="rounded-circle"
              height="50"
              width="50"
            />
            <div className="is-online"></div>
          </div>
          <div className="dropdown-item-desc">
            <b> { data.userName } </b>
            <p> { data.message } </p>
            <div className="time"> { data.time } </div>
          </div>
      </a>
    )
  });

  return (
    <li className="dropdown dropdown-list-toggle">
      <a href="#"
        onClick={event => event.preventDefault()}
        data-toggle="dropdown"
        className="nav-link nav-link-lg message-toggle beep">
          <i className="far fa-envelope"></i>
      </a>
      <div className="dropdown-menu dropdown-list dropdown-menu-right">
        <div className="dropdown-header">
          Messages
          <div className="float-right">
            <a href="#" onClick={event => event.preventDefault()}>Mark All As Read</a>
          </div>
        </div>
        <div className="dropdown-list-content dropdown-list-message">
          { listMessage }
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