<template>
  <v-container>
    <v-layout>
      <v-flex xs8 offset-xs2>
        <v-card>
          <v-card-title>
            <h1 class="display-1">Add Questions</h1>
            <v-spacer></v-spacer>
            <n-link to="/admin/questions">
              <v-btn small color="grey darken-2" dark>All Questions</v-btn>
            </n-link>
          </v-card-title>
          <v-card-text>
            <form @submit.prevent="store">
              <v-flex xs12>
                <v-text-field
                  v-model="quiz.question"
                  label="Question"
                  single-line
                  solo
                ></v-text-field>
                <v-text-field
                  v-model="quiz.option1"
                  label="option 1"
                  single-line
                  solo
                ></v-text-field>
                <v-text-field
                  v-model="quiz.option2"
                  label="option 2"
                  single-line
                  solo
                ></v-text-field>
                <v-text-field
                  v-model="quiz.option3"
                  label="option 3"
                  single-line
                  solo
                ></v-text-field>
                <v-text-field
                  v-model="quiz.option4"
                  label="option 4"
                  single-line
                  solo
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-radio-group v-model="correct" :mandatory="false" row xs12>
                  <v-layout>
                    <p>
                      Correct Answer
                    </p>
                    <v-radio
                      class="ml-4"
                      label="Option 1"
                      :value="quiz.option1"
                    ></v-radio>
                    <v-spacer></v-spacer>
                    <v-radio label="Option 2" :value="quiz.option2"></v-radio>
                    <v-spacer></v-spacer>
                    <v-radio label="Option 3" :value="quiz.option3"></v-radio>
                    <v-spacer></v-spacer>
                    <v-radio label="Option 4" :value="quiz.option4"></v-radio>
                  </v-layout>
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
        .post(
          `https://test-4a9b8.firebaseio.com/quiz/questions.json`,
          this.quiz
        )
        .then(res => {
          this.$axios
            .post(`https://test-4a9b8.firebaseio.com/quiz/answers.json`, {
              question_id: res.data.name,
              answer: this.correct
            })
            .then(res => this.$router.push('/admin/questions'))
        })
    }
  }
}
</script>

<style></style>
