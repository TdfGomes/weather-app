import React, { Component } from 'react'
import {fetchCityWeather} from '../utils/api'


class City extends Component {
  state = {
    [this.props.city]:{}
  }
  parseData = (cityData) => {
    console.log(cityData)
    const last3Day = cityData.list.filter(city => new Date(city.dt_txt).getDate() >= 25)
    console.log(last3Day)
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