<template>
  <div>
    <h1>Book Count Data</h1>
    <pre>{{ JSON.stringify(jsondata, null, 2) }}</pre>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      jsondata: null,
      error: null
    };
  },
  mounted() {
    this.getBookCountAPI();
  },
  methods: {
    async getBookCountAPI() {
      try {
        const response = await axios.get('https://your-api-url.com/countBooks');
        this.jsondata = response.data;
        this.error = null;
      } catch (error) {
        this.error = 'Failed to fetch book count. Please try again later.';
        this.jsondata = null;
      }
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

pre {
  background-color: #f5f5f5;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

p {
  color: red;
  font-size: 16px;
}
</style>
