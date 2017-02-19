import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

export default class Cell extends React.Component {
  cellStyle() {
    switch (this.props.player) {
      case 1:
        return styles.cellX;
      case 2:
        return styles.cellO;
      default:
        return null;
    }
  }
  getPlayer() {
    switch (this.props.player) {
      case 1:
        return 'X';
      case 2:
        return 'O';
      default:
        return null;
    }
  }
  textStyle() {
    switch (this.props.player) {
      case 1:
        return styles.cellTextX;
      case 2:
        return styles.cellTextO;
      default:
        return null;
    }
  }

  render() {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={this.props.onPress}>
        <View style={[styles.cell, this.cellStyle()]}>
          <Text style={[styles.cellText, this.textStyle()]}>
            {this.getPlayer()}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
};

var styles = StyleSheet.create({
  cell: {
    width: 80,
    height: 80,
    borderRadius: 5,
    backgroundColor: '#7b8994',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellX: {
    backgroundColor: '#72d0eb',
  },
  cellO: {
    backgroundColor: '#7ebd26',
  },
  // CELL TEXT
  cellText: {
    borderRadius: 5,
    fontSize: 50,
    fontFamily: 'AvenirNext-Bold',
  },
  cellTextX: {
    color: '#19a9e5',
  },
  cellTextO: {
    color: '#b9dc2f',
  }
});
