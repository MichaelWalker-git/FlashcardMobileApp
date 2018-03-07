import React, {Component} from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import TextButton from "./TextButton";
import {black, lightPurp, orange, red} from "../utils/colors";
import QuizCard from "./QuizCard";

class Quiz extends Component {
	state = {
		cardHasBeenFlipped: false,
	};

	/**
	 * Correct question increases the counter.
	 */
	correctQuestion = () => {
		this.resetQuestion();
		this.props.addQuizPoint();
	};

	/**
	 * Routes to next question.
	 */
	incorrectQuestion = () => {
		this.resetQuestion();
		this.props.decreaseQuizPoint();
	};

	/**
	 * Resets quiz ask buttons.
	 */
	resetQuestion = () => {
		this.setState((state) => {
			return {...state, cardHasBeenFlipped: !state.cardHasBeenFlipped}
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={{fontSize: 32, alignSelf: 'center'}}>
					Deck: {this.props.title}
				</Text>
				<View style={{flex: 1}}>
					<View style={styles.flippableCard}>
						<QuizCard resetQuestion={this.resetQuestion}
											cardHasBeenFlipped={this.state.cardHasBeenFlipped}
											question={this.props.question}/>
					</View>
					<View style={styles.bottom}>
						{this.state.cardHasBeenFlipped ?
							<View style={styles.buttons}>
								<Text>Remaining Questions: {this.props.questionsLeft}</Text>
								<TextButton style={[styles.button, {backgroundColor: 'green'}]}
														onPress={() => this.correctQuestion()}>
									<Text>Correct</Text>
								</TextButton>
								<TextButton onPress={() => this.incorrectQuestion()}
														style={[styles.button, {backgroundColor: 'red'}]}>
									<Text>Incorrect</Text>
								</TextButton>
							</View> : <View/>}
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
	},
	flippableCard: {
		paddingTop: 40,
		flexDirection: 'column-reverse'
	},
	bottom: {
		top: 450,
		position: 'absolute',
	},
	buttonArea: {},
	answerResponse: {},
	buttons: {
		justifyContent: "space-between",
		left: 150,
	},
	button: {
		padding: 20,
	},
	flipCardButton: {},

});


export default Quiz;

