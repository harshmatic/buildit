import React, { Component } from 'react';
import PropTypes from 'prop-types';

if (process.env.WEBPACK) {
  require('./header.css'); // eslint-disable-line global-require
}

export class Header extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch() {
    this.props.onSearch(this.textInput.current.value);
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <button onClick={this.onSearch} className="btn">Search</button>
      </div>
        );
  }
}

export default Header;
