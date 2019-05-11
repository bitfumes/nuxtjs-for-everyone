<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h1 class="display-1">All Questions</h1>
            <v-spacer></v-spacer>
            <n-link to="/admin/questions/create">
              <v-btn small color="grey darken-2" dark>Add New</v-btn>
            </n-link>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="questions"
              disable-initial-sort
              class="elevation-1"
            >
              <template v-slot:items="props">
                <td>{{ props.item.question }}</td>
                <td>{{ props.item.option1 }}</td>
                <td>{{ props.item.option2 }}</td>
                <td>{{ props.item.option3 }}</td>
                <td>{{ props.item.option4 }}</td>
                <td>
                  <v-icon small @click="destroy(props.item.id)">delete</v-icon>
                  <n-link :to="`/admin/questions/${props.item.id}`">
                    <v-icon color="orange" small>edit</v-icon>
                  </n-link>
                </td>
              </template>
            </v-data-table>
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
      questions: [],
      headers: [
        { text: 'Question', value: 'question' },
        { text: 'Option 1', value: 'option1' },
        { text: 'Option 2', value: 'option2' },
        { text: 'Option 3', value: 'option3' },
        { text: 'Option 4', value: 'option4' },
        { text: 'Correct', value: 'correct' }
      ]
    }
  },
  created() {
    this.get()
  },
  methods: {
    get() {
      this.$axios
        .get(`https://test-4a9b8.firebaseio.com/quiz/questions.json`, {
          orderBy: 'question',
          startAt: 2
        })
        .then(
          res =>
            (this.questions = Object.keys(res.data).map((key, index) => {
              res.data[key].id = key
              return res.data[key]
            }))
        )
    },
    update(id) {
      this.$axios
        .patch(
          `https://test-4a9b8.firebaseio.com/quiz/questions/${id}.json`,
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
    },
    destroy(id) {
      this.$axios
        .get(
          `https://test-4a9b8.firebaseio.com/quiz/answers.json?orderBy="question_id"&startAt="${id}"&endAt="${id}"`
        )
        .then(res => {
          const answerId = Object.keys(res.data)[0]
          this.$axios
            .delete(
              `https://test-4a9b8.firebaseio.com/quiz/questions/${id}.json`
            )
            .then(res => this.questions.splice(this.questions[id]))
          this.$axios
            .delete(
              `https://test-4a9b8.firebaseio.com/quiz/answers/${answerId}.json`
            )
            .then(res => console.log(res))
        })
    }
  }
}
</script>

<style></style>
