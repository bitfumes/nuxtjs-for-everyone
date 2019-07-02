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
                  <v-icon small>delete</v-icon>
                  <v-icon small color="orange">edit</v-icon>
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
      this.$axios
        .get(`https://nuxt-quiz.firebaseio.com/quiz/questions.json`)
        .then(
          res =>
            (this.questions = Object.keys(res.data).map((key, index) => {
              res.data[key].id = key
              return res.data[key]
            }))
        )
    }
  }
}
</script>

<style></style>
