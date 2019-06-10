<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <h1 class="Display-2">{{ course }}</h1>
      <input v-model="course" type="text" />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    course: {
      get() {
        return this.$store.getters.upperCaseCourse
      },
      set(value) {
        this.$store.commit('setCourse', value)
      }
    }
  }
}
</script>
