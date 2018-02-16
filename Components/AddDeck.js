import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import TextButton from "./TextButton";
import {saveDeckTitle} from "../utils/api";
import * as NavigationActions from "react-navigation";

class AddDeck extends Component {
	state = {
		deckName: '',
	};

	/**
	 * Saves our new deck to local storage.
	 */
	saveDeck = () => {
		this.saveDeckTitle(this.state.deckName).then((response) => {
			this.props.navigation.NavigationActions.back({key: 'AddEntry'})
		});
	};

	/**
	 * Takes in the input and sets it to local state.
	 * @param {!Event} e
	 */
	handleChange = (e) => {
		this.setState({deckName: e.target.value});
	};


	render() {
		return (
			<View>
				<Text>What is the title of your new deck?</Text>
				<TextInput placeholder='Deck name' value={this.state.deckName} onChange={this.handleChange}/>
				<TextButton onClick={this.saveDeck}>
					<Text>Save this deck</Text>
				</TextButton>
			</View>
		);
	}
}

export default AddDeck
