import React, {Component} from 'react';
import {Text, View, StyleSheet} from "react-native";
import Carousel from 'react-native-snap-carousel';


class Home extends Component {
	state = {
		entries: [{title: 'Popcorn'}, {title: 'Building'}],
	};

	_renderItem ({item, index}) {
		return (
			<View style={styles.slide}>
				<Text style={styles.title}>{ item.title }</Text>
			</View>
		);
	}

	render () {
		return (
			<Carousel
				ref={(c) => { this._carousel = c; }}
				data={this.state.entries}
				renderItem={this._renderItem}
				sliderWidth={20}
				itemWidth={20}
			/>
		);
	}
}

const styles = StyleSheet.create({
	slide: { },
	title: { },
});

export default Home;
