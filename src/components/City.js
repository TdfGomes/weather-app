import React, { Component } from 'react'
import {fetchCityWeather} from '../utils/api'


class City extends Component {
  componentDidMount() {
    fetchCityWeather(this.props.city)
  }
  
  render(){
    return(
      <h1>{this.props.city}</h1>
    )
  }
}

export default City