<template>
    <div class="container">
      <div class="header">
        <h1>WEATHER APP</h1>
      </div>
      <div class="search-bar">
        <input
          type="text"
          v-model="city"
          placeholder="Enter city name"
          class="search-input"
        />
        <button @click="searchByCity" class="search-button">Search</button>
      </div>
  
      <main>
        <div v-if="weatherData">
          <h2>{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
          <div>
            <img :src="iconUrl" alt="Weather Icon" />
            <p>{{ temperature }} °C</p>
          </div>
          <span>{{ weatherData.weather[0].description }}</span>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "WeatherView",
    data() {
      return {
        city: "",
        weatherData: null,
        hourlyForecast: [],
        dailyForecast: []
      };
    },
    computed: {
      temperature() {
        return this.weatherData ? Math.floor(this.weatherData.main.temp - 273) : null;
      },
      iconUrl() {
        return this.weatherData
          ? `http://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
          : null;
      }
    },
    methods: {
      async searchByCity() {
        const apikey = "c050be314c695376d5b6e2c301698130"; 
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apikey}`;
        await this.fetchWeatherData(url);
      },
      async fetchWeatherData(url) {
        try {
          const response = await axios.get(url);
          this.weatherData = response.data;
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      },
      async fetchCurrentLocationWeather() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const apikey = "c050be314c695376d5b6e2c301698130"; 
            const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
            await this.fetchWeatherData(url);
          });
        }
      }
    },
    mounted() {
      this.fetchCurrentLocationWeather();
    }
  };
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
    max-width: 600px;
    margin: auto;
  }
  .header {
    text-align: center;
  }
  .search-bar {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .search-input {
    padding: 10px;
    font-size: 16px;
    margin-right: 10px;
  }
  .search-button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  