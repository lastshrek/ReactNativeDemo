import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Platform,
  Image,
  Animated,
  Easing
} from 'react-native';

import NextPage from '../components/NextPage'

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  flowRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 200
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  image: {
    height: 200,
    width: 200,
  },
  block: {
    marginTop: 50,
    height: 200,
    width: 200
  },
});

class HomePage extends React.Component {
  constructor() {
    super();
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.animatedValue3 = new Animated.Value(0);
    this.animatedValue4 = new Animated.Value(0);
  }

  static propTypes = {
    dispatch: React.PropTypes.func,
    searchResult: React.PropTypes.object,
    navigator: React.PropTypes.object.isRequired,
  };

  createAnimation(value, duration, easing, delay = 0) {
    return Animated.timing(
      value,
      {
        toValue: 1,
        duration,
        easing,
        delay
      }
    )
  }

  animate() {
    this.animatedValue1.setValue(0);
    this.animatedValue2.setValue(0);
    this.animatedValue3.setValue(0);
    this.animatedValue4.setValue(0);

    Animated.parallel([
      this.createAnimation(this.animatedValue1, 2000, Easing.ease),
      this.createAnimation(this.animatedValue2, 2000, Easing.linear),
      this.createAnimation(this.animatedValue3, 10, Easing.ease, 2000),
      this.createAnimation(this.animatedValue4, 2000, Easing.ease, 2000)
    ]).start()
  }

  handlePressButton() {
    this.props.navigator.push({
      id: 'NextPage',
      component: NextPage,
      passProps: { searchString: this.state.text },
    });
  }

  onStartAnimation() {
    this.animate()
  }

  render() {
    const marginLeft = this.animatedValue1.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [200, 50, 0]
    });
    const hideRotateY = this.animatedValue2.interpolate({
      inputRange: [0, 0.4, 0.6, 0.8, 1],
      outputRange: ['0deg', '180deg', '360deg', '540deg', '630deg']
    });
    const hide = this.animatedValue3.interpolate({
      inputRange: [0, 1],
      outputRange: [200, 0]
    });
    const showRotateY = this.animatedValue4.interpolate({
      inputRange: [0, 0.6, 0.8, 1],
      outputRange: ['180deg', '360deg', '540deg', '720deg']
    });
    const barStyles = {
      width: hide
    };
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Hello world</Text>
        <View style={styles.flowRight}>
          <Animated.View style={[styles.block, { transform: [{ rotateY: hideRotateY }] },  barStyles]}>
            <TouchableHighlight
              onPress={this.onStartAnimation.bind(this)}>
              <Image
                style={styles.image}
                source={require('../images/FrontendFellows.jpg')}
              />
            </TouchableHighlight>
          </Animated.View>
          <Animated.View style={[styles.block, { transform: [{ rotateY: showRotateY }] }]}>
            <TouchableHighlight>
              <Image
                style={styles.image}
                source={require('../images/Picture1.png')}
              />
            </TouchableHighlight>
          </Animated.View>
        </View>
      </View>
    );
  }
}

export default HomePage;
