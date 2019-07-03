<template>
  <v-card class="mt-4">
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
</template>

<script>
export default {
  props: {
    item: { type: Object, default: () => {} },
    id: { type: String, default: '' }
  },
  data() {
    return {
      choosen: '',
      result: null
    }
  },
  methods: {
    handleAnswer() {
      this.$axios
        .$get(
          `/answers.json?orderBy="question_id"&startAt="${this.id}"&endAt="${
            this.id
          }"`
        )
        .then(res => {
          const answer = Object.values(res)[0].answer
          this.verifyAnswer(answer)
        })
    },
    verifyAnswer(answer) {
      this.result = answer === this.choosen
    }
  }
}
</script>

<style></style>
