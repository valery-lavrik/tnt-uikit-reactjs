import React from 'react';
import { CloseSmIcon, House01Icon } from '../../icons';

import './index.scss';

export type ModalItemPropsType = {
    title?: string;
    text?: string;
    type?: '' | 'error' | 'info';
    ind?: number;
};

type ModalItemStateType = {
    modals: ModalItemPropsType[];
};

const MODAL_INITIAL: ModalItemPropsType = {
    title: '',
    text: '',
    type: '',
};

const timeOutDescriptions: { [key: number]: NodeJS.Timeout } = {};

// Не делать PureComponent! При изменении количества модалок в массиве компонент не перерендеривается
export default class BaseNotification extends React.Component<ModalItemPropsType, ModalItemStateType> {
    static item: any;

    constructor(props: ModalItemPropsType) {
        super(props);
        this.state = { modals: [] };
        BaseNotification.item = this;
    }

    static update(title: string, text: string, type: ModalItemPropsType['type'] = '', showTime = null) {
        const { modals } = BaseNotification.item.state;

        modals.push({
            text,
            title,
            type,
            ind: modals.length,
        });

        BaseNotification.item.setState({
            modals,
        });

        // закрытие по таймеру
        const ind = modals.length - 1;

        timeOutDescriptions[ind] = setTimeout(() => {
            BaseNotification.item.closeModalByInd(ind);
        }, showTime || 5000);
    }

    // получить последнюю модалку
    getLastModal() {
        const { modals } = this.state;
        return modals.length ? modals[modals.length - 1] : MODAL_INITIAL;
    }

    // удалить последнюю модалку из массива компанент
    closeLastModal() {
        const { modals } = BaseNotification.item.state;

        modals.pop();

        BaseNotification.item.setState({
            modals,
        });
    }

    closeModalByInd(i: number) {
        let modals = BaseNotification.item.state.modals as ModalItemPropsType[];

        modals = modals.filter((a) => a.ind !== i);

        clearTimeout(timeOutDescriptions?.[i]);

        BaseNotification.item.setState({
            modals,
        });
    }

    // удалить все модалки
    closeAllModal() {
        BaseNotification.item.setState({
            modals: [],
        });
    }

    static hide(hideAllModals = false) {
        if (hideAllModals) BaseNotification.item.closeAllModal();
        else {
            if (BaseNotification.item) BaseNotification.item.closeLastModal();
        }
    }

    static len = () => BaseNotification.item.state.modals.length || 0;

    render() {
        if (!this.state.modals.length) return null;
        const modals = [...this.state.modals];

        return (
            <div className="notify">
                {modals.reverse().map((modal: ModalItemPropsType) => {
                    const { text, title, type, ind } = modal;

                    return (
                        <div key={ind} className={'notify__item ' + type}>
                            {type === '' && (
                                <div className="notify__icon">
                                    <House01Icon />
                                </div>
                            )}
                            {type === 'error' && (
                                <div className="notify__icon notify__icon--error">
                                    <CloseSmIcon />
                                </div>
                            )}
                            {type === 'info' && (
                                <div className="notify__icon notify__icon--info">
                                    <House01Icon />
                                </div>
                            )}
                            <div className="notify__content">
                                <span className="notify__close" onClick={() => BaseNotification.item.closeModalByInd(ind)}>
                                    <CloseSmIcon />
                                </span>

                                {!!title && <h2 className="notify__title">{title}</h2>}
                                {!!text && <p>{text}</p>}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
