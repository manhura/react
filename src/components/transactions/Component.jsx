import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Transactions extends Component {
  doSomething = () => {
    // some code 
  }

  render() {
    return (
      <input type="button" onClick={this.doSomething} />
    );
  }
}

Transactions.propTypes = {
  transactions: PropTypes.array.isRequired,
  getTransactions: PropTypes.func.isRequired,
};
