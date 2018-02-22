import React, {Component} from 'react';
import {StatusBar, View} from "react-native";
import Quiz from "./Quiz";
import {Constants} from 'expo';
import QuizEnd from "./QuizEnd";
import {GetDeck} from "../utils/api";

function QuizStatusBar({backgroundColor, ...props}){
	return (
		<View style={{backgroundColor, height: Constants.statusBarHeight}}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props}/>
		</View>
	)
}

class QuizContainer extends Component {
	state = {
		quiz: {
			scores: [{date: '12/4/2018', score: {correct: 10, totalNumber: 15}}]
		},
		quizIndex: 0,
		questionIndex: 0,
	};

	componentDidMount(){
		const newQuizObj = this.props.navigation.state.params.quiz;
		newQuizObj.scores = [];
		newQuizObj.scores.push({
			date: new Date(),
			score: {
				correct: 0,
				totalNumber: newQuizObj.questions.length
			}
		});
		this.setState({
			quiz: newQuizObj,
			currentQuiz: newQuizObj.scores.length - 1,
		})
	}

	addQuizPoint = () => {
		const newQuestionIndex = this.state.questionIndex + 1;
		const quizCopy = Object.assign({}, this.state.quiz);
		quizCopy.scores[this.state.quizIndex].score.correct += 1;
		this.setState({
			questionIndex: newQuestionIndex,
			quiz: quizCopy
		})
	};

	decreaseQuizPoint = () => {
		this.setState((state) => {
			const newIdx = state.questionIndex + 1;
			return {
				...state,
				questionIndex: newIdx
			}
		})
	};

	navigateToDeckOverview = () => {
		return GetDeck(this.state.quiz.title).then((response) => {
			this.props.navigation.navigate('DeckView', {deck: response})
		})
	};

	restartQuiz = () => {
		this.props.navigation.navigate('QuizContainer', {quiz: this.state.quiz});
	};

	render(){
		const {quiz, questionIndex} = this.state;
		if(quiz.questions && quiz.questions.length
			&& questionIndex >= quiz.questions.length) {
			return (
				<View>
					<QuizEnd quiz={quiz}
									 restartQuiz={this.restartQuiz}
									 navigateToDeckOverview={this.navigateToDeckOverview}/>
				</View>
				)
		}
		return(
			<View>
				{quiz.questions && quiz.questions.length > 0 &&
					<View>
						<Quiz question={quiz.questions[questionIndex]}
									addQuizPoint={this.addQuizPoint}
									decreaseQuizPoint={this.decreaseQuizPoint}
									title={quiz.title}/>
					</View>
				}
			</View>
		)
	}

}

export default QuizContainer;
