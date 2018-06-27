import React, { Component } from "react"
import PropTypes from 'prop-types'
import WeatherDetails from './WeatherDetails'
import { fetchCityWeather } from "../utils/api"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Collapse from "@material-ui/core/Collapse"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

class City extends Component {
  state = {
    city: {},
    isOpen: false
  }

  static propTypes = {
    city:PropTypes.string.isRequired
  }

  parseData = cityData => {
    const today = new Date().getDate();

    this.setState(prevState => ({
      ...prevState,
      city: {
        cityDetails: {
          ...cityData.city
        },
        days:[
          cityData.list.filter(
            city => today === new Date(city.dt_txt).getDate()
          ),
          cityData.list.filter(
            city => today + 1 === new Date(city.dt_txt).getDate()
          ),
          cityData.list.filter(
            city => today + 2 === new Date(city.dt_txt).getDate()
          )
        ]
      }
    }))
  }

  handleClick = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }
  componentDidCatch() {
    this.setState({
      error: true
    })
  }
  
  componentDidMount() {
    fetchCityWeather(this.props.city).then(cityData =>
      this.parseData(cityData)
    )
  }

  render() {
    const {isOpen, city:{days}} = this.state
    return (
      <React.Fragment>
        <ListItem button onClick={this.handleClick}>
          <ListItemText inset>
            <Typography variant="display1">{this.props.city}</Typography>
          </ListItemText>
        </ListItem>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem>
              <Grid container spacing={8}>
                {
                  days &&
                    days.map((day,i) => (
                      <WeatherDetails
                        key={i}
                        dayDetails={day}
                      />
                    ))
                }
              </Grid>
            </ListItem>
          </List>
        </Collapse>
      </React.Fragment>
    )
  }
}

export default City
