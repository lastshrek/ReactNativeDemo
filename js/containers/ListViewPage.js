import React from 'react';
import {
  View,
  Text,
	StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		marginTop: 65,
		alignItems: 'center'
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
	centering: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
	},
	gray: {
		backgroundColor: '#cccccc',
	},
	horizontal: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 8,
	},

});

const ListViewPage = React.createClass({
  render() {
    return (
      <View style={styles.container}>
				<Text>Demo</Text>
      </View>
    );
  }
});


export default ListViewPage;
