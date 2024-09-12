<template>
  <h1>Register</h1>
  <input type="text" placeholder="Email" v-model="email" />
  <input type="password" placeholder="Password" v-model="password" />
  <select v-model="role">
    <option value="user">User</option>
    <option value="admin">Admin</option>
  </select>
  <button @click="register">Register</button>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, setDoc } from 'firebase/firestore'

const email = ref('')
const password = ref('')
const role = ref('user')
const auth = getAuth()
const db = getFirestore()

const register = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
    const user = userCredential.user

    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      role: role.value
    })

    console.log('Registration successful with role:', role.value)
  } catch (error) {
    console.log('Error during registration:', error.message)
  }
}
</script>

<style scoped>
input,
select,
button {
  display: block;
  margin: 10px 0;
}
</style>
