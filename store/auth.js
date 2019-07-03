export const state = () => ({
  loggedIn: false
})

export const mutations = {
  setLoggedIn(state, payload) {
    state.loggedIn = payload
  }
}
