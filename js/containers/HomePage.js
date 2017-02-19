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
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    flex: 1,
    padding: 30,
    marginTop: 75,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  flowCenter: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {

    height: 36,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
  block: {
    marginTop: 40,
    height: 200,
    width: 200
  },
  hidden: {
    width: 0,
    transform: [{rotateY: '90deg'}]
  }
});

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden: false,
      text: ''
    };
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.animatedValue3 = new Animated.Value(0);
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
    const duration = 1000;
    const delay = duration - 20;
    this.animatedValue1.setValue(0);
    this.animatedValue2.setValue(0);
    this.animatedValue3.setValue(0);

    Animated.parallel([
      this.createAnimation(this.animatedValue1, duration, Easing.linear),
      this.createAnimation(this.animatedValue2, 1, Easing.linear, delay),
      this.createAnimation(this.animatedValue3, duration, Easing.linear, delay)
    ]).start();
    this.setState({
      hidden: !!this.state.hidden
    });
  }

  handlePressButton() {
    this.props.navigator.push({
      id: 'NextPage',
      component: NextPage
    });
  }

  onStartAnimation() {
    this.animate()
  }

  render() {
    const hideRotateY = this.animatedValue1.interpolate({
      inputRange: [0, 0.8, 1],
      outputRange: ['0deg', '450deg', '630deg']
    });
    const hide = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: [200, 0]
    });
    const show = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 200]
    });
    const showRotateY = this.animatedValue3.interpolate({
      inputRange: [0, 1],
      outputRange: ['90deg', '720deg']
    });
    const hiddenStyles = {
      width: hide
    };
    const visibleStyles = {
      width: show
    };
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Hello world</Text>
        <View style={styles.flowCenter}>
          <Animated.View style={[styles.block, { transform: [{ rotateY: hideRotateY }] },  hiddenStyles]}>
            <TouchableHighlight
                underlayColor="transparent"
                onLongPress={this.onStartAnimation.bind(this)}
                onPress={this.onStartAnimation.bind(this)}>
              <Image
                style={styles.image}
                source={require('../images/FrontendFellows.jpg')}
              />
            </TouchableHighlight>
          </Animated.View>
          <Animated.View style={[styles.block, styles.hidden, { transform: [{ rotateY: showRotateY }] }, visibleStyles]}>
            <TouchableHighlight
                underlayColor="transparent"
                onPress={this.onStartAnimation.bind(this)}>
              <Image
                style={styles.image}
                source={require('../images/Picture1.png')}
              />
            </TouchableHighlight>
          </Animated.View>
        </View>
        <TouchableHighlight
          style={styles.button}
            underlayColor="transparent"
            onPress={this.handlePressButton.bind(this)}>
          <Text>Go</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default HomePage;
