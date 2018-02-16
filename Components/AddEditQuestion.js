import React, {Component} from 'react'
import {Text, View} from "react-native";
import TextButton from "./TextButton";

class AddEditQuestion extends Component {

	save= () => {

	};

	render() {
		return (
			<View>
				<View>
					<Text>Deck Title</Text>
					<Text>37 Total Flashcards</Text>
				</View>
				<View>
					<View>
						<Text>Question...</Text>
						<Text>Placeholder for question...</Text>
					</View>
					<View>
						<Text>Answer:</Text>
						<Text>Placeholder text for answer...</Text>
					</View>
					<TextButton style={{padding: 10, alignContent: 'center'}} onPress={this.save}>
						Save
					</TextButton>
				</View>
			</View>
		)
	}
}

export default AddEditQuestion;

