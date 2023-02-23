import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})


export const getCountries = () => api.get(`/countries`)


const apis = {
    getCountries
}

export default apis