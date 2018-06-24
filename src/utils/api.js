import fetch from 'isomorphic-fetch'
import { API_URL } from './constants'

export const fetchCityWeather = (city) => {
  return fetch(`${API_URL}&units=metric&q=${city}`)
    .then(res => res.json())
    .catch(error => console.error(error))
}