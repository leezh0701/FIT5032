// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import UserDashboard from '../views/UserDashboard.vue'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'

import { auth, db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import AboutView from '@/views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    meta: { requiresAuth: true, role: 'admin' }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: UserDashboard,
    meta: { requiresAuth: true, role: 'user' }
  },
  {
    path: '/Firelogin',
    name: 'firelogin',
    component: FirebaseSigninView
  },
  {
    path: '/login',
    name: 'login',
    component: FirebaseSigninView
  },
  {
    path: '/register',
    name: 'register',
    component: FirebaseRegisterView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const user = auth.currentUser

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!user) {
      next({ name: 'login' })
    } else {
      getDoc(doc(db, 'users', user.uid))
        .then((docSnap) => {
          if (docSnap.exists()) {
            const userRole = docSnap.data().role
            if (to.meta.role && to.meta.role !== userRole) {
              next({ name: 'home' })
            } else {
              next()
            }
          } else {
            next({ name: 'login' })
          }
        })
        .catch((error) => {
          console.error('Error fetching user role:', error)
          next({ name: 'login' })
        })
    }
  } else {
    next()
  }
})

export default router
