import React, {Component} from 'react';
import {
	Text, View, StyleSheet, Dimensions, Button, TouchableOpacity, SectionList, FlatList
} from "react-native";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {GetDecks} from "../utils/api";
import { List, ListItem } from "react-native-elements";


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
		decks: [
			{
				title: 'Beautiful and dramatic Antelope Canyon',
				questions: [{question: 'What is the meaning of life?', answer: 'exist, discover, love'}]
			},
			{
				title: 'Beautiful and dramatic 10 Canyon',
				questions: [{question: 'What is the meaning of life?', answer: 'exist, discover, love'}]
			},
			{
				title: 'Beautiful and dramatic 11 Canyon',
				questions: [{question: 'What is the meaning of life?', answer: 'exist, discover, love'}]
			},
			{
				title: 'Beautiful and dramatic 22 Canyon',
				questions: [{question: 'What is the meaning of life?', answer: 'exist, discover, love'}]
			},
			{
				title: 'Beautiful and dramatic 2 Canyon',
				questions: [{question: 'What is the meaning of life?', answer: 'exist, discover, love'}]
			},
			{
				title: 'Beautiful and dramatic 33 Canyon',
				questions: [{question: 'What is the meaning of life?', answer: 'exist, discover, love'}]
			},
			{
				title: 'Beautiful and dramatic 3 Canyon',
				questions: [{question: 'What is the meaning of life?', answer: 'exist, discover, love'}]
			},
		],
	};

	componentDidMount(){
		// GetAllDecks
		GetDecks().then((response) =>{
			console.log(response, "Initial state")
		})
	}

	_renderItem ({item, index}) {
		return (
			<View style={styles.slide}>
				<Text style={styles.title}>{ item.title }</Text>
			</View>
		);
	}

	render () {
		return <View>
			<View style={styles.numOfDecksHeader}>
				<Text style={styles.title}>{this.state.decks.length} Decks</Text>
			</View>
			{/*{this.state.decks.map((deck, index) => (*/}
				{/*<View key={index} style={styles.deckList}>*/}
					{/*<TouchableOpacity key={deck.title}*/}
														{/*onPress={() => this.props.navigation.navigate('DeckView', {deck: deck})}>*/}
						{/*<Text>Number of Questions: {deck.questions.length}</Text>*/}
						{/*<Text>{deck.title}</Text>*/}
						{/*<Text>Best Score: 90%</Text>*/}
					{/*</TouchableOpacity>*/}
				{/*</View>))}*/}
				<FlatList data={this.state.decks}
									renderItem={({ item }) => (
										<ListItem
											title={`${item.name.first} ${item.name.last}`}
											subtitle={item.email}
										/>
									)}
				/>
				</FlatList>
			<Button
				onPress={() => this.props.navigation.navigate('AddDeck')}
				title="Add New Deck"
				color="#841584"
				accessibilityLabel="Add New Deck"/>
			{/*<Carousel*/}
			{/*ref={c => this._slider1Ref = c}*/}
			{/*data={this.state.entries}*/}
			{/*renderItem={this._renderItem}*/}
			{/*inactiveSlideScale={0.94}*/}
			{/*inactiveSlideOpacity={0.7}*/}
			{/*containerCustomStyle={styles.slider}*/}
			{/*contentContainerCustomStyle={styles.sliderContentContainer}*/}
			{/*loop={true}*/}
			{/*loopClonesPerSide={2}*/}
			{/*autoplay={true}*/}
			{/*autoplayDelay={500}*/}
			{/*autoplayInterval={3000}*/}
			{/*sliderWidth={sliderWidth}*/}
			{/*itemWidth={itemWidth}*/}
			{/*/>*/}
			{/*<Pagination*/}
			{/*dotsLength={this.state.entries.length}*/}
			{/*activeDotIndex={this.state.slider1ActiveSlide}*/}
			{/*containerStyle={styles.paginationContainer}*/}
			{/*dotColor={'rgba(255, 255, 255, 0.92)'}*/}
			{/*dotStyle={styles.paginationDot}*/}
			{/*inactiveDotColor={styles.title.color}*/}
			{/*inactiveDotOpacity={0.4}*/}
			{/*inactiveDotScale={0.6}*/}
			{/*carouselRef={this._slider1Ref}*/}
			{/*tappableDots={!!this._slider1Ref}*/}
			{/*/>*/}
		</View>;
	}
}

const styles = StyleSheet.create({
	slide: { },
	deckList: {
		padding: 10
	},
	numOfDecksHeader: {
		justifyContent: 'center',
		flexDirection: 'row',
	},
	title: {
		color: '#1a1917',
		fontSize: 13,
		fontWeight: 'bold',
		letterSpacing: 0.5
	},
	slideInnerContainer: {
		width: itemWidth,
		height: slideHeight,
		paddingHorizontal: itemHorizontalMargin,
		paddingBottom: 18 // needed for shadow
	},
	sliderContentContainer: {
		paddingVertical: 10 // for custom animation
	},
	paginationContainer: {
		paddingVertical: 8
	},
	paginationDot: {
		width: 8,
		height: 8,
		borderRadius: 4,
		marginHorizontal: 8
	}
});

export default Home;
