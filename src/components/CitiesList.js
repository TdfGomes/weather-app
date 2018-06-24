import React from 'react'
import {CitiesConsumer} from './CitiesProvider'
import City from './City'

const CitiesList = () => (
  <CitiesConsumer>
    {
      ({cities}) => cities.length > 0 && cities.map((city,i) => <City city={city} key={i}/> )
    }
  </CitiesConsumer>
)

export default CitiesList