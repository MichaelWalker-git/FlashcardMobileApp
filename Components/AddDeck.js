import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import TextButton from "./TextButton";
import {saveDeckTitle} from "../utils/api";

class AddDeck extends Component {
	state = {
		deckName: '',
	};

	saveDeck = () => {
		this.saveDeckTitle(this.state.deckName);
	};

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
