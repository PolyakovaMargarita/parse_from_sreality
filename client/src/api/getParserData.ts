import http from './index'
import { GET_DATA } from './endpoints'

export const get_data = async () => {
    return await http.get(GET_DATA)
}

export default {
    get_data,
}