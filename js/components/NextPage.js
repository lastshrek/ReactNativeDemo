import React from 'react';
import {
	View,
	StyleSheet,
	Text
} from 'react-native';
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
		marginTop: 65,
		alignItems: 'center'
	}
});
export default class NextPage extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Text</Text>
				<Text>Text</Text>
				<Text>Text</Text>
				<Text>Text</Text>
				<Text>Text</Text>
			</View>
		);
	}
};
