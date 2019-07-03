export default ({ app, store }, inject) => {
  inject('auth', () => store.state.auth.loggedIn)
}
