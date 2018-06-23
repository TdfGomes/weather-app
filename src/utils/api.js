import fetch from 'isomorphic-fetch'
import { API_URL } from './constants'

export const fetchCityWeather = (city) => (
  fetch(`${API_URL}&q=${city}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
)