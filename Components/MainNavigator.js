import {StackNavigator} from "react-navigation";
import AddEditQuestion from "./AddEditQuestion";
import AddDeck from "./AddDeck";
import DeckView from "./DeckView";
import QuizContainer from "./QuizContainer";
import {purple, white} from "../utils/colors";
import Tabs from "./Tabs";

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

export default MainNavigator