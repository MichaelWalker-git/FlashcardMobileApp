import { AsyncStorage} from 'react-native'
import {Notifications, Permissions} from 'expo';
const NOTIFICATIONS_KEY = 'Flashcards:notifications';

export function getDailyReminderValue(){
	return {
		today: ":wave: Don't forget to practice today!"
	}
}

export function createNotification() {
	return {
		title: `Study your flashcards!`,
		body: `:wave Don't forget to practice today`,
		ios: {
			sound: true,
		},
		android: {
			sound: true,
			priority: 'high',
			sticky: 'false',
			vibrate: true
		}
	}
}

export function clearLocationNotifications() {
	return AsyncStorage.removeItem(NOTIFICATIONS_KEY)
		.then(Notifications.cancelAllScheduledNotificationsAsync)
}
//
export function setLocalNotification() {
	AsyncStorage.getItem(NOTIFICATIONS_KEY)
		.then(JSON.parse)
		.then((data) => {
			if(data ===  null){
				Permissions.askAsync(Permissions.NOTIFICATIONS)
					.then(({status}) => {
						if(status === 'granted'){
							Notifications.cancelAllScheduledNotificationsAsync();

							let tomorrow = new Date();
							tomorrow.setDate(tomorrow.getDate() +1);
							tomorrow.setHours(20);
							tomorrow.setMinutes(0);

							Notifications.scheduleLocalNotificationAsync(
								createNotification(),
								{
									time: tomorrow,
									repeat: 'day'
								}
							);

							AsyncStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(true))
						}
					})
			}
		})
}
