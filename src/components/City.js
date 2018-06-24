import React, { Component } from 'react'
import {fetchCityWeather} from '../utils/api'


class City extends Component {
  state = {
    [this.props.city]:{}
  }
  
  parseData = (cityData) => {
    
    this.setState((prevState) => ({
      ...prevState,
      [this.props.city]: cityData.list.slice(0, -16) //last 3 days
    }))
    
  }
  componentDidMount() {
    fetchCityWeather(this.props.city).then(cityData => this.parseData(cityData))
  }

  
  render(){
    return(
      <h1>{this.props.city}</h1>
    )
  }
}

export default City