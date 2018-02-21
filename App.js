import React from 'react';
import {SafeAreaView, StyleSheet, View, Platform} from 'react-native';
import Home from "./Components/Home";
import {StackNavigator, TabNavigator} from "react-navigation";
import {purple, white} from "./utils/colors";
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import AddEditQuestion from "./Components/AddEditQuestion";
import DeckView from "./Components/DeckView";
import AddDeck from "./Components/AddDeck";
import QuizContainer from "./Components/QuizContainer";
import Notifications from "./Components/Notifications";

const Tabs = TabNavigator({
		Home: {
			screen: Home,
			navigationOptions: {
				tabBarLabel: 'Home',
				tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks'
																							 color={tintColor}
																							 size={30}/>
			}
		},
		AddDeck: {
			screen: AddDeck,
			navigationOptions: {
				tabBarLabel: 'Add Deck',
				tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square'
																									color={tintColor}
																									size={30}/>
			}
		},
		Notifications: {
			screen: Notifications,
			navigationOptions: {
				tabBarLabel: 'Add Deck',
				tabBarIcon: ({tintColor}) => <Ionicons name='ios-speedometer'
																							 color={tintColor}
																							 size={30}/>
			}
		},
	}, {
		navigationOptions: {
			headers: null
		}
	},
	{
		tabBarOptions: {
			activeTintColor: Platform.OS === 'ios' ? purple : white,
			style: {
				height: 56,
				backgroundColor: Platform.OS === 'ios' ? white : purple,
				shadowColor: 'rgba(0,0,0,0.24)',
				shadowOffset: {
					width: 0,
					height: 3
				},
				shadowRadius: 6,
				shadowOpacity: 1,
			}
		}
	}
);

const MainNavigator = StackNavigator({
	Home: {
		screen: Tabs,
	},
	AddDeck: {
		screen: AddDeck,
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: purple
			}
		}
	},
	DeckView: {
		screen: DeckView,
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: purple
			}
		}
	},
	QuizContainer: {
		screen: QuizContainer,
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: purple
			}
		}
	},
	AddEditQuestion: {
		screen: AddEditQuestion,
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: purple
			}
		}
	},
});

export default class App extends React.Component {
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
