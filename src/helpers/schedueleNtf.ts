import * as Notifications from 'expo-notifications';
import moment from 'moment';

interface NotificationPayload {
    title: string;
    body: string;
}

const scheduleNotification = async (text: string, notificationTime: string, repeats: boolean): Promise<string | undefined> => {
    try {
        const notificationDateTime = moment(notificationTime, 'HH:mm');
        const now = moment();
        const nowDate = moment(now, 'DD/MM/YYY hh:mm');
        const ntfDate = moment(notificationDateTime, 'DD/MM/YYY hh:mm');

        if (nowDate.diff(ntfDate, 'minutes') > 0) {
            console.log('entrou')
            notificationDateTime.add(1, 'day');
        }

        const delayInSeconds = notificationDateTime.diff(now, 'seconds');

        const notification: NotificationPayload = {
            title: 'Lembrete!',
            body: text,
        };

        const ntf = await Notifications.scheduleNotificationAsync({
            content: notification,
            trigger: {
                seconds: delayInSeconds,
                repeats: repeats || false,
            },
        });

        console.log('Notificação agendada com sucesso!');
        return ntf
    } catch (error) {
        console.error('Erro ao agendar notificação:', error);
    }
};

export { scheduleNotification }