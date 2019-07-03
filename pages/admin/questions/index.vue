<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h1 class="display-1">All Questions</h1>
            <v-spacer></v-spacer>
            <n-link to="/admin/questions/create">
              <v-btn small color="grey darken-2" dark>Add</v-btn>
            </n-link>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="questions"
              class="elevation-1"
            >
              <template v-slot:items="props">
                <td class="text-xs-left">{{ props.item.question }}</td>
                <td class="text-xs-left">{{ props.item.option1 }}</td>
                <td class="text-xs-left">{{ props.item.option2 }}</td>
                <td class="text-xs-left">{{ props.item.option3 }}</td>
                <td class="text-xs-left">{{ props.item.option4 }}</td>
                <td class="text-xs-center">
                  <v-icon small @click="destroy(props.item.id)">delete</v-icon>
                  <n-link :to="`/admin/questions/${props.item.id}`">
                    <v-icon small color="orange">edit</v-icon>
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
  middleware: 'auth',
  data() {
    return {
      headers: [
        { text: 'Question', value: 'question' },
        { text: 'Option 1', value: 'option1' },
        { text: 'Option 2', value: 'option2' },
        { text: 'Option 3', value: 'option3' },
        { text: 'Option 4', value: 'option4' },
        { text: 'Action', value: 'action' }
      ],
      questions: []
    }
  },
  created() {
    this.fetchQuestions()
  },
  methods: {
    fetchQuestions() {
      this.$axios.get(`/questions.json`).then(
        res =>
          (this.questions = Object.keys(res.data).map((key, index) => {
            res.data[key].id = key
            return res.data[key]
          }))
      )
    },
    destroy(key) {
      this.$axios.delete(`/questions/${key}.json`).then(res => {
        this.fetchAnswer(key)
      })
    },
    fetchAnswer(key) {
      this.$axios
        .get(
          `/answers.json?orderBy="question_id"&startAt="${key}"&endAt="${key}"`
        )
        .then(res => this.destroyAnswer(key, Object.keys(res.data)[0]))
    },
    destroyAnswer(key, answerId) {
      this.$axios
        .delete(`/answers/${answerId}.json`)
        .then(res => this.questions.splice(this.questions[key]))
    }
  }
}
</script>

<style></style>
