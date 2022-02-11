import Link from "next/link"

export default function SidebarComponent() {
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
            <li className="menu-header">Dashboard</li>
            <li className="dropdown">
              <a href="javascript:void(0)" className="nav-link has-dropdown"
                ><i className="fas fa-fire"></i><span>Dashboard</span></a
              >
              <ul className="dropdown-menu">
                <li className="menu('generalDashboard')">
                  <Link href="/dashboard/general">
                    <a className="nav-link">
                      General Dashboard
                    </a>
                  </Link>
                </li>
                <li className="menu('ecommerceDashboard')">
                  <Link href="/dashboard/ecommerce">
                    <a className="nav-link">
                      Ecommerce Dashboard
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-header">Starter</li>
            <li className="dropdown">
              <a
                href="javascript:void(0)"
                className="nav-link has-dropdown"
                data-toggle="dropdown"
                ><i className="fas fa-columns"></i> <span>Layout</span></a
              >
              <ul className="dropdown-menu">
                <li className="menu('defaultLayout')">
                  <Link href="/starter/layout/defaultLayout">
                    <a className="nav-link">
                      Default Layout
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu('blankPage')">
              <Link href="/starter/blankPage">
                <a className="nav-link">
                  <i className="far fa-square"></i> 
                  <span>Blank Page</span>
                </a>
              </Link
              >
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)" className="nav-link has-dropdown"
                ><i className="fas fa-th"></i> <span>Bootstrap</span></a
              >
              <ul className="dropdown-menu">
                <li className="menu('alert')">
                  <Link href="/starter/bootstrap/alert">
                    <a className="nav-link">
                      Alert
                    </a>
                  </Link>
                </li>
                <li className="menu('badge')">
                  <Link href="/starter/bootstrap/badge">
                    <a className="nav-link">
                      Badge
                    </a>
                  </Link>
                </li>
                <li className="menu('breadcrumb')">
                  <Link href="/starter/bootstrap/breadcrumb">
                    <a className="nav-link" >
                      Breadcrumb
                    </a>
                  </Link>
                </li>
                <li className="menu('buttons')">
                  <Link href="/starter/bootstrap/buttons">
                    <a className="nav-link">
                      Buttons
                    </a>
                  </Link>
                </li>
                <li className="menu('card')">
                  <Link href="/starter/bootstrap/card">
                    <a className="nav-link">
                      Card
                    </a>
                  </Link>
                </li>
                <li className="menu('carousel')">
                  <Link href="/starter/bootstrap/carousel">
                    <a className="nav-link">
                      Carousel
                    </a>
                  </Link>
                </li>
                <li className="menu('collapse')">
                  <Link href="/starter/bootstrap/collapse">
                    <a className="nav-link">
                      Collapse
                    </a>
                  </Link>
                </li>
                <li className="menu('dropdown')">
                  <Link href="/starter/bootstrap/dropdown">
                    <a className="nav-link">
                      Dropdown
                    </a>
                  </Link>
                </li>
                <li className="menu('form')">
                  <Link href="/starter/bootstrap/form">
                    <a className="nav-link">
                      Form
                    </a>
                  </Link>
                </li>
                <li className="menu('listGroup')">
                  <Link href="/starter/bootstrap/listGroup">
                    <a className="nav-link">
                      List Group
                    </a>
                  </Link>
                </li>
                <li className="menu('mediaObject')">
                  <Link href="/starter/bootstrap/mediaObject">
                    <a className="nav-link">
                      Media Object
                    </a>
                  </Link>
                </li>
                <li className="menu('modal')">
                  <Link href="/starter/bootstrap/modal">
                    <a className="nav-link">
                      Modal
                    </a>
                  </Link>
                </li>
                <li className="menu('nav')">
                  <Link href="/starter/bootstrap/nav">
                    <a className="nav-link">
                      Nav
                    </a>
                  </Link>
                </li>
                <li className="menu('navbar')">
                  <Link href="/starter/bootstrap/navbar">
                    <a className="nav-link">
                      Navbar
                    </a>
                  </Link>
                </li>
                <li className="menu('pagination')">
                  <Link href="/starter/bootstrap/pagination">
                    <a className="nav-link">
                      Pagination
                    </a>
                  </Link>
                </li>
                <li className="menu('popover')">
                  <Link href="/starter/bootstrap/popover">
                    <a className="nav-link">
                      Popover
                    </a>
                  </Link>
                </li>
                <li className="menu('progress')">
                  <Link href="/starter/bootstrap/progress">
                    <a className="nav-link">
                      Progress
                    </a>
                  </Link>
                </li>
                <li className="menu('table')">
                  <Link href="/starter/bootstrap/table">
                    <a className="nav-link">
                      Table
                    </a>
                  </Link>
                </li>
                <li className="menu('tooltip')">
                  <Link href="/starter/bootstrap/tooltip">
                    <a className="nav-link">
                      Tooltip
                    </a>
                  </Link>
                </li>
                <li className="menu('typography')">
                  <Link href="/starter/bootstrap/typography">
                    <a className="nav-link">
                      Typography
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-header">Stisla</li>
            <li className="dropdown menu('components')">
              <a href="javascript:void(0)" className="nav-link has-dropdown"
                ><i className="fas fa-th-large"></i> <span>Components</span></a
              >
              <ul className="dropdown-menu">
                <li className="menu('article')">
                  <Link href="/stisla/components/article">
                    <a className="nav-link">
                      Article
                    </a>
                  </Link>
                </li>
                <li className="menu('avatar')">
                  <Link href="/stisla/components/avatar">
                    <a className="nav-link beep-sidebar">
                      Avatar
                    </a>
                  </Link>
                </li>
                <li className="menu('chatBox')">
                  <Link href="/stisla/components/chatBox">
                    <a className="nav-link">
                      Chat Box
                    </a>
                  </Link>
                </li>
                <li className="menu('emptyState')">
                  <Link href="/stisla/components/emptyState">
                    <a className="nav-link beep beep-sidebar">
                      Empty State
                    </a>
                  </Link>
                </li>
                <li className="menu('gallery')">
                  <Link href="/stisla/components/gallery">
                    <a className="nav-link">
                      Gallery
                    </a>
                  </Link>
                </li>
                <li className="menu('hero')">
                  <Link href="/stisla/components/hero">
                    <a className="nav-link beep beep-sidebar">
                      Hero
                    </a>
                  </Link>
                </li>
                <li className="menu('multipleUpload')">
                  <Link href="/stisla/components/multipleUpload">
                    <a className="nav-link">
                      Multiple Upload
                    </a>
                  </Link>
                </li>
                <li className="menu('pricing')">
                  <Link href="/stisla/components/pricing">
                    <a className="nav-link beep beep-sidebar">
                      Pricing
                    </a>
                  </Link>
                </li>
                <li className="menu('tab')">
                  <Link href="/stisla/components/tab">
                    <a className="nav-link">
                      Tab
                    </a>
                  </Link>
                </li>
                <li className="menu('table')">
                  <Link href="/stisla/components/table">
                    <a className="nav-link">
                      Table
                    </a>
                  </Link>
                </li>
                <li className="menu('user')">
                  <Link href="/stisla/components/user">
                    <a className="nav-link">
                      User
                    </a>
                  </Link>
                </li>
                <li className="menu('wizard')">
                  <Link href="/stisla/components/wizard">
                    <a className="nav-link beep beep-sidebar">
                      Wizard
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown menu('forms')">
              <a href="javascript:void(0)" className="nav-link has-dropdown"
                ><i className="far fa-file-alt"></i> <span>Forms</span></a
              >
              <ul className="dropdown-menu">
                <li className="menu('advancedForm')">
                  <Link href="/stisla/forms/advancedForm">
                    <a className="nav-link">
                      Advanced Form
                    </a>
                  </Link>
                </li>
                <li className="menu('editor')">
                  <Link href="/stisla/forms/editor">
                    <a className="nav-link">
                      Editor
                    </a>
                  </Link>
                </li>
                <li className="menu('validation')">
                  <Link href="/stisla/forms/validation">
                    <a className="nav-link">
                      Validation
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}