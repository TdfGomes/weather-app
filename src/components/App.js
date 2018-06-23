import React, { Component } from 'react';
import { fetchCityWeather } from '../utils/api'
import SearchBar from './SearchBar'

class App extends Component {
  

  componentDidMount() {
    fetchCityWeather('London')
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SearchBar/>
      </div>
    );
  }
}

export default App;
