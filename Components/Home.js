import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, Button} from "react-native";
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
		entries: [{
			title: 'Beautiful and dramatic Antelope Canyon',
			numOfCards: 3,
			bestScore: 3,
			illustration: 'https://i.imgur.com/UYiroysl.jpg'
		},
			{
				title: 'Earlier this morning, NYC',
				numOfCards: 5,
				bestScore: 3,
				illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
			},
			{
				title: 'White Pocket Sunset',
				numOfCards: 7,
				bestScore: 3,
				illustration: 'https://i.imgur.com/MABUbpDl.jpg'
			},
			{
				title: 'Acrocorinth, Greece',
				numOfCards: 10,
				bestScore: 3,
				illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
			},
			{
				title: 'The lone tree, majestic landscape of New Zealand',
				numOfCards: 32,
				bestScore: 3,
				illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
			},
			{
				title: 'Middle Earth, Germany',
				numOfCards: 99,
				bestScore: 3,
				illustration: 'https://i.imgur.com/lceHsT6l.jpg'
			}],
	};

	_renderItem ({item, index}) {
		return (
			<View style={styles.slide}>
				<Text style={styles.title}>{ item.title }</Text>
			</View>
		);
	}

	onPressAddNewDeck = () => {
		console.log("Here")
	};

	render () {
		return (
			<View>
				{this.state.entries.map((deck) => (
					<View>
						<Text>{deck.numOfCards}</Text>
						<Text>{deck.title}</Text>
						<Text>Best Score: {deck.bestScore}%</Text>
						<Text></Text>
					</View>
				))}
				<View>
					<Text>{this.state.entries.length} Decks</Text>
				</View>
				<Button
					onPress={this.onPressAddNewDeck}
					title="Add New Deck"
					color="#841584"
					accessibilityLabel="Add New Deck"
				/>
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
			</View>
		);
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
