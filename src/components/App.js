import React, { Component } from 'react';
import { fetchCityWeather } from '../utils/api'

class App extends Component {
  state = {
    searchedCity:'',
    cities:[]
  }
  handleOnChange = (e) => {
    this.setState({searchedCity:e.target.value})
  }
  addCity = (e) => {
    e.preventDefault()

    const {
      searchedCity
    } = this.state

    searchedCity &&
      this.setState((prevState) => ({
        cities:[
          ...prevState.cities,
          searchedCity
        ]
      }), this.setState({searchedCity:''}))
  }
  componentDidMount() {
    fetchCityWeather('London')
  }



  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="search-bar__wrapper">
          <form onSubmit={this.addCity}>
            <input type='search' value={this.state.searchedCity} onChange={this.handleOnChange}/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
