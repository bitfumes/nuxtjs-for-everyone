<template>
  <v-layout justify-center class="mt-3 mb-5">
    <v-flex xs8>
      <h1 class="display-1">Quiz App</h1>
      <v-card v-for="(item, index) in questions" :key="index" class="mt-4">
        <v-card-title class="deep-purple lighten-3 white--text">
          <h1 class="headline">{{ item.question }}</h1>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-radio-group v-model="choosen" row style="display:block">
              <v-radio
                :label="item.option1"
                color="green"
                :value="item.option1"
              ></v-radio>
              <v-spacer></v-spacer>
              <v-radio
                :label="item.option2"
                color="green"
                :value="item.option2"
              ></v-radio>
              <v-spacer></v-spacer>
              <v-radio
                :label="item.option3"
                color="green"
                :value="item.option3"
              ></v-radio>
              <v-spacer></v-spacer>
              <v-radio
                :label="item.option4"
                color="green"
                :value="item.option4"
              ></v-radio>
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
      choosen: '',
      questions: {}
    }
  },
  created() {
    this.getQuestions()
  },
  methods: {
    getQuestions() {
      this.$axios
        .get(`/questions.json`)
        .then(res => (this.questions = res.data))
    },
    handleAnswer() {
      console.log(this.choosen)
    }
  }
}
</script>

<style></style>
