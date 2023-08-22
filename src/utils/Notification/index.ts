import BaseNotification, { ModalItemPropsType } from './BaseNotification';

export default class Notification extends BaseNotification {
    static show(title = '', text = '', type: ModalItemPropsType['type'] = '', showTime = null) {
        Notification.update(title, text, type, showTime);
    }

    static len = () => BaseNotification.len();
}
