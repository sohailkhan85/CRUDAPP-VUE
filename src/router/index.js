import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentView from '../views/students/view.vue'
import StudentCreate from '../views/students/create.vue'
import StudentEdit from '../views/students/edit.vue'
import TestForm from '../views/students/test.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/students',
      name: 'students',
      component: StudentView
    },
    
    {
      path: '/students/create',
      name: 'studentCreate',
      component: StudentCreate
    },
    {
      path: '/students/:id/edit',
      name: 'StudentEdit',
      component: StudentEdit
    },
    {
      path: '/students/test',
      name: 'testForm',
      component: TestForm
    },
    
  ]
})

export default router
