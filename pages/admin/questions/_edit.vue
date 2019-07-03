<template>
  <v-container>
    <v-layout>
      <v-flex xs8 offset-xs2>
        <v-card>
          <v-card-title>
            <h1 class="display-1">Edit Question</h1>
            <v-spacer></v-spacer>
            <n-link to="/admin/questions">
              <v-btn small color="grey darken-2" dark>Back</v-btn>
            </n-link>
          </v-card-title>
          <v-card-text>
            <form @submit.prevent="update">
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
                <v-btn class="indigo" block dark type="submit">Update</v-btn>
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
  middleware: 'auth',
  data() {
    return {
      quiz: {
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: ''
      },
      correct: '',
      answer_id: ''
    }
  },
  created() {
    this.get()
    this.getAnswer()
  },
  methods: {
    get() {
      this.$axios
        .get(`/questions.json`, this.$route.params.edit)
        .then(res => (this.quiz = res.data[this.$route.params.edit]))
        .catch(err => {
          console.log(err.response.data)
        })
    },
    update() {
      this.$axios
        .$patch(`/questions/${this.$route.params.edit}.json`, this.quiz)
        .then(res => this.updateAnswer())
    },
    getAnswer() {
      this.$axios
        .$get(
          `/answers.json?orderBy="question_id"&startAt="${
            this.$route.params.edit
          }"&endAt="${this.$route.params.edit}"`
        )
        .then(res => {
          this.correct = Object.values(res)[0].answer
          this.answer_id = Object.keys(res)[0]
        })
    },
    updateAnswer() {
      this.$axios
        .patch(`/answers/${this.answer_id}.json`, {
          question_id: this.$route.params.edit,
          answer: this.correct
        })
        .then(res => this.$router.push('/admin/questions'))
    }
  }
}
</script>

<style></style>
