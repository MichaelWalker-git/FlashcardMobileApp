import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, Button, TouchableOpacity, SectionList, FlatList} from "react-native";
import Carousel, {Pagination} from 'react-native-snap-carousel';

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
				questions: {question: 'What is the meaning of life?', answer: 'exist, discover, love'}
			},
			{
				title: 'Beautiful and dramatic 10 Canyon',
				questions: {question: 'What is the meaning of life?', answer: 'exist, discover, love'}
			},		{
				title: 'Beautiful and dramatic 11 Canyon',
				questions: {question: 'What is the meaning of life?', answer: 'exist, discover, love'}
			},		{
				title: 'Beautiful and dramatic 22 Canyon',
				questions: {question: 'What is the meaning of life?', answer: 'exist, discover, love'}
			},		{
				title: 'Beautiful and dramatic 2 Canyon',
				questions: {question: 'What is the meaning of life?', answer: 'exist, discover, love'}
			},
			{
				title: 'Beautiful and dramatic 33 Canyon',
				questions: {question: 'What is the meaning of life?', answer: 'exist, discover, love'}
			},
			{
				title: 'Beautiful and dramatic 3 Canyon',
				questions: {question: 'What is the meaning of life?', answer: 'exist, discover, love'}
			},
		],
	};

	componentDidMount(){
		// GetAllDecks
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
			<FlatList
				data={this.state.decks}
				renderItem={(deck) => (
					<TouchableOpacity key={deck.title}
														onPress={() => this.props.navigation.navigate('DeckView', {deck: deck})}>
						<Text>{deck.questions.length}</Text>
						<Text>{deck.title}</Text>
						<Text>Best Score: 90%</Text>
					</TouchableOpacity>
				)}
			/>
			<View>
				<Text>{this.state.decks.length} Decks</Text>
			</View>
			<Button
				onPress={() => this.props.navigation.navigate('DeckView')}
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
