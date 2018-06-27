import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import GridList from '@material-ui/core/GridList'
import WeatherIcons from 'react-weathericons'
import { GridListTile } from '@material-ui/core'

import { getIcon } from '../utils/getIcon'

const styles = (theme) => {

  console.log(theme)
  
  return {
    detailWrapper:{
      textAlign:'center',
      margin: '15px 0'
    },
    ml:{
      marginLeft:5
    },
    gridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
      padding:'25px 0'
    },
    gridBg:{
      backgroundColor: theme.palette.grey['100'],
      border: `1px solid ${theme.palette.grey['200']}`
      
    },
    pad:{
      paddingTop:20,
      paddingBottom:20
    }
  }
}

const WeatherDetails = ({dayDetails, classes}) => {
  const weekDay = (date) => {
    const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    const fullDate = date[0] 
      ? new Date(date[0].dt_txt)
      : new Date()
  
    return `${week[fullDate.getDay()]} ${fullDate.getDate()}`
  }
  return (
    <Grid item xs={12} md={4} className={classes.gridBg}>
      <div className={classes.pad}>
        <Typography variant="title" cellheight='auto' align='center'>{weekDay(dayDetails)}</Typography>
        <GridList className={classes.gridList} cols={5}>
          {
            dayDetails.map((hourly,i) => (
              <GridListTile key={i}>
                <div className={classes.detailWrapper}>
                  {getIcon(new Date(hourly.dt_txt).getHours())}
                  <span className={classes.ml}>{new Date(hourly.dt_txt).getHours()}</span>
                </div>
                <div className={classes.detailWrapper}>
                  {getIcon(hourly.weather[0].icon)}
                </div>
                <Typography variant="body1" align='center'>{hourly.weather[0].description}</Typography>
                <div className={classes.detailWrapper}>
                  <WeatherIcons name='thermometer'/>
                  <span className={classes.ml}>
                    {hourly.main.temp}
                    <WeatherIcons name='celsius'/>
                  </span>
                </div>
                <div className={classes.detailWrapper}>
                  <WeatherIcons name='strong-wind'/>
                  <span className={classes.ml}>{hourly.wind.speed}m/s</span>
                </div>
              </GridListTile>
            ))
          }
        </GridList>
      </div>
    </Grid>
  )
}


export default withStyles(styles)(WeatherDetails)