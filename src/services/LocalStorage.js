export function setSessionStorage(token){
  localStorage.setItem('token', token)
}
export function getSessionStorage(){
  return localStorage.getItem('token')
}
export function removeSessionStorage(){
  return localStorage.removeItem('token')
}