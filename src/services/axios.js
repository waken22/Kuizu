import axios from 'axios'

const { REACT_APP_API_SERVER } = process.env

const logInCall = submitted => {
  const { username, password } = submitted
  axios.post(`${REACT_APP_API_SERVER}login`, {
    username: username,
    password: password
  })
  .then(function (response) {
    console.log('login!')
    window.location = '/rooms'
  })
  .catch(function (error) {
    console.log(error)
  })
}


const RegisterCall = submitted => {
  const { username, password, email } = submitted
  axios.post(`${REACT_APP_API_SERVER}register`, {
    username: username,
    password: password,
    email: email
  })
  .then(function (response) {
    
  })
  .catch(function (error) {
    console.log(error)
  })
}

export { logInCall, RegisterCall }
