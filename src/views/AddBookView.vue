<template>
  <div>
    <h1>Add Book</h1>
    <form @submit.prevent="addBook">
      <div>
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" required />
      </div>
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <button type="submit">Add Book</button>
    </form>

    <div v-if="loading">Loading books...</div>
    <BookList :books="books" @update="updateBook" @delete="deleteBook" />
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import db from '../firebase/init.js'
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore'

import BookList from '../components/BookList.vue'

export default {
  setup() {
    const isbn = ref('')
    const name = ref('')
    const books = ref([])
    const loading = ref(false)
    const error = ref('')

    const addBook = async () => {
      try {
        error.value = ''
        const isbnNumber = Number(isbn.value)
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number')
          return
        }

        await addDoc(collection(db, 'books'), {
          isbn: isbnNumber,
          name: name.value
        })
        isbn.value = ''
        name.value = ''
        alert('Book added successfully!')
        fetchBooks()
      } catch (err) {
        error.value = 'Error adding book: ' + err.message
        console.error('Error adding book: ', err)
      }
    }

    const fetchBooks = async () => {
      try {
        loading.value = true
        error.value = ''
        const q = query(
          collection(db, 'books'),
          where('isbn', '>', 1000),
          orderBy('isbn', 'desc'),
          limit(5)
        )
        const querySnapshot = await getDocs(q)
        const booksArray = []
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() })
        })
        books.value = booksArray
      } catch (err) {
        error.value = 'Error fetching books: ' + err.message
        console.error('Error fetching books: ', err)
      } finally {
        loading.value = false
      }
    }

    const updateBook = async (bookId, updatedData) => {
      try {
        error.value = ''
        const bookRef = doc(db, 'books', bookId)
        await updateDoc(bookRef, updatedData)
        alert('Book updated successfully!')
        fetchBooks()
      } catch (err) {
        error.value = 'Error updating book: ' + err.message
        console.error('Error updating book: ', err)
      }
    }

    const deleteBook = async (bookId) => {
      try {
        error.value = ''
        const bookRef = doc(db, 'books', bookId)
        await deleteDoc(bookRef)
        alert('Book deleted successfully!')
        fetchBooks()
      } catch (err) {
        error.value = 'Error deleting book: ' + err.message
        console.error('Error deleting book: ', err)
      }
    }

    onMounted(() => {
      fetchBooks()
    })

    return {
      isbn,
      name,
      addBook,
      books,
      updateBook,
      deleteBook,
      loading,
      error
    }
  },
  components: {
    BookList
  }
}
</script>

<style scoped>
.error {
  color: red;
  margin-top: 10px;
}

form {
  margin-bottom: 20px;
}

button {
  margin-top: 10px;
}
</style>
