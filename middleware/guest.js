export default function({ store, redirect, app: { $cookies } }) {
  if ($cookies.get('token')) {
    return redirect('/admin/questions')
  }
}
