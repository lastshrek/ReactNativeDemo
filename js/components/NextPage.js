import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

import Cell from './Cell';
import Overlay from './Overlay';

class Board {
  constructor() {
    var size = 3;
    var grid = [];
    for (var i = 0; i < size; i++) {
      var row = [];
      for (var j = 0; j < size; j++) {
        row[j] = 0;
      }
      grid[i] = row;
    }
    this.grid = grid;

    this.turn = 1;
  }

  mark(row, col, player) {
    this.grid[row][col] = player;
    return this;
  }

  hasMark(row, col) {
    return this.grid[row][col] !== 0;
  }

  winner() {
    for (let i = 0; i < 3; i++) {
      if (this.grid[i][0] !== 0 && this.grid[i][0] === this.grid[i][1] && this.grid[i][0] === this.grid[i][2]) {
        return this.grid[i][0];
      }
    }

    for (let i = 0; i < 3; i++) {
      if (this.grid[0][i] !== 0 && this.grid[0][i] === this.grid[1][i] && this.grid[0][i] === this.grid[2][i]) {
        return this.grid[0][i]
      }
    }

    if (this.grid[0][0] !== 0 && this.grid[0][0] === this.grid[1][1] && this.grid[2][2] === this.grid[0][0]) {
      return this.grid[0][0];
    }

    if (this.grid[0][2] !== 0 && this.grid[0][2] === this.grid[1][1] && this.grid[2][0] === this.grid[0][2]) {
      return this.grid[0][2];
    }
    return false;
  }

  tie() {
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (this.grid[i][j] === 0) {
          return false;
        }
      }
    }
    return this.winner() === false;
  }
}

export default class NextPage extends React.Component {
  constructor() {
    super();
    this.state = {
      board: new Board(),
      player: 1
    };
  }

  handlePressCell(row, col) {
    if (this.state.board.hasMark(row, col)) {
      return;
    }
    this.setState({
      board: this.state.board.mark(row, col, this.state.player),
      player: this.state.player === 1 ? 2 : 1
    })
  }
  handlePressStartNewGame() {
    this.setState({
      board: new Board(),
      player: 1
    })
  }
  render() {
    const rows = this.state.board.grid.map((cells, row) =>
      <View key={row} style={styles.row}>
        {cells.map((player, col) =>
          <Cell
            key={'cell' + col}
            player={player}
            onPress={this.handlePressCell.bind(this, row, col)}
          />
        )}
      </View>
    );
    return (
      <View style={styles.container}>
        <View style={styles.board}>
          {rows}
        </View>
        <Overlay
          onPress={this.handlePressStartNewGame.bind(this)}
          board={this.state.board}
        />
      </View>
    )
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  board: {
    padding: 5,
    backgroundColor: '#47525d',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
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
