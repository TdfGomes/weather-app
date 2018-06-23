import fetch from 'isomorphic-fetch'
import {API_URL} from './constants'

export const fetchCityWeather = () => (
  fetch(`${API_URL}&q=London`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
)