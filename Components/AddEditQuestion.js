import React, {Component} from 'react'
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, View} from "react-native";
import TextButton from "./TextButton";
import {addQuestionToDeck, getDeck} from "../utils/api";
import {purple, white} from "../utils/colors";

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
			return getDeck(currentDeck.title).then((response) => {
				this.props.navigation.navigate('DeckView', {deck: response})
			})
		});
	};

	render() {
		const quiz = this.props.navigation.state.params.quiz;
		return (
			<View style={styles.container}>
				<View style={{alignItems: 'center', padding: 15}}>
					<Text style={{fontSize: 32}}>{quiz.title}</Text>
					<Text style={{fontSize: 18}}>{quiz.questions.length} Total Flashcards</Text>
				</View>
				<View style={styles.inputSection}>
					<View style={styles.subInput}>
						<Text style={{fontWeight: 'bold'}}>Question:</Text>
						<KeyboardAvoidingView>
							<TextInput placeholder='Placeholder for question...'
												 clearButtonMode='unless-editing'
												 autoFocus={true}
												 onChangeText={(text) => this.setState({question: text})}/>
						</KeyboardAvoidingView>
					</View>
					<View style={styles.subInput}>
						<Text style={{fontWeight: 'bold'}}>Answer:</Text>
						<KeyboardAvoidingView>
							<TextInput placeholder='Placeholder for answer...'
											 clearButtonMode='unless-editing'
											 onChangeText={(text) => this.setState({answer: text})}/>
						</KeyboardAvoidingView>
					</View>
					<TextButton style={{padding: 10, alignContent: 'center'}} onPress={this.save}>
						Save
					</TextButton>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	inputSection: {
		justifyContent: 'space-between',
		padding: 10,
	},
	subInput: {
		paddingTop: 5,
		paddingBottom: 5,
	}
});

export default AddEditQuestion;

