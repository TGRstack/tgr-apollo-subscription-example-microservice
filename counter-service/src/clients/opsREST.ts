import axios from 'axios'
import config from 'config'
const {ENDPOINT_OPS} = config

const client = axios.create({
  baseURL: ENDPOINT_OPS,
  // timeout: 1000, // default is `0` (no timeout)
})

export default client
