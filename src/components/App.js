import React from 'react';
import SearchBar from './SearchBar'
import { CitiesProvider } from './CitiesProvider';
import CitiesList from './CitiesList';


const App = () => (
  <CitiesProvider>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <SearchBar/>
      <CitiesList/>
    </div>
  </CitiesProvider>
)
 

export default App;
