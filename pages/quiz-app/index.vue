<template>
  <v-layout row justify-center align-center class="mt-3 mb-5">
    <v-flex xs8>
      <h1 class="display-1">Quiz App</h1>
      <div v-for="(question, index) in questions" :key="index">
        <question-card :id="index" :data="question" />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import QuestionCard from '@/components/question'
export default {
  components: { QuestionCard },
  data() {
    return {
      radios: '',
      display: 1,
      questions: {}
    }
  },
  created() {
    this.getQuestions()
  },
  methods: {
    getQuestions() {
      this.$axios
        .get(`https://test-4a9b8.firebaseio.com/quiz/questions.json`)
        .then(res => (this.questions = res.data))
    }
  }
}
</script>

<style>
.v-input__control {
  width: 100% !important;
}
</style>
