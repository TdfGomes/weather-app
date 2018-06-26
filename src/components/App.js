import React from 'react'
import Grid from '@material-ui/core/Grid'
import SearchBar from './SearchBar'
import { CitiesProvider } from './CitiesProvider'
import CitiesList from './CitiesList'


const App = () => (
  <CitiesProvider>
    <Grid container direction='column' spacing={8}>
      <header style={{textAling:'center', padding:'25px 0'}}>
        <SearchBar/>
      </header>
      <CitiesList/>
    </Grid>
  </CitiesProvider>
)
 

export default App;
