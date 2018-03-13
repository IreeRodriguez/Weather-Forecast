import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';



const ForecastItem = ({ weekDay, hour, data }) => (
  <div>
    <div>{weekDay} - {hour}hr</div>
    <WeatherData data={data}/>
    
  </div>
)

ForecastItem.propType = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,
  }),
}

// class ForecastItem extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     );
//   }
// }

export default ForecastItem;