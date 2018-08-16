import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Transactions extends Component {
  componentDidMount() {
    this.props.getTransactions();
  }

  render() {
    return (
      <div>Transactions</div>
    );
  }
}

Transactions.propTypes = {
  transactions: PropTypes.array.isRequired,
  getTransactions: PropTypes.func.isRequired,
};
