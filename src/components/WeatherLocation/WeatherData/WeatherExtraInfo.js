import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) => (
  <div>
    <span className='weatherExtrainfo'>{`Humedad: ${humidity} % - `}</span> 
    <span className='weatherExtrainfo'>{`Vientos: ${wind}`}</span>
  </div>
);
/* se puede de ambas formas, con `` o sin `` */

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;