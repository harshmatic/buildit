import React from 'react';
import PropTypes from 'prop-types';
import WeatherRow from '../WeatherRow/WeatherRow';


const Weather = props => (
  <div className="weather" style={{ margin: 'auto', width: '80%' }}>
    <div className="country" style={{ margin: 'auto', width: '20%', fontSize: 'larger', padding: 20, fontWeight: 'bold' }}>{props.city.name} -
      {props.city.country}</div>
    {Object.keys(props.temp).map(key =>

      <WeatherRow key={key} post={props.temp[key]} />
    )}
  </div>
);

Weather.propTypes = {
  temp: PropTypes.object.isRequired,
  city: PropTypes.object.isRequired
};

export default Weather;
