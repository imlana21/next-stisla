import Image from "next/image";

export default function HeaderMessageDropdown() {
  return (
    <li className="dropdown dropdown-list-toggle">
      <a
        onClick={event => event.preventDefault()}
        data-toggle="dropdown"
        className="nav-link nav-link-lg message-toggle beep"
      ><i className="far fa-envelope"></i
      ></a>
      <div className="dropdown-menu dropdown-list dropdown-menu-right">
        <div className="dropdown-header">
          Messages
          <div className="float-right">
            <a onClick={event => event.preventDefault()}>Mark All As Read</a>
          </div>
        </div>
        <div className="dropdown-list-content dropdown-list-message">
          <a onClick={event => event.preventDefault()} className="dropdown-item dropdown-item-unread">
            <div className="dropdown-item-avatar">
              <Image
                alt="image"
                src="/img/avatar/avatar-1.png"
                className="rounded-circle"
                layout="fill"
              />
              <div className="is-online"></div>
            </div>
            <div className="dropdown-item-desc">
              <b>Kusnaedi</b>
              <p>Hello, Bro!</p>
              <div className="time">10 Hours Ago</div>
            </div>
          </a>
          <a onClick={event => event.preventDefault()} className="dropdown-item dropdown-item-unread">
            <div className="dropdown-item-avatar">
              <Image
                alt="image"
                src="/img/avatar/avatar-2.png"
                className="rounded-circle"
                layout="fill"
              />
            </div>
            <div className="dropdown-item-desc">
              <b>Dedik Sugiharto</b>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </p>
              <div className="time">12 Hours Ago</div>
            </div>
          </a>
          <a onClick={event => event.preventDefault()} className="dropdown-item dropdown-item-unread">
            <div className="dropdown-item-avatar">
              <Image
                alt="image"
                src="/img/avatar/avatar-3.png"
                className="rounded-circle"
                layout="fill"
              />
              <div className="is-online"></div>
            </div>
            <div className="dropdown-item-desc">
              <b>Agung Ardiansyah</b>
              <p>
                Sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <div className="time">12 Hours Ago</div>
            </div>
          </a>
          <a onClick={event => event.preventDefault()} className="dropdown-item">
            <div className="dropdown-item-avatar">
              <Image
                alt="image"
                src="/img/avatar/avatar-4.png"
                className="rounded-circle"
                layout="fill"
              />
            </div>
            <div className="dropdown-item-desc">
              <b>Ardian Rahardiansyah</b>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit
                ess
              </p>
              <div className="time">16 Hours Ago</div>
            </div>
          </a>
          <a onClick={event => event.preventDefault()} className="dropdown-item">
            <div className="dropdown-item-avatar">
              <Image
                alt="image"
                src="/img/avatar/avatar-5.png"
                className="rounded-circle"
                layout="fill"
              />
            </div>
            <div className="dropdown-item-desc">
              <b>Alfa Zulkarnain</b>
              <p>
                Exercitation ullamco laboris nisi ut aliquip ex ea commodo
              </p>
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