<template>
  <v-app>
    <v-content>
      <no-ssr>
        <notifications group="alert" position="top left" />
      </no-ssr>
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
        <v-btn flat>
          <v-toolbar-items class="hidden-sm-and-down">
            <n-link to="/quiz-app">Quiz App</n-link>
          </v-toolbar-items>
        </v-btn>
      </v-toolbar>
      <nuxt />
      <v-footer class="pa-3 mt-4" fixed color="teal" dark>
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
.vue-notification {
  font-size: 19px !important;

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #e54d42;
    border-left-color: #b82e24;
  }
  &.success {
    background: #035e1e !important;
    border-left-color: #42a85f;
  }
}
</style>
