import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import TextButton from "./TextButton";
import {GetDeck, saveDeckTitle} from "../utils/api";

class AddDeck extends Component {
	state = {
		deckName: 'Test123',
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
			<View>
				<Text>What is the title of your new deck?</Text>
				<TextInput placeholder='Deck name' value={this.state.deckName}
									 style={{height: 40, borderColor: 'gray', borderWidth: 1}}
									 autoFocus={true}
									 clearButtonMode='unless-editing'
									 onChangeText={(text) => this.setState({deckName: text})}/>
				<TextButton onPress={this.saveDeck}>
					<Text>Save this deck</Text>
				</TextButton>
			</View>
		);
	}
}

export default AddDeck
