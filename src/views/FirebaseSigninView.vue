<template>
  <h1>Sign in</h1>
  <input type="text" placeholder="Email" v-model="email" />
  <input type="password" placeholder="Password" v-model="password" />
  <button @click="signin">Sign in via Firebase</button>
  <p v-if="role">You are signed in as: {{ role }}</p>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const email = ref('')
const password = ref('')
const role = ref('')
const router = useRouter()
const auth = getAuth()
const db = getFirestore()

const signin = async () => {
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
      console.log('No such document!')
    }
  } catch (error) {
    console.log('Error during sign in:', error.message)
  }
}
</script>

<style scoped>
input,
button {
  display: block;
  margin: 10px 0;
}
</style>
