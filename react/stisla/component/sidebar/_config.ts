export const brand = "Next Stisla";

export const initialBrand = "NS";

export const listMenu = [
  {
    type: "header",
    text: "Dashboard"
  },
  {
    type: "dropdown",
    text: "Dashboard",
    iconClass: "fas fa-fire",
    menu: [
      {
        type: "dropdown-menu",
        url: "/stisla/dashboard/general",
        text: "General Dashboard"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/dashboard/ecommerce",
        text: "Ecommerce Dashboard"
      }
    ]
  },
  {
    type: "header",
    text: "Starter"
  },
  {
    type: "dropdown",
    text: "Layout",
    iconClass: "fas fa-columns",
    menu: [
      {
        type: "dropdown-menu",
        url: "/stisla/layouts/default",
        text: "Default Layout"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/layouts/transparent",
        text: "Transparent Sidebar"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/layouts/top-nav",
        text: "Top Navigation"
      }
    ]
  },
  {
    type: "normal",
    text: "Blank Page",
    iconClass: "far fa-square",
    url: "/stisla/blank-page"
  },
  {
    type: "dropdown",
    text: "Bootstrap",
    iconClass: "fas fa-th",
    menu: [
      {
        type: "dropdown-menu",
        url: "/stisla/bootstrap/alert",
        text: "Alert"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/bootstrap/badge",
        text: "Badge"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/bootstrap/breadcrumb",
        text: "Breadcrumb"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/bootstrap/alert",
        text: "Buttons"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/bootstrap/badge",
        text: "Card"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/bootstrap/breadcrumb",
        text: "Carousel"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/bootstrap/alert",
        text: "Collapse"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/bootstrap/badge",
        text: "Dropdown"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/bootstrap/breadcrumb",
        text: "Form"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/bootstrap/badge",
        text: "List Group"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/bootstrap/breadcrumb",
        text: "Media Object"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/bootstrap/alert",
        text: "Modal"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/bootstrap/badge",
        text: "Nav"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/bootstrap/breadcrumb",
        text: "Navbar"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/bootstrap/alert",
        text: "Pagination"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/bootstrap/badge",
        text: "Popover"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/bootstrap/breadcrumb",
        text: "Progress"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/bootstrap/breadcrumb",
        text: "Table"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/bootstrap/alert",
        text: "Tooltip"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/bootstrap/badge",
        text: "Typography"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/bootstrap/breadcrumb",
        text: "Progress"
      }
    ]
  },
  {
    type: "header",
    text: "Next Stisla"
  },
  {
    type: "dropdown",
    text: "Components",
    iconClass: "fas fa-th-large",
    menu: [
      {
        type: "dropdown-menu",
        url: "/stisla/component/article",
        text: "Article"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/component/avatar",
        class: "beep beep-sidebar",
        text: "Avatar"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/component/chatbox",
        text: "Chat Box"
      },
      {
        type: "dropdown-menu",
        url: "/stisla/component/empty-state",
        class: "beep beep-sidebar",
        text: "Empty State"
      },
      {
        type: "dropdown-menu",
        url: "/starter/layout/defaultLayout",
        text: "Gallery"
      },
      {
        type: "dropdown-menu",
        url: "/starter/layout/defaultLayout",
        class: "beep beep-sidebar",
        text: "Hero"
      },
      {
        type: "dropdown-menu",
        url: "/starter/layout/defaultLayout",
        text: "Multiple Upload"
      },
      {
        type: "dropdown-menu",
        url: "/starter/layout/defaultLayout",
        class: "beep beep-sidebar",
        text: "Pricing"
      },
      {
        type: "dropdown-menu",
        url: "/starter/layout/defaultLayout",
        text: "Tab"
      },
      {
        type: "dropdown-menu",
        url: "/starter/layout/defaultLayout",
        text: "Table"
      },
      {
        type: "dropdown-menu",
        url: "/starter/layout/defaultLayout",
        text: "User"
      },
      {
        type: "dropdown-menu",
        url: "/starter/layout/defaultLayout",
        text: "Wizard"
      }
    ]
  },
  {
    type: "dropdown",
    text: "Forms",
    iconClass: "far fa-file-alt",
    menu: [
      {
        type: "dropdown-menu",
        url: "/starter/layout/defaultLayout",
        text: "Advanced Form"
      },
      {
        type: "dropdown-menu",
        url: "/starter/layout/defaultLayout",
        text: "Editor"
      },
      {
        type: "dropdown-menu",
        url: "/starter/layout/defaultLayout",
        text: "Validation"
      }
    ]
  }
];