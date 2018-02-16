import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, TouchableHighlight, ListView} from "react-native";
import Swipeout from 'react-native-swipeout';
import AddDeck from "./AddDeck";

class DeckView extends Component {
	state = {
		deck: {
			title: 'Carried interest',
			questions: [{
				question: 'Describe BS Tree?',
				answer: 'Blah blah'
			}
				],
			scores: [{date: '12/4/2018', score: {correct: 10, totalNumber: 15}}]
		},
	};

	componentDidMount(){
		this.setState({deck: this.props.deck});
	}

	onPress = () => {

	};

	editQuestion(rowData) {
		// this.props.navigator.push({
		// 	title: 'Edit Question',
		// 	component: AddEditQuestion,
		// 	passProps: {
		// 		noteText: rowData,
		// 	}
		// });
	}

	deleteQuestion = (rowData) => {
		console.log(rowData)
	};

	renderRow = (rowData) => {
		let swipeBtns = [{
			text: 'Delete',
			backgroundColor: 'red',
			underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
			onPress: () => { this.deleteQuestion(rowData) }
		}];

		return (
			<Swipeout right={swipeBtns}
								autoClose='true'
								backgroundColor= 'transparent'>
				<TouchableHighlight
					underlayColor='rgba(192,192,192,1,0.6)'
					onPress={this.editQuestion(rowData)} >
					<View>
						<View style={styles.rowContainer}>
							<Text style={styles.note}> {rowData} </Text>
						</View>
						{/*<Separator />*/}
					</View>
				</TouchableHighlight>
			</Swipeout>
		)
	};

	render() {
		const { deck } = this.state;

		return(
			<View style={styles.container}>
				{this.props.deck ?
					<AddDeck/>
					:
					<View>
						<View>
							<Text>{deck.title}</Text>
							<Text>{deck.questions.length} Total Flashcards</Text>
						</View>
						<View>
							<Text>Past Scores</Text>
							<View style={styles.scoreTable}>
								<View>
									<Text>Date</Text>
								</View>
								<View>
									<Text>Score</Text>
								</View>
							</View>
							<TouchableOpacity
								style={styles.button}
								onPress={this.onPress}>
								<Text> Start Quiz </Text>
							</TouchableOpacity>
						</View>
						<View>
							<Text>Questions</Text>
							{deck.questions.map((card) => (
								<View>
									<View
										dataSource={card}
										renderRow={this.renderRow} />
								</View>
							))}
						</View>
				</View>}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	note: {

	},
	rowContainer: {

	},
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 2
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