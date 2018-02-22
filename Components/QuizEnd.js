import React, {Component} from 'react'
import {Text, View} from "react-native";
import TextButton from "./TextButton";
import {clearLocationNotifications, setLocalNotification} from "../utils/helpers";
import {addQuestionToDeck, saveResults} from "../utils/api";

class QuizEnd extends Component {
	componentDidMount(){
		const quizObj = {quiz: this.props.quiz};
		saveResults(this.props.quiz)
			.then(clearLocationNotifications)
				.then(setLocalNotification);

	}

	render() {
		const score = this.props.quiz.scores[this.props.quiz.scores.length - 1].score;
		const correct = score.correct;
		const totalQuestions = score.totalNumber;
		return (
			<View>
				<View>
					<Text>{this.props.quiz.title}</Text>
				</View>
				<View>
					<Text> {((correct / totalQuestions)* 100).toFixed(2)}% Correct</Text>
					<Text> {correct} / {totalQuestions} Correct </Text>
					<Text> 2nd Best Run </Text>
				</View>
				<View>
					<TextButton onPress={() => this.props.navigateToDeckOverview()}>
						Menu</TextButton>
					<TextButton onPress={() => this.props.restartQuiz()}>
						Restart Quiz</TextButton>
				</View>
			</View>
		)
	}
}

export default QuizEnd;
