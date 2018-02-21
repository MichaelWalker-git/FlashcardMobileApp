import React, {Component} from 'react'
import {Text, View} from "react-native";
import {setLocalNotification} from "../utils/helpers";

class Notifications extends Component {

	setNotificationTime = (hour, min) => {
		setLocalNotification(hour, min);
	};

	render() {
		return (
			<View>
				<Text>Set Notification Time</Text>
				<Text>Hour Setting</Text>
				<Text>Minute Setting</Text>
				<Text>Submit</Text>
			</View>
		)
	}
}

export default Notifications;

