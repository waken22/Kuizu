import axios from 'axios'
import toastr from 'toastr';
import { getAuthHeader } from './AuthServices'

// Configs Toastr
toastr.options.positionClass = 'toast-top-center'


const { REACT_APP_API_SERVER } = process.env

const getInfoUser = async () => {
  const { data } = await axios.get(`${REACT_APP_API_SERVER}/getUser`, getAuthHeader())
  return data
}

const UpdateProfile = async (avatar) => {
  const response = await axios.put(`${REACT_APP_API_SERVER}/profile`, { avatar }, getAuthHeader())
  await toastr.success('Profile Updated Succesfully!', {timeOut: 5000})
  return response.data
}


export { UpdateProfile, getInfoUser }