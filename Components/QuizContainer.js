import React, {Component} from 'react';
import {StatusBar, View} from "react-native";
import Quiz from "./Quiz";
import {Constants} from 'expo';
import {purple} from "../utils/colors";
import ErrorQuizPage from "./ErrorQuizPage";

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
		questionIndex: 0,
	};

	componentDidMount(){
		const newQuizObj = this.props.navigation.state.params.quiz;
		newQuizObj.scores = [];
		newQuizObj.scores.push({date: new Date(), score: {correct: 0, totalNumber: newQuizObj.questions.length}});
		this.setState({quiz: newQuizObj})
	}

	addQuizPoint = () => {
		this.setState((state) => {
			const count = state.quiz.scores.score.correct + 1;
			const newIdx = state.questionIndex +1;
			const newQuiz = Object.assign({}, this.state.quiz);
			newQuiz.scores.score.correct = count;
			return {
				...state,
				quiz: newQuiz,
				questionIndex: newIdx
			}
		})
	};

	decreaseQuizPoint = () => {
		this.setState((state) => {
			const newIdx = state.questionIndex +1;
			return {
				...state,
				questionIndex: newIdx
			}
		})
	};

	//TODO(michaelhuy): We shouldn't map, but we want to iterate each option.
	render(){
		const {quiz, questionIndex} = this.state;
		return(
			<View>
				{quiz.questions && quiz.questions.length > 0 ?
					<View>
						<Quiz question={quiz.questions[questionIndex]}
									addQuizPoint={this.addQuizPoint}
									decreaseQuizPoint={this.decreaseQuizPoint}
									title={quiz.title}/>
					</View>
				:
					<ErrorQuizPage/>
				}
			</View>
		)
	}

}

export default QuizContainer;
