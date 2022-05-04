const routes = [
  { path: '', name: 'Init', component: () => import('pages/login/InitPage.vue') },

  { path: '/login', name: 'login', component: () => import('pages/login/LoginPage.vue') },

  {
    path: '/',
    component: () => import('src/layouts/PrincipalLayout.vue'),
    children: [
      { path: 'home', name: 'home', component: () => import('src/pages/users/MainPage.vue') },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/',
    component: () => import('src/layouts/PrincipalLayout.vue'),
    children: [
      { path: 'profile', name: 'profile', component: () => import('pages/users/ProfilePage.vue') },
      { path: 'content/:key', name: 'content', component: () => import('pages/users/contentsPage.vue') },
      { path: 'editar-senha', name: 'editar-senha', component: () => import('pages/users/EditarSenha.vue') },
      { path: 'meus-dados', name: 'meus-dados', component: () => import('pages/users/MeusDados.vue') },
      { path: 'explore', name: 'explore', component: () => import('pages/users/ExplorePage.vue') },
      { path: 'favorite', name: 'favorite', component: () => import('pages/users/FavoritePage.vue') },
      { path: '/approach/:id', name: 'approach', component: () => import('pages/users/ApproachPage.vue') },
      { path: 'note', name: 'note', component: () => import('pages/users/NotePage.vue') },
      { path: 'accesso-por-capitulo', name: 'accesso-por-capitulo', component: () => import('pages/users/AccessoPorCapituloPage.vue') },
    ],
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: '/',
    component: () => import('src/layouts/ApproachDetalhesLayout.vue'),
    children: [
      { path: '/approach-detail/:id', name: 'approach-detail', component: () => import('pages/users/ApproachDetailPage.vue') },
    ],
    meta: {
      requaresAuth: true,
    },
  },

  {
    path: '/codigo-acesso',
    name: 'codigo-acesso',
    component: () => import('src/layouts/CodigoDeAcessoLayout.vue'),
    meta: {
      requaresAuth: true,
    },
  },

  {
    path: '/register',
    component: () => import('src/layouts/RegisterLayout.vue'),
    children: [
      { path: '', name: 'register', component: () => import('src/pages/register/FirstStepPage.vue') },
      { path: '/second', name: 'second', component: () => import('src/pages/register/SecondStepPage.vue') },
      { path: '/third', name: 'third', component: () => import('src/pages/register/ThirdStepPage.vue') },
      { path: '/concluido', name: 'concluido', component: () => import('src/pages/register/ConcluidoPage.vue') },
      { path: '/email-confirmation', name: 'email-confirmation', component: () => import('src/pages/register/EmailConfirmation.vue') },
      { path: '/registerPage', name: 'registerPage', component: () => import('src/pages/register/RegisterPage.vue') },
    ],
  },

  {
    path: '/',
    component: () => import('src/layouts/PrimeLayout.vue'),
    children: [
      { path: '', name: 'prime', component: () => import('src/pages/users/PrimePage.vue') },
    ],
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: '/admin',
    component: () => import('src/layouts/AdminLayout.vue'),
    children: [
      { path: '', name: 'inicio', component: () => import('src/pages/admins/DashboardPage.vue') },
      { path: 'painel', name: 'painel', component: () => import('src/pages/admins/DashboardPage.vue') },
      { path: '/admin/approaches', name: 'approaches', component: () => import('src/pages/admins/approach/ApproachesListPage.vue') },
      { path: '/admin/categories', name: 'categories', component: () => import('src/pages/admins/category/CategoriesListPage.vue') },
      { path: '/admin/topics', name: 'topics', component: () => import('src/pages/admins/topic/TopicsListPage.vue') },
      { path: '/admin/users', name: 'users', component: () => import('src/pages/admins/user/UsersListPage.vue') },
      { path: '/admin/colaboradores', name: 'admin', component: () => import('src/pages/admins/user/UserAdminListPage.vue') },
      { path: '/admin/tipos-De-Abordagens', name: 'tipos-De-Abordagens', component: () => import('src/pages/admins/approach-type/TiposDeAbordagensListPage.vue') },
      { path: '/admin/occupation-areas', name: 'occupation-areas', component: () => import('src/pages/admins/occupation-area/OccupationAreasListPage.vue') },
      { path: '/sobreApp', name: 'sobreApp', component: () => import('src/pages/admins/SobreAppPage.vue') },
    ],
    meta: {
      requaresAuth: true,
    },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
