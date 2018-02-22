import React, {Component} from 'react'
import {Picker, Text, View, StyleSheet} from "react-native";
import {setLocalNotification} from "../utils/helpers";
import {black, blue, lightPurp, purple, white} from "../utils/colors";
import TextButton from "./TextButton";

class Notifications extends Component {
	state = {
		selectedHour: 10,
		selectedMinute: 0,
		hours: [],
		minutes: [],
	};


	/**
	 * Builds the PickerItem template list upon component loading.
	 */
	componentDidMount(){
		this.createMinHourLists();
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
		for (let k = 0; k < 60; k++) {
			minutes.push(k);
		}
		this.setState({
			minutes, hours
		})
	};

	/**
	 * Saves the newly notification time into local storage.
	 */
	setNotificationTime = () => {
		setLocalNotification(this.state.hour, this.state.minute);
		this.props.navigation.goBack();
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Set Notification Time</Text>
				<View style={styles.pickerContainer}>
					<Picker
						style={styles.picker}
						selectedValue={this.state.selectedHour}
						onValueChange={(itemValue) => this.setState({selectedHour: itemValue})}>
						{this.state.hours.map((hour) => (
							<Picker.Item key={hour} value={hour} label={hour.toString()}/>
						))}
					</Picker>
					<Picker
						style={styles.picker}
						selectedValue={this.state.selectedMinute}
						onValueChange={(itemValue) => this.setState({selectedMinute: itemValue})}>
						{this.state.minutes.map((min) => (
							<Picker.Item key={min} value={min} label={min.toString()}/>
						))}
					</Picker>
				</View>
				<TextButton onPress={this.setNotificationTime} style={styles.saveButton}>
					<Text style={{color: 'white'}}>Save Notification Time</Text>
				</TextButton>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	picker: {
		flex: 1,
		alignContent: 'center',
	},
	pickerContainer: {
		flexDirection: 'row'
	},
	title: {
		fontSize: 28,
		alignSelf: 'center',
	},
	saveButton: {
		paddingTop: 20,
		backgroundColor: blue,
		paddingBottom: 20,
	}
});

export default Notifications;
