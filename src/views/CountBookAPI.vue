c050be314c695376d5b6e2c301698130
<template>
    <div>
      <h1>Book Count</h1>
      <p v-if="jsondata">Total Books: {{ jsondata.count }}</p> <!-- 显示书籍总数 -->
      <p v-if="error">{{ error }}</p> <!-- 如果有错误，显示错误信息 -->
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        jsondata: null, // 存储API返回的数据
        error: null,    // 存储错误信息
      };
    },
    mounted() {
      this.getBookCountAPI(); // 组件加载时调用API
    },
    methods: {
      async getBookCountAPI() {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Melbourne&appid=c050be314c695376d5b6e2c301698130`);

          this.jsondata = response.data;  // 将API响应存储到jsondata
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
  
  p {
    font-size: 18px;
    margin-top: 10px;
  }
  </style>
  