<template>
  <div class="container">
    <div class="about">
      <h1>About Our Library</h1>
      <p>
        Welcome to our digital library! We're dedicated to providing a vast collection of books and
        resources to our community.
      </p>
      <p v-if="userEmail">You are logged in as: {{ userEmail }}</p>
      <button @click="logout" class="logout-button">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, signOut } from 'firebase/auth'

const router = useRouter()
const auth = getAuth()
const userEmail = ref('')

onMounted(() => {
  const user = auth.currentUser
  if (user) {
    userEmail.value = user.email
    console.log('Current user:', user)
  } else {
    console.log('No user is currently logged in.')
  }
})

const logout = async () => {
  try {
    await signOut(auth)
    localStorage.removeItem('isAuthenticated')
    router.push('/login')
    console.log('User signed out successfully.')
  } catch (error) {
    console.error('Error signing out:', error.message)
  }
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
