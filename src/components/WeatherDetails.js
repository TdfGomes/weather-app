import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import GridList from '@material-ui/core/GridList'
import { GridListTile } from '@material-ui/core';
import { getIcon } from '../utils/getIcon';

const styles = () => ({
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  iconWrapper:{
    textAlign:'center',
    margin:'10px 0'
  }
})

const WeatherDetails = ({dayDetails, classes}) => {
  const weekDay = (date) => {
    const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    const fullDate = date[0] 
      ? new Date(date[0].dt_txt)
      : new Date()
  
    return `${week[fullDate.getDay()]} ${fullDate.getDate()}`
  }
  return (
    <Grid item xs={12} md={4}>
      <Typography variant="title" align='center'>{weekDay(dayDetails)}</Typography>
      <GridList className={classes.gridList} cols={5}>
        {
          dayDetails.map((hourly,i) => (
            <GridListTile key={i}>
              <div className={classes.iconWrapper}>
                {getIcon(hourly.weather[0].icon)}
              </div>
              {hourly.weather[0].description}
            </GridListTile>
          ))
        }
      </GridList>
    </Grid>
  )
}


export default withStyles(styles)(WeatherDetails)