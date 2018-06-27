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
    case 1:
    case 13:
      return <WeatherIcons name='time-1' />
    case 2:
    case 14:
      return <WeatherIcons name='time-2'/>
    case 3:
    case 15:
      return <WeatherIcons name='time-3'/>
    case 4:
    case 16:
      return <WeatherIcons name='time-4'/>
    case 5:
    case 17:
      return <WeatherIcons name='time-5'/>
    case 6:
    case 18:
      return <WeatherIcons name='time-6'/>
    case 7:
    case 19:
      return <WeatherIcons name='time-7'/>
    case 8:
    case 20:
      return <WeatherIcons name='time-8'/>
    case 9:
    case 21:
      return <WeatherIcons name='time-9'/>
    case 10:
    case 22:
      return <WeatherIcons name='time-10'/>
    case 11:
    case 23:
      return <WeatherIcons name='time-11'/>
    case 12:
    case 0:
      return <WeatherIcons name='time-12'/>
    default:
      return null
  }
}