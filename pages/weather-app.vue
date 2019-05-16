<template>
  <v-container>
    <!-- <v-layout> -->
    <h1 class="display-1 text-xs-center">Weather App</h1>
    <v-flex xs12>
      <v-card color="blue-grey darken-2" dark>
        <v-card-text>Here is the card</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 class="mt-4">
      <v-form @submit.prevent="getWeatherInfo">
        <v-text-field
          v-model="city"
          label="Enter City Name"
          solo
        ></v-text-field>
      </v-form>
    </v-flex>
    <!-- </v-layout> -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      city: 'London',
      weather: {}
    }
  },
  created() {
    this.getWeatherInfo()
  },
  methods: {
    getWeatherInfo() {
      this.$axios
        .$get(
          `https://api.openweathermap.org/data/2.5/weather?q=${
            this.city
          }&appid=ddb956415e4c89646c1fe66f214ec94a`
        )
        .then(res => (this.weather = res))
    }
  }
}
</script>

<style></style>
