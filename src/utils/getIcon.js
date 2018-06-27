import React from 'react'
import WeatherIcons from 'react-weathericons'

export const getIcon = (icon) => {
  switch(icon){
    case'01d':
      return <WeatherIcons name='day-sunny' size='2x'/>
    case'02d':
      return <WeatherIcons name='day-cloudy' size='2x'/>
    case'03d':
    case'03n':
      return <WeatherIcons name='cloud' size='2x'/>
    case'04d':
      return <WeatherIcons name='day-cloudy' size='2x'/>
    case'09d':
      return <WeatherIcons name='day-rain' size='2x'/>
    case'10d':
      return <WeatherIcons name='day-rain' size='2x'/>
    case'11d':
      return <WeatherIcons name='day-thunderstorm' size='2x'/>
    case'13d':
      return <WeatherIcons name='day-snow' size='2x'/>
    case'50d':
    case'50n':
      return <WeatherIcons name='fog' size='2x'/>
    case'01n':
      return <WeatherIcons name='night-clear' size='2x'/>
    case'02n':
      return <WeatherIcons name='night-cloudy' size='2x'/>
    case'04n':
      return <WeatherIcons name='night-cloudy' size='2x'/>
    case'09n':
      return <WeatherIcons name='night-rain' size='2x'/>
    case'10n':
      return <WeatherIcons name='night-rain' size='2x'/>
    case'11n':
      return <WeatherIcons name='night-thunderstorm' size='2x'/>
    case'13n':
      return <WeatherIcons name='night-snow' size='2x'/>
    default:
      return null
  }
}