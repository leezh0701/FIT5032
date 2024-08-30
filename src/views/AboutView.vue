<template>
  <div class="container">
    <div class="about">
      <h1>About Our Library</h1>
      <p>
        Welcome to our digital library! We're dedicated to providing a vast collection of books and
        resources to our community.
      </p>
      <button @click="logout" class="logout-button">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('isAuthenticated')
  router.push('/login')
}
</script>

<style scoped>
.about {
  text-align: center;
}

.logout-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.logout-button:hover {
  background-color: #d32f2f;
}
</style>
