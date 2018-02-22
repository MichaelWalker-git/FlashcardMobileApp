import React, {Component} from 'react'
import {Picker, Text, View} from "react-native";
import {setLocalNotification} from "../utils/helpers";

class Notifications extends Component {
	state = {
		selectedHour: 10,
		selectedMinute: 0,
		hourTemplateList: [],
		minTemplateList: [],
	};



	componentDidMount(){
		this.createPickerItemLists();
	}

	/**
	 * Creates the desired label and value instances to be iterated over for
	 * @returns {{hours: Array, minutes: Array}}
	 */
	createMinHourLists = () => {
		const hours = [];
		const minutes = [];
		for (let j = 0; j < 24; j++) {
			hours.push(j);
		}
		for (let k = 25; k < 60; k++) {
			minutes.push(k);
		}
		return { hours, minutes: [...hours, minutes] };
	};

	/**
	 * Creates the list of template items for both hours (0-11) and min (0 - 59)
	 * respectively.
	 */
	createPickerItemLists = () => {
		const {hours, minutes} = this.createMinHourLists();
		for (let hour of hours) {
			this.state.hourTemplateList.push(
				<Picker.Item key={hour} value={hour} label={hour.toString()}/>);
		}
		for (let minute of minutes) {
			this.state.minTemplateList.push(
				<Picker.Item key={minute} value={minute} label={minute.toString()}/>);
		}
	};

	/**
	 * Saves the newly notification time into local storage.
	 */
	setNotificationTime = () => {
		setLocalNotification(this.state.hour, this.state.minute);
	};

	render() {
		return (
			<View>
				<Text>Set Notification Time</Text>
				<Picker
					selectedValue={this.state.selectedHour}
					onValueChange={(itemValue) => this.setState({hour: itemValue})}>
					{this.state.hourTemplateList}
				</Picker>
				<Picker
					selectedValue={this.state.selectedMinute}
					onValueChange={(itemValue) => this.setState({minute: itemValue})}>
					{this.state.minTemplateList}
				</Picker>
			</View>
		)
	}
}

export default Notifications;

