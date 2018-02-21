import React, {Component} from 'react'
import {Text, View} from "react-native";
import TextButton from "./TextButton";

class QuizEnd extends Component {

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
