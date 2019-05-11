<template>
  <v-card class="mt-4">
    <v-card-title class="deep-purple lighten-3 white--text">
      <h1 class="headline">{{ data.question }} ?</h1>
    </v-card-title>
    <v-card-text class="">
      <v-layout row wrap justify-space-around>
        <v-container>
          <v-radio-group
            v-model="choosen"
            :mandatory="false"
            row
            xs12
            @click="clearResult"
          >
            <v-layout justify-space-around>
              <v-radio
                :label="data.option1"
                :color="anwerColor()"
                :value="data.option1"
              ></v-radio>
              <v-spacer></v-spacer>
              <v-radio
                :label="data.option2"
                :color="anwerColor()"
                :value="data.option2"
              ></v-radio>
              <v-spacer></v-spacer>
              <v-radio
                :label="data.option3"
                :color="anwerColor()"
                :value="data.option3"
              ></v-radio>
              <v-spacer></v-spacer>
              <v-radio
                :label="data.option4"
                :color="anwerColor()"
                :value="data.option4"
              ></v-radio>
            </v-layout>
          </v-radio-group>
          <v-layout>
            <v-btn
              color="purple darken-2"
              dark
              outline
              small
              @click="handleAnswer"
              >Submit</v-btn
            >
          </v-layout>
        </v-container>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    data: { type: Object, default: () => {} },
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
        .get(`https://test-4a9b8.firebaseio.com/quiz/answers.json`)
        .then(res => {
          const ans = Object.keys(res.data).filter(key => {
            return res.data[key].question_id === this.id
          })
          this.result = res.data[ans].answer === this.choosen
          if (this.result) {
            this.$notify({
              group: 'alert',
              type: 'success',
              title: 'Result',
              text: 'Yeahh Correct answer'
            })
          }
        })
    },
    anwerColor() {
      if (this.result === null) {
        return 'black'
      }
      return this.result ? 'green' : 'red'
    },
    clearResult() {
      console.log('asdf')

      this.result = null
    }
  }
}
</script>

<style></style>
