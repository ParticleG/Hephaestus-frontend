const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout'),
    children: [
      {path: '', redirect: '/dashboard'},
      {
        path: 'dashboard',
        components: {
          default: () => import('pages/Dashboard'),
          drawer: () => import('layouts/drawers/MainDrawer'),
          header: () => import('layouts/headers/MainHeader'),
        }
      },
      {
        path: 'designer',
        components: {
          default: () => import('pages/Designer'),
          drawer: () => import('layouts/drawers/MainDrawer'),
          header: () => import('layouts/headers/MainHeader'),
        }
      },
      {
        path: 'tuning',
        components: {
          default: () => import('pages/Tuning'),
          drawer: () => import('layouts/drawers/MainDrawer'),
          header: () => import('layouts/headers/MainHeader'),
        }
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
