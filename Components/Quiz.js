import React, {Component} from 'react'
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Animated
} from 'react-native';

class Quiz extends Component() {
	componentDidMount() {
		this.animatedValue = new Animated.Value(0);
		this.value = 0;

		this.animatedValue.addListener(({ value }) => {
			this.value = value;
		});

		this.frontInterpolate = this.animatedValue.interpolate({
			inputRange: [0 , 180],
			outputRange: ['0deg', '180deg'],
		});

		this.backInterpolate = this.animatedValue.interpolate({
			inputRange: [0 , 180],
			outputRange: ['180deg', '0deg'],
		});
	}

	flipCard = () => {
		if(this.value >= 90) {
			Animated.spring(this.animatedValue, {
				toValue: 0,
				friction: 8,
				tension: 10,
			}).start()
		} else {
			Animated.spring(this.animatedValue,{
				toValue: 180,
				friction: 8,
				tension: 10
			}).start();
		}
	};

	render() {
		return (
			<View>


			</View>
		)
	}
};

export default Quiz;

