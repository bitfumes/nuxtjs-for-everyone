<template>
  <v-app>
    <v-content>
      <v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Learning Nuxt</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>
            <n-link to="/">Home</n-link>
          </v-btn>
          <v-btn flat>
            <n-link to="/about">About</n-link>
          </v-btn>
          <v-btn flat>
            <n-link to="/inspire">Inspire</n-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <transition>
        <nuxt />
      </transition>
    </v-content>
  </v-app>
</template>

<script>
export default {}
</script>

<style></style>
