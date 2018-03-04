import {TabNavigator} from "react-navigation";
import Home from "./Home";
import {Platform} from "react-native";
import AddDeck from "./AddDeck";
import {purple, white} from "../utils/colors";
import Notifications from "./Notifications";
import {FontAwesome, Ionicons} from '@expo/vector-icons';

const Tabs = TabNavigator({
		Home: {
			screen: Home,
			navigationOptions: {
				tabBarLabel: 'Home',
				tabBarIcon: ({tintColor}) => <Ionicons name='ios-home'
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
				tabBarLabel: 'Notifications',
				tabBarIcon: ({tintColor}) => <Ionicons name='ios-notifications'
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

export default Tabs;
