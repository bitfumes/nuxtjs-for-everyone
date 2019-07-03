export default ({ app: { $axios, $cookies } }) => {
  const token = $cookies.get('token')
  if (token) {
    $axios.defaults.params = {}
    $axios.defaults.params.auth = token
  }
}
