import React from 'react'
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

const WeatherDetails = ({dayDetails}) => {
  const weekDay = (date) => {
    const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    const fullDate = date[0] 
      ? new Date(date[0].dt_txt)
      : new Date()
  
    return `${week[fullDate.getDay()]} ${fullDate.getDate()}`
  }
  return (
    <Grid item xs={12} md={4}>
      <Typography variant="title">
        {
          weekDay(dayDetails)
        }
      </Typography>
    </Grid>
  )
}


export default WeatherDetails