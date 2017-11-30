import axios from 'axios'
import { getLocalStorage } from './StorageServices'

const { REACT_APP_API_SERVER } = process.env

const getInfoUser = async () => {
  const token = getLocalStorage()
  const { data } = await axios.get(`${REACT_APP_API_SERVER}/getUser`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `bearer ${ token }`
    }
  })
  return data
}


export default getInfoUser