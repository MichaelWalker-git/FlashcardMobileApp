import React, {Component} from 'react'
import {Text, View} from "react-native";
import TextButton from "./TextButton";

class QuizEnd extends Component {

	render() {
		return (
			<View>
				<View>
					<Title>Deck Title</Title>
				</View>
				<View>
					<Text>75.1 % Correct </Text>
					<Text> 62/72 Correct </Text>
					<Text> 2nd Best Run </Text>
				</View>
				<View>
					<TextButton>Menu</TextButton>
					<TextButton>Restart Quiz</TextButton>
				</View>
			</View>
		)
	}
}

export default QuizEnd;

