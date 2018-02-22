import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, TouchableHighlight, ListView, FlatList} from "react-native";
import {white} from "../utils/colors";

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

	componentDidMount(){
		if(this.props.navigation.state.params.deck){
			this.setState({deck: this.props.navigation.state.params.deck});
		}
	}

	render() {
		return(
			<View style={styles.container}>
				<View>
					<View>
						<Text style={{fontSize: 32, alignSelf: 'center'}}>Deck: {this.state.deck.title}</Text>
						<Text style={{fontSize: 20, alignSelf: 'center', borderBottom: }}>Cards: {this.state.deck.questions.length}</Text>
					</View>
					<View>
						{this.state.deck.scores && <View style={styles.pastScoreTable}>
							<Text style={{fontSize: 18, alignSelf: 'center'}}>Past Scores</Text>
							<View style={styles.scoreTable}>
								<View>
									<Text>Date</Text>
								</View>
								<View>
									<Text>Score</Text>
								</View>
							</View>
						</View>}
						<TouchableOpacity
							style={styles.button}
							onPress={() => this.props.navigation.navigate('QuizContainer', {quiz: this.state.deck})}>
							<Text> Start Quiz </Text>
						</TouchableOpacity>
					</View>
					<View>
						<Text>Questions</Text>
						{this.state.deck.questions &&
						<FlatList keyExtractor={(item, index) => index}
											data={this.state.deck.questions}
											style={styles.questionList}
											renderItem={({item}, index) => (
												<View key={index}>
													<Text>Question: {item.question}</Text>
													<Text>Answer: {item.answer}</Text>
												</View>
											)}
						/>}
						<TouchableOpacity
							style={styles.button}
							onPress={() => this.props.navigation.navigate('AddEditQuestion', {quiz: this.state.deck})}>
							<Text> Add Question </Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	pastScoreTable: {

	},
	questionList: {
		paddingTop: 10,
		paddingBottom: 10
	},
	container: {
		flex: 1,
		backgroundColor: white,
	},
	button: {
		alignItems: 'center',
		backgroundColor: '#DDDDDD',
		padding: 10
	},
	scoreTable: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
});

export default DeckView;