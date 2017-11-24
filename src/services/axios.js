import axios from 'axios'


const logInCall = submitted => {
  const { username, password } = submitted
  axios.post('/login', {
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
  axios.post('/register', {
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
