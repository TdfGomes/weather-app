import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import {CitiesConsumer} from './CitiesProvider'

class SearchBar extends Component {
  
  inputRef = React.createRef();

  render() {
    return(
      <Grid item xs={12}>
        <CitiesConsumer>
          {
            ({addCity}) => (
              <FormControl
                component='form'
                fullWidth
                margin='normal'
                onSubmit = {
                  (e) => {
                    e.preventDefault()
                    this.inputRef.current.value.trim().length > 0 &&
                      addCity(this.inputRef.current.value)
                    this.inputRef.current.value = ''
                  }
                }>
                <TextField
                  label='Search your City'
                  type='search'
                  inputProps={{
                    ref:this.inputRef
                  }}
                  margin='normal'
                  style={{width:'25%',margin:'0 auto'}}
                />
              </FormControl>
            )
          }
        </CitiesConsumer>
      </Grid>
    )
  }
}

export default SearchBar