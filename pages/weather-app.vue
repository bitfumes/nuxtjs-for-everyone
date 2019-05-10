<template>
  <v-layout row justify-center align-center class="mt-3 text-xs-center">
    <v-flex xs10>
      <h1 class="display-1">Weather App</h1>
      <v-card color="blue-grey darken-2" dark>
        <v-card-text v-if="weather.wind">
          <v-layout>
            <v-flex xs4>
              <h4>Temperature</h4>
              <h1 class="display-1">{{ weather.name }}</h1>
              <img :src="icon" width="100" />
              <p>
                <span class="display-1">{{ temp() }} &#176;C</span>
                <span class="caption ml-4">
                  {{ weather.weather[0].description }}
                </span>
              </p>
            </v-flex>
            <v-flex xs4>
              <h4>Wind & Pressure:</h4>
              <h3 class="headline mt-4">
                Wind: {{ speed() }} ({{ weather.wind.deg }})
              </h3>
              <h3 class="headline mt-4">
                Humiidy :{{ weather.main.humidity }} %
              </h3>
              <h3 class="headline mt-4">
                Pressure :{{ weather.main.pressure }} hPa
              </h3>
            </v-flex>
            <v-flex xs4>
              <h4>Other:</h4>
              <h3 class="headline mt-4">
                Max Temperature :{{ Math.round(weather.main.temp_max - 273) }}
                &#176;C
              </h3>
              <h3 class="headline mt-4">
                Min Temperature :{{ Math.round(weather.main.temp_min - 273) }}
                &#176;C
              </h3>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
      <form @submit.prevent="getWeather">
        <v-text-field
          v-model="city"
          placeholder="Enter City to search"
          solo
          class="mt-4"
        />
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
const moment = require('moment')
export default {
  data() {
    return {
      weather: {},
      city: 'bhopal'
    }
  },
  computed: {
    icon() {
      return this.weather.weather
        ? `http://openweathermap.org/img/w/${this.weather.weather[0].icon}.png`
        : ''
    }
  },
  created() {
    this.getWeather()
  },
  methods: {
    getWeather() {
      this.$axios
        .$get(
          `https://api.openweathermap.org/data/2.5/weather?q=${
            this.city
          }&appid=ddb956415e4c89646c1fe66f214ec94a`
        )
        .then(res => {
          this.weather = res
          this.city = ''
        })
    },
    temp() {
      return this.weather.main ? Math.round(this.weather.main.temp - 273) : 0
    },
    speed() {
      return this.weather.wind ? `${this.weather.wind.speed} m/s` : 0
    },
    formatTime(unixCode) {
      return moment().format('hh:mm a')
    }
  }
}
</script>
