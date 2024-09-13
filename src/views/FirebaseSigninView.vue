<template>
  <div>
    <h1>Sign in</h1>
    <input type="text" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="signin" :disabled="loading">Sign in via Firebase</button>
    <p v-if="role">You are signed in as: {{ role }}</p>
    <p v-if="error" class="error">{{ error }}</p>
    <p v-if="loading">Signing in...</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const email = ref('')
const password = ref('')
const role = ref('')
const error = ref('')
const loading = ref(false)
const router = useRouter()
const auth = getAuth()
const db = getFirestore()

const signin = async () => {
  loading.value = true
  error.value = ''
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
    const user = userCredential.user
    const docRef = doc(db, 'users', user.uid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      role.value = docSnap.data().role
      console.log(`Signed in as ${role.value}`)

      if (role.value === 'admin') {
        router.push('/admin')
      } else {
        router.push('/dashboard')
      }
    } else {
      error.value = 'No such document!'
      console.log('No such document!')
    }
  } catch (err) {
    handleSignInError(err)
  } finally {
    loading.value = false
  }
}

const handleSignInError = (err) => {
  if (err.code === 'auth/quota-exceeded') {
    error.value = 'Quota exceeded for password verification. Please try again later.'
  } else if (err.code === 'auth/invalid-email') {
    error.value = 'Invalid email format. Please check your email.'
  } else if (err.code === 'auth/wrong-password') {
    error.value = 'Incorrect password. Please try again.'
  } else if (err.code === 'auth/user-not-found') {
    error.value = 'No user found with this email.'
  } else {
    error.value = 'Error during sign in: ' + err.message
  }
  console.log('Error during sign in:', err.message)
}
</script>

<style scoped>
input,
button {
  display: block;
  margin: 10px 0;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
