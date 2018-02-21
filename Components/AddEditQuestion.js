import React, {Component} from 'react'
import {Text, TextInput, View} from "react-native";
import TextButton from "./TextButton";

class AddEditQuestion extends Component {

	save = () => {

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
						<TextInput placeholder='Placeholder for question...'/>
					</View>
					<View>
						<Text>Answer:</Text>
						<TextInput placeholder='Placeholder for Answer...'/>
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

