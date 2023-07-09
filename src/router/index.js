import { map } from 'lodash-es'
import { createRouter, createWebHistory } from 'vue-router'

export const routes = ['all', 'active', 'completed']

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'App',
      component: () => import('@/App.vue'),
      // children: [{ path: '/#all' }, { path: '/#active' }, { path: '/#completed' }]
      children: map(routes, (route) => {
        return { path: `/#${route}` }
      })
    }
  ]
})

export default router
