<template>
  <div>
    <pre>{{ jsondata }}</pre>
    <div v-if="error" class="error">
      Error: {{ error.message }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      jsondata: null,
      error: null,
    };
  },
  async mounted() {
    await this.getBookCountAPI();
  },
  methods: {
    async getBookCountAPI() {
      try {
        const response = await axios.get('https://countbooks-a34tkwxmaq-uc.a.run.app');
        this.jsondata = response.data;
        this.error = null;
      } catch (error) {
        console.error('Error fetching book count:', error);
        this.error = error;
        this.jsondata = null;
      }
    }
  },
};
</script>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}
</style>
