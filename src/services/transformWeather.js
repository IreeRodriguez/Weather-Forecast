import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, THUNDER, DRIZZLE} from './../constant/weathers';

const getWeatherState = (weather) => {
  const { id } = weather[0];
  if (id < 300) {
    return THUNDER;
  } if (id < 400) {
    return DRIZZLE;
  } if (id < 600) {
    return RAIN;
  } if (id < 700) {
    return SNOW;
  } if (id === 800) {
    return SUN;
  } else {
    return CLOUDY;
  }
}
const transformWeather = (weather_data) => {
  const { weather } = weather_data;
  const { humidity, temp} = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(weather);

  const data = {
    humidity,
    temperature: parseInt(temp),
    weatherState,
    wind: `${speed} m/s`,
  }
  return data;
}

export default transformWeather;