export default [
  {
    link: 'Dashboard',
    label: 'Dashboard',
    icon: 'fa-tachometer'
  },
  {
    label: 'Charts',
    icon: 'fa-bar-chart-o',
    expanded: true,
    subMenu: [
      {
        link: 'ChartJs',
        label: 'ChartJs'
      },
      {
        link: 'Chartist',
        label: 'Chartist'
      },
      {
        link: 'Peity',
        label: 'Peity'
      },
      {
        link: 'Plotly',
        label: 'Plotly'
      }
    ]
  },
  {
    label: 'UI Features',
    icon: 'fa-laptop',
    expanded: false,
    subMenu: [
      {
        link: 'Buttons',
        label: 'Buttons'
      },
      {
        link: 'Form',
        label: 'Form'
      },
      {
        link: 'Typography',
        label: 'Typography'
      },
      {
        link: 'Icons',
        label: 'Icons'
      },
      {
        link: 'Notifications',
        label: 'Notifications'
      },
      {
        link: 'Messages',
        label: 'Messages'
      },
      {
        link: 'Progress',
        label: 'Progress'
      }
    ]
  },
  {
    label: 'Tables',
    icon: 'fa-table',
    expanded: false,
    subMenu: [
      {
        link: 'BasicTables',
        label: 'Basic Tables'
      }
    ]
  }
]
