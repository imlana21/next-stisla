import Image from "next/image";
import HeaderMessageDropdown from "./message-dropdown";
import HeaderNotifDropdown from "./notif-dropdown";
import HeaderSearch from "./search";
import HeaderUserDropdown from "./user-dropdown";

export default function HeaderComponent() {
  return (
    <div>
      <div className="navbar-bg"></div>
      <nav className="navbar navbar-expand-lg main-navbar">
        <HeaderSearch />
        <ul className="navbar-nav navbar-right">
          <HeaderMessageDropdown />
          <HeaderNotifDropdown />
          <HeaderUserDropdown />
        </ul>
      </nav>
    </div>
  );
}