export const state = () => ({
  course: 'Nuxt.js for everyone on bitfumes',
  weather: {}
})

export const mutations = {
  setCourse(state, payload) {
    state.course = payload
  }
}

export const getters = {
  upperCaseCourse(state, getter) {
    return state.course.toUpperCase()
  }
}
