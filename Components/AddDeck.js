import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import TextButton from "./TextButton";
import {GetDeck, saveDeckTitle} from "../utils/api";
import {purple, white} from "../utils/colors";

class AddDeck extends Component {
	state = {
		deckName: 'Deck name...',
	};

	/**
	 * Saves our new deck to local storage.
	 */
	saveDeck = () => {
		saveDeckTitle({title: this.state.deckName}).then((response) => {
			return GetDeck(this.state.deckName).then((resp) => {
				this.props.navigation.navigate('DeckView', {deck: resp});
			})
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={{fontSize: 35, alignSelf: 'center'}}>New Deck Title:</Text>
				<TextInput value={this.state.deckName}
									 style={{height: 40, borderColor: 'gray', borderWidth: 1}}
									 autoFocus={true}
									 autoCapitalize={'sentences'}
									 clearButtonMode='unless-editing'
									 onChangeText={(text) => this.setState({deckName: text})}/>
				<TextButton onPress={this.saveDeck}
										style={styles.button}>
					<Text style={{color: white}}>Save this deck</Text>
				</TextButton>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: white,
		flex: 1,
		justifyContent: 'space-around'
	},
	button: {
		padding: 10,
		backgroundColor: purple
	}
});

export default AddDeck
