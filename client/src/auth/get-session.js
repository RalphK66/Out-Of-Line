import Cookies from 'js-cookie'

export const getSession = () => {
  const jwt = Cookies.get('token')
  let session
  try {
    if (jwt) {
      const base64Url = jwt.split('.')[1]
      const base64 = base64Url.replace('-', '+').replace('_', '/')
      // what is window.atob ?
      // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob
      session = JSON.parse(window.atob(base64))
      console.log(session);
    }
  } catch (error) {
    console.log(error)
  }
  if (session != undefined && session.isEmployee) {
    return session
  }
}