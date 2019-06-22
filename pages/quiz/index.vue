<template>
  <v-layout justify-center class="mt-3 mb-5">
    <v-flex xs8>
      <h1 class="display-1">Quiz App</h1>
      <v-card class="mt-4">
        <v-card-title class="deep-purple lighten-3 white--text">
          <h1 class="headline">Question comes here</h1>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-radio-group v-model="choosen" row style="display:block">
              <v-radio label="Option 1" color="green" value="option1"></v-radio>
              <v-spacer></v-spacer>
              <v-radio label="Option 2" color="green" value="option2"></v-radio>
              <v-spacer></v-spacer>
              <v-radio label="Option 3" color="green" value="option3"></v-radio>
              <v-spacer></v-spacer>
              <v-radio label="Option 4" color="green" value="option4"></v-radio>
            </v-radio-group>
            <v-layout>
              <v-btn
                color="purple darken-2"
                dark
                small
                outline
                @click="handleAnswer"
                >Submit</v-btn
              >
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      choosen: ''
    }
  },
  methods: {
    handleAnswer() {
      console.log(this.choosen)
    }
  }
}
</script>

<style></style>
