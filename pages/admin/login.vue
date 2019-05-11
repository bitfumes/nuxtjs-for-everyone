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
                label="Email"
                single-line
                type="email"
                solo
              ></v-text-field>
              <v-text-field label="password" single-line solo></v-text-field>
              <v-btn class="indigo" block dark>Login</v-btn>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {}
</script>

<style></style>
