<template>
  <div class="book-list">
    <h2>Book List</h2>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.name }} - ISBN: {{ book.isbn }}
        <button @click="editBook(book)">Edit</button>
        <button @click="$emit('delete', book.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    books: {
      type: Array,
      required: true
    }
  },
  methods: {
    editBook(book) {
      const updatedData = { name: 'Updated Name', isbn: book.isbn + 1 } // 示例更新
      this.$emit('update', book.id, updatedData)
    }
  }
}
</script>

<style scoped>
.book-list {
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

button {
  margin-left: 10px;
}
</style>
