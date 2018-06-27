import React, {Component} from 'react'
import PropTypes from 'prop-types'
const CitiesContext = React.createContext()

class CitiesProvider extends Component {
  state = {
    cities:{}
  }

  static propTypes = {
    children:PropTypes.element.isRequired
  }
  
  addCity = (city) => {
    this.setState((prevState) => ({
      cities: [
        ...prevState.cities,
        city
      ]
    }))
  }
  render(){
    const {cities} = this.state
    return(
      <CitiesContext.Provider
        value={{
          addCity: (city) => this.addCity(city),
          cities,
        }}
      >
        {this.props.children}
      </CitiesContext.Provider>
    )
  }
}

const CitiesConsumer = CitiesContext.Consumer

export {CitiesProvider, CitiesConsumer}

