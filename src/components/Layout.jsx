import React from 'react';
import PropTypes from 'prop-types';

// import Navbar from './navigator/Navbar';

const Layout = props => (
  <div className="main-layout">
    {/* <Navbar /> */}
    <div className="main-container">
      {props.children}
    </div>
  </div>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};