<template>
  <div>
    <h1>{{ title }}</h1>
    <nuxt-link to="/">Home</nuxt-link>
    <!-- <n-link to="/">Home</n-link>
    <NuxtLink to="/">Home</NuxtLink>
    <NLink to="/">Home</NLink>-->
  </div>
</template>

<script>
export default {
  middleware: 'test',
  asyncData() {
    return { title: 'About' }
  },
  head() {
    return {
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My Amazing About Page'
        }
      ],
      script: [{ src: '/about.js' }]
    }
  }
}
</script>

<style></style>
