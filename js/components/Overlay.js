import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';
export default class Overlay extends React.Component {
  render() {
    const board = this.props.board;
    const winner = board.winner();
    const tie = board.tie();
    let gameState;
    if(!winner && !tie) {
      return <View />
    }
    console.log(tie)

    gameState = !tie ? 'Player ' + (winner === 1 ? 'X': 'O') + ' wins' :  'It\'s a tie!';

    return (
      <View style={styles.overlay}>
        <Text style={styles.overlayMessage}>{gameState}</Text>
        <TouchableHighlight
          style={styles.newGame}
          onPress={this.props.onPress}
          underlayColor="transparent"
          activeOpacity={0.5}>
          <Text style={styles.newGameText}>New game</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(221, 221, 221, 0.5)',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayMessage: {
    fontSize: 40,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    fontFamily: 'AvenirNext-DemiBold',
    textAlign: 'center',
  },
  newGame: {
    backgroundColor: '#887765',
    padding: 20,
    borderRadius: 5,
  },
  newGameText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'AvenirNext-DemiBold',
  },
});

