import axios from 'axios'
import toastr from 'toastr';


const { REACT_APP_API_SERVER } = process.env


// Configs Toastr
toastr.options.positionClass = 'toast-top-center';


function logInCall (submitted) {
  const { username, password } = submitted
  return axios.post(`${REACT_APP_API_SERVER}/login`, {
    username: username,
    password: password
  })
  .then(function(response) {
    toastr.success('Login Successfully!', {timeOut: 5000})
    return response
  })
  .catch(function (error) {
    toastr.error('Cannot login, check your credentials', {timeOut: 5000})
  })
}

function RegisterCall (submitted)  {
  const { username, password, email } = submitted
  return axios.post(`${REACT_APP_API_SERVER}/register`, {
    username: username,
    password: password,
    email: email
  })
  .then(function (response) {
    toastr.success(response.data.msg, {timeOut: 5000})
    return response
  })
  .catch(function (error) {
    toastr.error('Something went wrong when you tried to register...', {timeOut: 5000})
  })
}

export { logInCall, RegisterCall }
