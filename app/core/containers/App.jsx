import React, { Component, PropTypes } from 'react';
import { observer, inject } from "mobx-react";
import DevTools from 'mobx-react-devtools';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navbar from '../components/Navbar';

class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  /* For material ui */
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired
  };

  routerData() {
    return { history: this.props.history, location: this.props.location, route: this.props.route };
  };

  getChildContext() {
    return {
      muiTheme: getMuiTheme(baseTheme)
    };
  };

  render() {
    return (
      <div>
        <Navbar routerData={this.routerData()} />
        {this.props.children}
        <DevTools />
      </div>
    );
  }
}

export default App;
