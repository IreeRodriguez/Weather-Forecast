import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Location from './Location';
import WeatherData from './WeatherData/index';
import transformWeather from './../../services/transformWeather';
// import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../constant/weathers';
import './styles.css';

const api_key = '26202365286731356aaa7f162d871b97';
// const city = 'Santiago,scl';
const url = 'http://api.openweathermap.org/data/2.5/weather'


class WeatherLocation extends Component {
  constructor( {city}) {
    super();
    this.state = {
      city,
      data: null,
    }

  }

    // this.setState({
    //   data: data2,
    // })
    
  componentWillMount = () => {
    // console.log('ComponentWillMount');
    const {city} = this.state;
    const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;
    fetch(api_weather).then(data => {
      // console.log(data);
      return data.json();
    }).then(weather_data => {
      const data = transformWeather(weather_data);
      this.setState({data});
    })
  }

  render = () => {
    // console.log('Render');
    const {onWeatherLocationClick} = this.props;
    const {city, data} = this.state;
    const style = {
      container: {
        position: 'relative',
      },
      refresh: {
        display: 'inline-block',
        position: 'relative',
      },
    };
    return (
      <div className="weatherLocation" onClick = {onWeatherLocationClick}>
       <Location city = {city}/>
       { data !== null ? <WeatherData data = {data}/> : <RefreshIndicator
      size={50}
      left={70}
      top={0}
      loadingColor="#FF9800"
      status="loading"
      style={style.refresh}
    />
       }
   </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string,
}

export default WeatherLocation;