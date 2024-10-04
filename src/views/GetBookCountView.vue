<template>
  <div id="app">
    <h1>Book Counter</h1>
    <button @click="getBookCount">Get Book Count</button>

    <!-- Display total count if available, otherwise show error -->
    <p v-if="count !== null">Total number of books: {{ count }}</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      count: null, // Book count
      error: null, // Error message if API request fails
    };
  },
  methods: {
    async getBookCount() {
      try {
        // Clear previous values
        this.count = null;
        this.error = null;

        // Make the API call to get the book count (replace with actual URL)
        const response = await axios.get('https://countbooks-hxg5pqiaoa-uc.a.run.app'); // Make sure to replace this URL

        // Assuming the API response has a 'count' property
        this.count = response.data.count;
      } catch (error) {
        console.error('Error fetching book count:', error);
        this.error = 'Failed to get the book count'; // Display error message
        this.count = null; // Clear count on error
      }
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
