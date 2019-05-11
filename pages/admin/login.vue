<template>
  <v-container>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <v-card>
          <v-card-title>
            <h1 class="display-1">Admin Login</h1>
          </v-card-title>
          <v-card-text>
            <v-flex xs12>
              <v-text-field
                v-model="email"
                label="Email"
                single-line
                type="email"
                solo
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="password"
                single-line
                solo
              ></v-text-field>
              <v-btn class="indigo" block dark @click="login">Login</v-btn>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  middleware: 'guest',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$axios
        .$post(
          `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAX53wb-7cK4YMEuzqK31e8NQ6S_k453zc`,
          { email: this.email, password: this.password }
        )
        .then(res => this.handleToken(res.idToken))
    },
    handleToken(token) {
      this.$cookies.set('token', token)
      this.$router.push('/admin/questions')
    }
  }
}
</script>

<style></style>
