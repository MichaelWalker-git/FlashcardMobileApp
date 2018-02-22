import {AsyncStorage } from 'react-native';

const FLASHCARD_STORAGE_KEY = 'Flashcards:Algorithms';

/**
 * Gets all decks.
 * @returns {*|Promise}
 * @constructor
 */
export function GetAllDecks() {
	return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
		.then((response) => Object.values(JSON.parse(response)));
}

/**
 * Takes in deck id and returns deck.
 * @param {number} title
 * @export
 */
export function GetDeck(title){
	return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
		.then((deck) => {
			const item = JSON.parse(deck);
			return item[title];
		}).catch(() => console.error('No deck by that name'));
}

/**
 * Removes a particular deck from the list.
 * @param {string} title
 * @export
 */
export function RemoveDeck(title){
	return AsyncStorage.removeItem(FLASHCARD_STORAGE_KEY, title);
}


/**
 * Creates a new deck entity with a template object.
 * @param {string} title
 * @returns {*|Promise}
 */
export function saveDeckTitle({title}) {
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
	return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
		.then((deck) => {
			const data = JSON.parse(deck);
			data[title].questions.push(card);
			AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data));
		});
}

/**
 * Adds a card to a deck.
 * @param {{title: string}} quiz
 * @returns {Promise<*>|Promise<T>}
 */
export function saveResults (quiz) {
	return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
		.then((deck) => {
			const outsideObj = {[quiz.title]: quiz};
			const newData = Object.assign(JSON.parse(deck), outsideObj);
			AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(newData));
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
