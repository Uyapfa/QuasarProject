const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'piechart', component: () => import('components/charts/PieChart.vue') },
      { path: 'bargraph', component: () => import('components/charts/BarGraph.vue') },
      { path: 'users', component: () => import('components/UsersTable.vue') },
      { path: 'addusers', component: () => import('components/AddUser.vue') }
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
