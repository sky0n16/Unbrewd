import feathers from '@feathersjs/feathers'
import rest from '@feathersjs/rest-client'
import axios from 'axios'

// initialize feathers
const api = feathers()

// setup rest-client and set server url
const rc = rest('http://localhost:3030')

//configure axios
api.configure(rc.axios(axios))

//export the api object
export default api