import React from 'react';
import { render } from 'react-dom';
const { Router, hashHistory } = require('react-router');
import { Provider } from "mobx-react";
import { observable } from "mobx";
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Import global styles
//require("materialize-loader");
import './core/assets/styles/all.scss';

const settings = observable({
    foreground: '#000',
    background: '#fff'
});

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
    <Provider settings={settings}>
        <Router history={hashHistory} routes={routes} />
    </Provider>,
  document.getElementById('root')
);
