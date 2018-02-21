import React, {Component} from 'react'
import {Text, TextInput, View} from "react-native";
import TextButton from "./TextButton";
import {addQuestionToDeck, GetDeck} from "../utils/api";

class AddEditQuestion extends Component {
	state = {
		question: '',
		answer: ''
	};

	save = () => {
		const currentDeck = this.props.navigation.state.params.quiz;
		const questionPostObject = {
			card: this.state,
			title: currentDeck.title
		};
		addQuestionToDeck(questionPostObject).then((response) => {
			return GetDeck(currentDeck.title).then((response) => {
				this.props.navigation.navigate('DeckView', {deck: response})
			})
		});
	};

	render() {
		return (
			<View>
				<View>
					<Text>Deck Title</Text>
					<Text>{this.props.navigation.state.params.quiz.questions.length} Total Flashcards</Text>
				</View>
				<View>
					<View>
						<Text>Question...</Text>
						<TextInput placeholder='Placeholder for question...'
											 clearButtonMode='unless-editing'
											 autoFocus={true}
											 onChangeText={(text) => this.setState({question: text})}/>
					</View>
					<View>
						<Text>Answer:</Text>
						<TextInput placeholder='Placeholder for Answer...'
											 clearButtonMode='unless-editing'
											 onChangeText={(text) => this.setState({answer: text})}/>
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

