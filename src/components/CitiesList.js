import React from 'react'
import List from '@material-ui/core/List'
import {CitiesConsumer} from './CitiesProvider'
import City from './City'
import ErrorBoundry from './ErrorBoundry';

const CitiesList = () => (
  <CitiesConsumer>
    {
      ({cities}) => cities.length > 0 &&
        <List component='ul'>
          {
            cities.map((city,i) => 
            <ErrorBoundry key={i}>
              <City city={city}/>
            </ErrorBoundry>
            )
          }
        </List>
    }
  </CitiesConsumer>
)

export default CitiesList