import React, {Component} from 'react'
import {CitiesConsumer} from './CitiesProvider'

class SearchBar extends Component {
  
  inputRef = React.createRef();

  render() {
    return(
      <CitiesConsumer>
        {
          ({addCity}) => (
            <form onSubmit={(e) => {
              e.preventDefault()
              this.inputRef.current.value.trim().length > 0 &&
                addCity(this.inputRef.current.value)
                this.inputRef.current.value = ''
            }}>
              <input type='search' ref={this.inputRef}/>
            </form>
          )
        }
      </CitiesConsumer>
    )
  }
}

export default SearchBar