<template>
  <v-container>
    <v-layout>
      <v-flex xs8 offset-xs2>
        <v-card>
          <v-card-title>
            <h1 class="display-1">Add Question</h1>
            <v-spacer></v-spacer>
            <n-link to="/admin/questions">
              <v-btn small color="grey darken-2" dark>All Questions</v-btn>
            </n-link>
          </v-card-title>
          <v-card-text>
            <form @submit.prevent="store">
              <v-text-field
                v-model="quiz.question"
                label="Question"
                solo
              ></v-text-field>
              <v-text-field
                v-model="quiz.option1"
                label="Option 1"
                solo
              ></v-text-field>
              <v-text-field
                v-model="quiz.option2"
                label="Option 2"
                solo
              ></v-text-field>
              <v-text-field
                v-model="quiz.option3"
                label="Option 3"
                solo
              ></v-text-field>
              <v-text-field
                v-model="quiz.option4"
                label="Option 4"
                solo
              ></v-text-field>
              <v-flex>
                <v-radio-group v-model="correct" :mandatory="false" row>
                  <p class="mr-4">Choose Correct Answer</p>
                  <v-radio
                    clas="ml-4"
                    :value="quiz.option1"
                    label="Option 1"
                  ></v-radio>
                  <v-spacer></v-spacer>
                  <v-radio
                    clas="ml-4"
                    :value="quiz.option2"
                    label="Option 2"
                  ></v-radio>
                  <v-spacer></v-spacer>
                  <v-radio
                    clas="ml-4"
                    :value="quiz.option3"
                    label="Option 3"
                  ></v-radio>
                  <v-spacer></v-spacer>
                  <v-radio
                    clas="ml-4"
                    :value="quiz.option4"
                    label="Option 4"
                  ></v-radio>
                </v-radio-group>
                <v-btn class="indigo" block dark type="submit">Add</v-btn>
              </v-flex>
            </form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      quiz: {
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: ''
      },
      correct: ''
    }
  },
  methods: {
    store() {
      this.$axios
        .post(`https://nuxt-quiz.firebaseio.com/quiz/questions.json`, this.quiz)
        .then(res => {
          this.storeAnswer(res.data.name)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    storeAnswer(id) {
      this.$axios
        .post(`https://nuxt-quiz.firebaseio.com/quiz/answers.json`, {
          question_id: id,
          answer: this.correct
        })
        .then(result => {
          this.$router.push('/admin/questions')
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  }
}
</script>

<style></style>
