<script setup>
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
  <div class="main-container">
    <header v-if="showHeader">
      <BHeader />
    </header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button v-if="isAuthenticated" @click="logout">Logout</button>
    </nav>
    <main class="main-box">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    showHeader() {
      return this.$route.name !== 'CountBookAPI';
    }
  }
};
</script>

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
