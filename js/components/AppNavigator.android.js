import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import HomePage from '../containers/HomePage.js';
import ListViewPage from '../containers/ListViewPage.js'
import NextPage from '../components/NextPage.js'
var styles = StyleSheet.create({
  navigationBar : {
    backgroundColor: '#ccc',
  },
  navLeftButton:{
    marginLeft: 15,
  },
  navRightButton: {
    marginRight: 15,
  },
  navTitle: {
    fontSize: 18,
  }
});

export default class AppNavigator extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'home' }}
        renderScene={this.navigatorRenderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
              {
                if (route.id === 'home') {
                  return null;
                } else {
                  return (
                    <TouchableHighlight style={styles.navLeftButton}  onPress={() => navigator.pop()}>
                      <Text>Back</Text>
                    </TouchableHighlight>
                  );
                }
              },
              RightButton: (route, navigator, index, navState) =>
              {
                if (route.id === 'home') {
                    return null;
                } else {
                  return (<Text style={styles.navRightButton} >Done</Text>);
                }
              },
              Title: (route, navigator, index, navState)   =>
                { return (<Text style={styles.navTitle}> {route.title}</Text>); },
            }}
            navigationStyles={Navigator.NavigationBar.StylesIOS}
            style={styles.navigationBar}
          />
          }
      />
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'home':
        route.title = "My Initial Scene";
        return (<HomePage navigator={navigator} />);
    }
  }
}
