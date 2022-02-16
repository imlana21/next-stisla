import Link from "next/link";
import { ReactChild, ReactFragment, ReactPortal } from "react";
import { UrlObject } from "url";
const listMenu = require('./menu.json');

export default function SidebarComponent() {
  const sidebarMenu = listMenu.map( (menu: { type: string; text: {} | null | undefined; menu: any[]; iconClass: string | undefined; }, i: any) => {
    if (menu.type == 'header') {
      return <li className="menu-header" key={`sidebar-${i}`}> { menu.text} </li>
    } else if (menu.type == 'dropdown') {
      const dropdownMenus = menu.menu?.map( (dropdownMenu: { url: string | UrlObject; text: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; class: string}, j: any) => {
        return (
          <li key={`dropdown-${j}`}>
            <Link href={dropdownMenu.url}>
              <a className={`nav-link ${dropdownMenu?.class}`}>
                {dropdownMenu.text}
              </a>
            </Link>
          </li>
        );
      });
      
      return (
        <li className="dropdown" key={`sidebar-${i}`}>
          <a href="javascript:void(0)" className="nav-link has-dropdown"><i
              className={menu.iconClass}></i><span> {menu.text} </span></a>
          <ul className="dropdown-menu">
            { dropdownMenus }
          </ul>
        </li>
      ) 
    }
  })

  return (
    <div>
      <div className="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <Link href="/dashboard/ecommerce">
              <a>
                Next Stisla
              </a>
            </Link>
          </div>
          <div className="sidebar-brand sidebar-brand-sm">
            <Link href="/dashboard/ecommerce">
              <a>
                Ns
              </a>
            </Link>
          </div>
          <ul className="sidebar-menu">
            { sidebarMenu }
          </ul>
        </aside>
      </div>
    </div>
  );
}