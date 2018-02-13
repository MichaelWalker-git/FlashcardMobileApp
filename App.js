import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./Components/Home";
import {StackNavigator} from "react-navigation";
import DeckView from "./Components/DeckView";
import {purple, white} from "./utils/colors";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Home/>
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
