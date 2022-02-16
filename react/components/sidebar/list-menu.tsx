export const listMenu = [
  {
    type: 'header',
    text: 'Dashboard'
  },
  {
    type: 'dropdown',
    // class: 'nav-link has-dropdown',
    text: 'Dashboard',
    url: 'javascript:void(0)',
    iconClass: 'fas fa-fire',
    menu: [
      {
        type: 'dropdown-menu',
        url: '/dashboard/general',
        text: 'General Dashboard'
      },
      {
        type: 'dropdown-menu',
        url: '/dashboard/ecommerce',
        text: 'Ecommerce Dashboard'
      }
    ]
  },
  {
    type: 'header',
    text: 'Starter'
  },
  {
    type: 'dropdown',
    // class: 'nav-link has-dropdown',
    text: 'Layout',
    url: 'javascript:void(0)',
    iconClass: 'fas fa-columns',
    menu: [
      {
        type: 'dropdown-menu',
        url: '/starter/layout/defaultLayout',
        text: 'Default Layout'
      },
    ]
  },
  {
    type: 'normal',
    text: 'Blank Page',
    iconClass: 'far fa-square',
    url: '/starter/blankPage'
  },
  {
    type: 'dropdown',
    // class: 'nav-link has-dropdown',
    text: 'Bootstrap',
    url: 'javascript:void(0)',
    iconClass: 'fas fa-th',
    menu: [
      {
        type: 'dropdown-menu',
        url: '/starter/bootstrap/alert',
        text: 'Alert'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/bootstrap/badge',
        text: 'Badge'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/bootstrap/breadcrumb',
        text: 'Breadcrumb'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/bootstrap/alert',
        text: 'Buttons'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/bootstrap/badge',
        text: 'Card'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/bootstrap/breadcrumb',
        text: 'Carousel'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/bootstrap/alert',
        text: 'Collapse'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/bootstrap/badge',
        text: 'Dropdown'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/bootstrap/breadcrumb',
        text: 'Form'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/bootstrap/badge',
        text: 'List Group'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/bootstrap/breadcrumb',
        text: 'Media Object'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/bootstrap/alert',
        text: 'Modal'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/bootstrap/badge',
        text: 'Nav'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/bootstrap/breadcrumb',
        text: 'Navbar'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/bootstrap/alert',
        text: 'Pagination'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/bootstrap/badge',
        text: 'Popover'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/bootstrap/breadcrumb',
        text: 'Progress'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/bootstrap/breadcrumb',
        text: 'Table'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/bootstrap/alert',
        text: 'Tooltip'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/bootstrap/badge',
        text: 'Typography'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/bootstrap/breadcrumb',
        text: 'Progress'
      },
    ]
  },
  {
    type: 'header',
    text: 'Stisla'
  },
  {
    type: 'dropdown',
    // class: 'nav-link has-dropdown',
    text: 'Components',
    url: 'javascript:void(0)',
    iconClass: 'fas fa-th-large',
    menu: [
      {
        type: 'dropdown-menu',
        url: '/starter/layout/defaultLayout',
        text: 'Article'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/layout/defaultLayout',
        class: 'beep-sidebar',
        text: 'Avatar'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/layout/defaultLayout',
        text: 'Chat Box'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/layout/defaultLayout',
        class: 'beep beep-sidebar',
        text: 'Empty State'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/layout/defaultLayout',
        text: 'Gallery'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/layout/defaultLayout',
        class: 'beep beep-sidebar',
        text: 'Hero'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/layout/defaultLayout',
        text: 'Multiple Upload'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/layout/defaultLayout',
        class: 'beep beep-sidebar',
        text: 'Pricing'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/layout/defaultLayout',
        text: 'Tab'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/layout/defaultLayout',
        text: 'Table'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/layout/defaultLayout',
        text: 'User'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/layout/defaultLayout',
        text: 'Wizard'
      },
    ]
  },
  {
    type: 'dropdown',
    // class: 'nav-link has-dropdown',
    text: 'Forms',
    url: 'javascript:void(0)',
    iconClass: 'far fa-file-alt',
    menu: [
      {
        type: 'dropdown-menu',
        url: '/starter/layout/defaultLayout',
        text: 'Advanced Form'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/layout/defaultLayout',
        text: 'Editor'
      },
      {
        type: 'dropdown-menu',
        url: '/starter/layout/defaultLayout',
        text: 'Validation'
      },
    ]
  },
]