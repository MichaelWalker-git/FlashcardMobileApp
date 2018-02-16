import {AsyncStorage } from 'react-native';

const FLASHCARD_STORAGE_KEY = 'Flashcards:Algorithms';

/**
 * Gets all decks.
 * @returns {*|Promise}
 * @constructor
 */
export function GetDecks () {
	return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
}

/**
 * Takes in deck id and returns deck.
 * @param {number} id
 * @export
 */
export function GetDeck(id){
	return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY, title);
}

/**
 * Creates a new deck entity with a template object.
 * @param {string} title
 * @returns {*|Promise}
 */
export function saveDeckTitle ({title}) {
	const starterDeck = {
		title,
		questions: [],
	};
	return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
		[title]: starterDeck,
	}))
}

/**
 * Adds a card to a deck.
 * @param {string} title
 * @param {{question: string, answer: string}} card
 * @returns {Promise<*>|Promise<T>}
 */
export function addQuestionToDeck ({title, card}) {
	return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY, title)
		.then((deck) => {
			const data = JSON.parse(deck);
			data.questions.push(card);
			AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data));
		});
}

/**
 * Removes a card from a deck.
 * @param {string} title
 * @param {number} cardIndex
 * @returns {Promise<*>|Promise<T>}
 */
export function deleteQuestionToDeck ({title, cardIndex}) {
	return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY, title)
		.then((deck) => {
			const data = JSON.parse(deck);
			data.questions.splice(cardIndex, 1);
			AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data));
		});
}
