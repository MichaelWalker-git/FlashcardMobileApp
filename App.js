import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./Components/Home";
import {StackNavigator} from "react-navigation";
import DeckView from "./Components/DeckView";
import {black, purple, white} from "./utils/colors";
import Quiz from "./Components/Quiz";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
				<Quiz/>
      </View>
    );
  }
}

const MainNavigator = StackNavigator({
	Home: {
		screen: Home,
	},
	AddDeck: {
		screen: DeckView,
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: purple
			}
		}
	}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
