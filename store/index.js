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
export const actions = {
  nuxtServerInit(
    { commit },
    {
      req,
      app: { $cookies }
    }
  ) {
    if (req.headers.cookie) {
      if ($cookies.get('token')) {
        commit('auth/setLoggedIn', true)
      }
    }
  }
}
