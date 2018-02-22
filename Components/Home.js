import React, {Component} from 'react';
import {
	Text, View, StyleSheet, Dimensions, Button, TouchableOpacity, SectionList, FlatList
} from "react-native";
import {GetAllDecks} from "../utils/api";
import {white} from "../utils/colors";
import RenderSeparator from "./RenderSeparator";


function wp (percentage) {
	const value = (percentage * viewportWidth) / 100;
	return Math.round(value);
}
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;


class Home extends Component {
	state = {
		slider1ActiveSlide: 1,
		decks: [],
	};

	componentDidMount(){
		GetAllDecks().then((response) => {
			this.setState({decks: response});
		});
	}

	computeBestScore = (scores) => {
		const topScore = scores.sort((a, b) => {
			return ((b.correct / b.totalNumber) - (a.correct / a.totalNumber));
		})[0];
		return (<Text style={{color: 'red'}}>
			{topScore.score.correct} / {topScore.score.totalNumber}
			</Text>);
	};

	render () {
		return (
			<View style={styles.container}>
				<Text style={{fontSize: 28}}>Let's Study Some Flashcards</Text>
				<View style={styles.numOfDecksHeader}>
					<Text style={styles.title}>{this.state.decks.length} Decks</Text>
				</View>
				{this.state.decks &&
				<FlatList keyExtractor={(item, index) => index}
									data={this.state.decks}
									ItemSeparatorComponent={RenderSeparator}
									renderItem={({item}) => (
										<View style={styles.deckList}>
											<TouchableOpacity key={item.title}
																				onPress={() => this.props.navigation.navigate('DeckView', {deck: item})}>
												<Text><Text style={{fontWeight: 'bold'}}>Title:</Text> {item.title}</Text>
												<Text><Text style={{fontWeight: 'bold'}}>Number of Questions:</Text> {item.questions.length}</Text>
												{item.scores && <Text><Text style={{fontWeight: 'bold'}}>Best Score:</Text> {this.computeBestScore(item.scores)} </Text>}
											</TouchableOpacity>
										</View>
									)}
				/>}
				<Button
					onPress={() => this.props.navigation.navigate('AddDeck')}
					title="Add New Deck"
					color="#841584"
					accessibilityLabel="Add New Deck"/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: white,
		flex: 1
	},
	deckList: {
		padding: 20,
	},
	numOfDecksHeader: {
		justifyContent: 'center',
		flexDirection: 'row',
	},
	title: {
		color: 'black',
		fontSize: 13,
		fontWeight: 'bold',
		letterSpacing: 0.5
	},
});

export default Home;
