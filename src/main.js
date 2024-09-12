import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import { initializeApp, getApps, getApp } from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAkNVnm2DghSPvyBBadHTyqDzx4pfZVMJ8',
  authDomain: 'week7-zhehao.firebaseapp.com',
  projectId: 'week7-zhehao',
  storageBucket: 'week7-zhehao.appspot.com',
  messagingSenderId: '767616431045',
  appId: '1:767616431045:web:8684729c983b25f45551ac'
}

if (!getApps().length) {
  initializeApp(firebaseConfig)
} else {
  getApp()
}

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')
