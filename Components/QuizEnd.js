import React, {Component} from 'react'
import {Text, View} from "react-native";
import TextButton from "./TextButton";
import {clearLocationNotifications, setLocalNotification} from "../utils/helpers";
import {addQuestionToDeck, saveResults} from "../utils/api";
import {orange, purple, white} from "../utils/colors";

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
			<View style={{justifyContent: 'space-between'}}>
				<View>
					<Text style={{fontSize: 32, alignSelf: 'center'}}>{this.props.quiz.title}</Text>
				</View>
				<View style={{alignContent: 'center', paddingTop: 20, paddingBottom: 20}}>
					<Text style={{fontSize: 16}}> {((correct / totalQuestions)* 100).toFixed(2)}% Correct</Text>
					<Text style={{fontSize: 16}}> {correct} / {totalQuestions} Correct </Text>
				</View>
				<View>
					<TextButton onPress={() => this.props.navigateToDeckOverview()}
					style={{padding: 10, alignSelf: 'center', backgroundColor: orange}}>
						Menu</TextButton>
					<TextButton onPress={() => this.props.restartQuiz()}
											style={{padding: 10, alignSelf: 'center',
												backgroundColor: purple, color: white}}>
						Restart Quiz</TextButton>
				</View>
			</View>
		)
	}
}

export default QuizEnd;
