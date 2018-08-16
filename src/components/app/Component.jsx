import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Transactions from '../transactions';
import Layout from '../Layout';
import DefaultPage from '../DefaultPage';

import './style.css';

export default class App extends Component {
  componentDidMount() {
    this.props.getTransactions();
  }

  render() {
    return (
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={} />
            <Route path="*" component={DefaultPage} />
          </Switch>
        </BrowserRouter>
      </Layout>
    );
  }
}

App.propTypes = {
  transactions: PropTypes.array.isRequired,
  getTransactions: PropTypes.func.isRequired,
};
