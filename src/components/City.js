import React, { Component } from "react";
import { fetchCityWeather } from "../utils/api";

class City extends Component {
  state = {
    [this.props.city]: {}
  };

  parseData = cityData => {
    const today = new Date().getDate()
    this.setState(prevState => ({
      ...prevState,
      [this.props.city]: cityData.list
        .filter(city => today + 2 >= new Date(city.dt_txt).getDate() ) //last 3 days
        
    }))
  }
  componentDidMount() {
    fetchCityWeather(this.props.city).then(cityData =>
      this.parseData(cityData)
    )
  }

  render() {
    return <h1>{this.props.city}</h1>;
  }
}

export default City;
