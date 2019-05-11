export default ({ app }, inject) => {
  inject('auth', () => !!app.$cookies.get('token'))
}
