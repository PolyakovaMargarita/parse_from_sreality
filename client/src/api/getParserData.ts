import http from './index'
import { GET_DATA } from './endpoints'

export const get_data = async (page: number) => {
    return await http.get(`${GET_DATA}?page=${page.toString()}`)
}

export default {
    get_data,
}