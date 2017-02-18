import React, { Component } from 'react';
import {
  NavigatorIOS,
} from 'react-native';

import HomePage from '../containers/HomePage.js';

export default class RciPoc extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: HomePage,
          title: 'Initial Scene'
        }}
        style={{flex: 1}}
      />
    );
  }
}
