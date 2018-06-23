import React, {Component} from 'react'

class SearchBar extends Component {
  state = {
    searchedCity:'',
    cities:[]
  }

  handleOnChange = (e) => this.setState({searchedCity: e.target.value})
  
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
  render() {
    return(
      <form onSubmit={this.addCity}>
        <input type='search' value={this.state.searchedCity} onChange={this.handleOnChange}/>
      </form>
    )
  }
}

export default SearchBar