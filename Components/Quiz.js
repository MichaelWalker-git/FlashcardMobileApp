import React, {Component} from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Animated
} from 'react-native';
import TextButton from "./TextButton";

class Quiz extends Component {
	state = {
		cardHasBeenFlipped: false,
	};

	componentWillMount() {
		this.animatedValue = new Animated.Value(0);
		this.value = 0;
		this.animatedValue.addListener(({ value }) => {
			this.value = value;
		});
		this.frontInterpolate = this.animatedValue.interpolate({
			inputRange: [0, 180],
			outputRange: ['0deg', '180deg'],
		});
		this.backInterpolate = this.animatedValue.interpolate({
			inputRange: [0, 180],
			outputRange: ['180deg', '360deg']
		});
		console.log(this.props, "!!!!!!")
	}

	flipCard() {
		if (this.value >= 90) {
			Animated.spring(this.animatedValue, {
				toValue: 0,
				friction: 8,
				tension: 10
			}).start();
			this.setState({cardHasBeenFlipped: true})
		} else {
			Animated.spring(this.animatedValue, {
				toValue: 180,
				friction: 8,
				tension: 10
			}).start();
		}
	}

	render() {
		const frontAnimatedStyle = {
			transform: [
				{ rotateY: this.frontInterpolate}
			]
		};
		const backAnimatedStyle = {
			transform: [
				{ rotateY: this.backInterpolate }
			]
		};
		return (
			<View>
				<Text>{this.props.title}</Text>
				<View style={styles.container}>
					<TouchableOpacity onPress={() => this.flipCard()}>
						<Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
							<Text style={styles.flipText}>
								{this.props.question.question}
							</Text>
						</Animated.View>
						<Animated.View style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}>
							<Text style={styles.flipText}>
								{this.props.question.answer}
							</Text>
						</Animated.View>
					</TouchableOpacity>
				</View>
				<View style={styles.buttonArea}>
					<TouchableOpacity onPress={() => this.flipCard()}>
						<Text>Flip!</Text>
					</TouchableOpacity>
					{this.state.cardHasBeenFlipped ?
						<View>
							<Text>Did you get it correct?</Text>
							<View>
								<TextButton onClick={this.props.addQuizPoint}>
									<Text>Yes</Text>
								</TextButton>
								<TextButton onClick={this.props.decreaseQuizPoint}>
									<Text>No</Text>
								</TextButton>
							</View>
						</View> :
						<View/>
					}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 10,
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	flipCard: {
		width: 370,
		height: 370,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'blue',
		backfaceVisibility: 'hidden',
		borderRadius: 4,
	},
	flipCardBack: {
		backgroundColor: "red",
		position: "absolute",
		top: 0,
	},
	flipText: {
		width: 90,
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold',
	},
	buttonArea: {
		paddingTop: 500,
	}
});


export default Quiz;

