import React, { Component } from "react";
import { fetchCityWeather } from "../utils/api";

class City extends Component {
  state = {
    [this.props.city]: {}
  };
  
  today = new Date().getDate()

  parseData = cityData => {
    this.setState(prevState => ({
      ...prevState,
      [this.props.city]: {
        cityDetails:{
          ...cityData.city
        },
        dayOne: cityData.list
          .filter(city => this.today === new Date(city.dt_txt).getDate() ), 
        dayTwo: cityData.list
          .filter(city => this.today + 1 === new Date(city.dt_txt).getDate() ), 
        dayThree: cityData.list
          .filter(city => this.today + 2 === new Date(city.dt_txt).getDate() ) 
      }
    }))
  }

  componentDidMount() {
    fetchCityWeather(this.props.city)
      .then( cityData => this.parseData(cityData) )
  }

  render() {
    return <h1>{this.props.city}</h1>;
  }
}

export default City;
