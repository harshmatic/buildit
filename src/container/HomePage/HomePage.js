import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded } from './action';
import Weather from '../../components/Weather/Weather';
import Header from '../../components/Header/Header';
import { groupForecastByDay, daySummary } from '../../util';

export class HomePage extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    tempratures: PropTypes.array.isRequired,
    city: PropTypes.object.isRequired,
    searchString: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired
  }
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e) {
    const { dispatch } = this.props;
    dispatch(fetchPostsIfNeeded(e));
  }

  render() {
    const { tempratures, city, isFetching, searchString, error } = this.props;
    const isEmpty = tempratures.length === 0;
    const summary = daySummary(groupForecastByDay(tempratures));
    return (
      <div className="HomePage">
        <Header value={searchString} onSearch={this.onSearch} />
        {isEmpty
          ? (error !== '' ? <h3>ERROR: {error.data.message}</h3> : <h4 className="HomePage-message mess">Please Search for city above</h4>)
          : <div style={{ opacity: isFetching ? 0.5 : 1, margin: 'auto', width: '100%' }}>
            <Weather temp={summary} city={city} />
          </div>
        }
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { tempratures = [], error = '', isFetching = false, lastUpdated, searchString = '', city = {} } = state;
  return {
    tempratures,
    isFetching,
    lastUpdated,
    searchString,
    city,
    error
  };
};

export default connect(mapStateToProps)(HomePage);
