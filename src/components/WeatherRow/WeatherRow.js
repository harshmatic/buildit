import React from 'react';
import PropTypes from 'prop-types';

if (process.env.WEBPACK) {
  require('./WeatherRow.css'); // eslint-disable-line global-require
}

const WeatherRow = props => (

  <div className="summary">
    <h2>{props.post.date}</h2>
    <h4>{props.post.main}</h4>
    <span className="high">High: {props.post.high} °C</span>
    <span className="low">Low: {props.post.low} °C</span>
    <span className="humidity">Humidity: {props.post.humidity} %</span>
  </div>
    );

WeatherRow.propTypes = {
  post: PropTypes.object.isRequired
};
export default WeatherRow;
