import { AsyncStorage} from 'react-native'
import {Notifications, Permissions} from 'expo';
const NOTIFICATIONS_KEY = 'Flashcards:notifications';
const NOTIFICATION_TIME = 'Flashcards:notificationTime';
/**
 *
 * @returns {{today: string}}
 */
export function getDailyReminderValue(){
	return {
		today: ":wave: Don't forget to practice today!"
	}
}

/**
 *
 * @returns {{title: string, body: string, ios: {sound: boolean}, android: {sound: boolean, priority: string, sticky: string, vibrate: boolean}}}
 */
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

/**
 *
 * @returns {Promise<*>|Promise<T>}
 */
export function clearLocationNotifications() {
	return AsyncStorage.removeItem(NOTIFICATIONS_KEY)
		.then(Notifications.cancelAllScheduledNotificationsAsync)
}

/**
 *
 * @param hours
 * @param minutes
 */
export function setLocalNotification(hours, minutes) {
	let notificationHours;
	let notificationMinutes;
	const LocalNotificationTimes = AsyncStorage.getItem(NOTIFICATION_TIME).then(JSON.parse);

	if(hours && minutes){
		const notifyObj = {hours, minutes};
		notificationHours = hours;
		notificationMinutes = minutes;
		AsyncStorage.getItem(NOTIFICATION_TIME, JSON.stringify(notifyObj));
	} else if(LocalNotificationTimes) {
		notificationHours = LocalNotificationTimes.hour;
		notificationMinutes = LocalNotificationTimes.min;
	} else {
		const defaultHour = 20;
		const defaultMin = 0;
		notificationHours = defaultHour;
		notificationMinutes = defaultMin;
	}
	AsyncStorage.getItem(NOTIFICATIONS_KEY)
		.then(JSON.parse)
		.then((data) => {
			if(data ===  null){
				Permissions.askAsync(Permissions.NOTIFICATIONS)
					.then(({status}) => {
						if(status === 'granted'){
							Notifications.cancelAllScheduledNotificationsAsync();

							let tomorrow = new Date();
							tomorrow.setDate(tomorrow.getDate() + 1);
							tomorrow.setHours(notificationHours);
							tomorrow.setMinutes(notificationMinutes);

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
