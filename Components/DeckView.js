import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Alert, FlatList} from "react-native";
import {purple, red, white} from "../utils/colors";
import RenderSeparator from "./RenderSeparator";

class DeckView extends Component {
	state = {
		deck: {
			title: 'Carried interest',
			questions: [{
				question: 'Describe BS Tree?',
				answer: 'Blah blah'
			}
			],
			scores: []
		},
	};

	componentDidMount() {
		if (this.props.navigation.state.params.deck) {
			this.setState({deck: this.props.navigation.state.params.deck});
		}
	}

	computeQuizScore = (quizInstance) => {
		return <Text>{quizInstance.score.correct} / {quizInstance.score.totalNumber}</Text>
	};

	convertToShortDate = (stringDate) => {
		const date = new Date(stringDate);
		return <Text>{date.getMonth()}/{date.getDay()}/{date.getFullYear()}</Text>
	};

	validateQuizStart = () => {
		if(!this.state.deck.questions.length){
			Alert.alert(
				'No Questions',
				'No Questions Available. Please add some first.',
				[
					{ text: 'OK',
						onPress: () => this.props.navigation.navigate('AddEditQuestion', {quiz: this.state.deck}),
					}
				],
				{ cancelable: false }
			)
		} else {
			this.props.navigation.navigate('QuizContainer', {quiz: this.state.deck});
		}
	};

	render() {
		return (
			<View style={styles.container}>
					<View>
						<Text style={{fontSize: 32, alignSelf: 'center'}}>Deck: {this.state.deck.title}</Text>
						<Text style={styles.secondTitle}>Cards: {this.state.deck.questions.length}</Text>
						<RenderSeparator/>
					</View>
					<View>
						{this.state.deck.scores &&
						<View style={styles.pastScoreTable}>
							<Text style={styles.subTitle}>Recent Score</Text>
							<View style={styles.scoreTable}>
								<View style={styles.scoreTableHeaders}>
									<Text style={{fontWeight: 'bold'}}>Date</Text>
									<Text style={{fontWeight: 'bold'}}>Score</Text>
								</View>
							</View>
							<View style={styles.scoreTable}>
								{this.state.deck.scores.map((quizInstance) => (
										<View style={styles.scoreTableHeaders} key={quizInstance.date}>
											<View>
												<Text>{this.convertToShortDate(quizInstance.date)}</Text>
											</View>
											<View>
												<Text>{this.computeQuizScore(quizInstance)}</Text>
											</View>
										</View>
									))}
							</View>
						</View>}
						<TouchableOpacity
							style={[styles.button, {backgroundColor: red}]}
							onPress={this.validateQuizStart}>
							<Text style={{color: white}}> Start Quiz </Text>
						</TouchableOpacity>
					</View>
					<View>
						<Text style={styles.subTitle}>Questions</Text>
						{this.state.deck.questions &&
						<FlatList keyExtractor={(item, index) => index}
											data={this.state.deck.questions}
											style={styles.questionList}
											ItemSeparatorComponent={RenderSeparator}
											renderItem={({item}, index) => (
												<View key={index} style={{padding: 10}}>
													<Text>
														<Text style={{fontWeight: 'bold'}}>Question: </Text>{item.question}</Text>
													<Text><Text style={{fontWeight: 'bold'}}>Answer: </Text>{item.answer}</Text>
												</View>
											)}
						/>}
						<TouchableOpacity
							style={styles.button}
							onPress={() => this.props.navigation.navigate('AddEditQuestion', {quiz: this.state.deck})}>
							<Text style={{color: white}}> Add Question </Text>
						</TouchableOpacity>
					</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	pastScoreTable: {
		padding: 10,
	},
	secondTitle: {
		fontSize: 20,
		alignSelf: 'center',
	},
	scoreTable: {
		flexDirection: 'row',
	},
	scoreTableHeaders: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-around',
	},
	subTitle: {
		fontWeight: 'bold',
		alignSelf: 'center',
		paddingTop: 5,
		fontSize: 18,
	},
	questionList: {
		padding: 10
	},
	container: {
		flex: 1,
		backgroundColor: white,
		justifyContent: 'space-around'
	},
	button: {
		alignItems: 'center',
		backgroundColor: purple,
		padding: 10
	},
});

export default DeckView;