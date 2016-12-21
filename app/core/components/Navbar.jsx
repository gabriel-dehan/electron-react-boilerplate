import React, { Component, PropTypes } from 'react';
import { Link, hashHistory } from 'react-router';

export default class Navbar extends Component {
  /*
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  */

  render() {
    const backLink = this.props.routerData.location.pathname == "/" ? '' : <Link onClick={hashHistory.goBack}>Back</Link>
    return (
      <nav>
        <div className="nav-wrapper">
          <ul className="left">
            {backLink}
            <li></li>
          </ul>
          <ul className="right">
            <li><Link to="/settings" activeStyle={{ color: '#7ab324' }}>Settings</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
