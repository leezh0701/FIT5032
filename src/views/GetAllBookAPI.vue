<template>
    <div>
      <h1>Get All Books API</h1>
      <button @click="fetchBooks">Fetch Books</button>
      <div v-if="loading">Loading...</div>
      <div v-if="error" class="error">{{ error }}</div>
      <pre v-if="books">{{ books }}</pre>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup() {
      const books = ref(null)
      const loading = ref(false)
      const error = ref('')
  
      const fetchBooks = async () => {
        loading.value = true
        error.value = ''
        try {
          const response = await fetch('https://getallbooks-a34tkwxmaq-uc.a.run.app')
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          books.value = await response.json()
        } catch (err) {
          error.value = 'Error fetching books: ' + err.message
          console.error('Error fetching books:', err)
        } finally {
          loading.value = false
        }
      }
  
      return {
        books,
        loading,
        error,
        fetchBooks
      }
    }
  }
  </script>
  
  <style scoped>
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  