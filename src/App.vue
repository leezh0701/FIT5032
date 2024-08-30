<script setup>
<<<<<<< HEAD
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BHeader from './components/BHeader.vue'

const isAuthenticated = ref(localStorage.getItem('isAuthenticated') === 'true')
const router = useRouter()

const logout = () => {
  localStorage.removeItem('isAuthenticated')
  isAuthenticated.value = false
  router.push('/login')
}
</script>

<template>
  <div>
    <BHeader />
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button v-if="isAuthenticated" @click="logout">Logout</button>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
nav {
  padding: 10px;
  background-color: #f4f4f4;
  text-align: center;
}

button {
  margin-left: 10px;
  padding: 5px 10px;
}
</style>
=======
import JSON from './components/JSON.vue'
import Form from './components/Form.vue'
</script>

<template>
  <!--  <JSON />-->
  <!--  <JSONSolution /> -->
  <Form />
</template>
>>>>>>> week5
