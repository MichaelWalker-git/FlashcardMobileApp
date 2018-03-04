import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {white} from "./utils/colors";
import {setLocalNotification} from "./utils/helpers";
import MainNavigator from "./Components/MainNavigator";

export default class App extends React.Component {
	componentDidMount(){
		setLocalNotification();
	}

	render() {
		return (
			<SafeAreaView style={styles.safeArea}>
				<View style={styles.main}>
					<MainNavigator/>
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: white,
		alignItems: 'center',
		justifyContent: 'center',
	},
	safeArea: {
		flex: 1,
	},
	main: {
		flex: 1,
	}
});
