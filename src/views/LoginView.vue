<template>
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const username = ref('')
  const password = ref('')
  const errorMessage = ref('')
  const router = useRouter()
  
  const login = () => {
    if (username.value === 'admin' && password.value === 'password') {
      localStorage.setItem('isAuthenticated', 'true')
      router.push('/')
    } else {
      errorMessage.value = 'Invalid username or password'
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  