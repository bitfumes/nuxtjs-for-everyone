<template>
  <v-app>
    <v-content>
      <v-toolbar color="indigo" dark>
        <v-toolbar-title>
          <n-link to="/">Learning Nuxt</n-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat>
          <v-toolbar-items class="hidden-sm-and-down">
            <n-link to="/weather-app">Weather App</n-link>
          </v-toolbar-items>
        </v-btn>
      </v-toolbar>
      <nuxt />
      <v-footer class="pa-3" fixed color="teal" dark>
        <v-spacer></v-spacer>
        <div>&copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
export default {}
</script>

<style>
a {
  text-decoration: none;
  color: white;
}
</style>
