import React from 'react';
import { CrossIcon } from '../../icons';

import Modal from '.';

import './index.scss';

export type OneModatPropsType = {
    children?: React.ReactNode;
    className?: string;
    close?: (() => void) | null;
};

type OneModatStateType = {
    modals: OneModatPropsType[];
};

const MODAL_INITIAL: OneModatPropsType = {
    children: null,
    className: '',
    close: () => {},
};

// export default class BaseModal extends Component {
// Не делать PureComponent! При изменении количества модалок в массиве компонент не перерендеривается
export default class BaseModal extends React.Component<OneModatPropsType, OneModatStateType> {
    static item: any = null;

    constructor(props: OneModatPropsType) {
        super(props);
        this.state = { modals: [] };
        BaseModal.item = this;
    }

    static update(
        children: OneModatPropsType['children'],
        className: OneModatPropsType['className'] = '',
        close: OneModatPropsType['close'] = () => {}
    ) {
        let modals = BaseModal.item.state.modals as OneModatPropsType[];

        if (!children) return;

        modals.push({
            children,
            className,
            close,
        });

        BaseModal.item.setState({
            modals,
        });
    }

    // получить последнюю модалку
    getLastModal() {
        const { modals } = this.state;
        return modals.length ? modals[modals.length - 1] : MODAL_INITIAL;
    }

    // удалить последнюю модалку из массива компанент
    closeLastModal() {
        const modals = BaseModal.item.state.modals as OneModatPropsType[];
        const { close } = this.getLastModal();

        if (typeof close === 'function') close();

        modals.pop();

        return BaseModal.item.setState({
            modals,
        });
    }

    // удалить все модалки
    closeAllModal() {
        const modals = BaseModal.item.state.modals as OneModatPropsType[];

        // нужно вызвать коллбек закрытия каждой модалки в обратном порядке
        for (let m = modals.length - 1; m >= 0; m--) {
            // @ts-ignore
            if (typeof modals[m].close === 'function') modals[m].close();
        }

        return BaseModal.item.setState({
            modals: [],
        });
    }

    static hide(hideAllModals = false) {
        if (hideAllModals) return BaseModal.item.closeAllModal();
        else {
            if (BaseModal.item) return BaseModal.item.closeLastModal();
        }
    }

    static len = () => BaseModal?.item?.state?.modals?.length || 0;

    render() {
        if (!this.state.modals.length) return null;

        return this.state.modals.map((modal, key) => {
            const { className, children, close } = modal;

            return (
                <div key={key} className={'modal_wrapper ' + className}>
                    <div className="modal_wrapper__box">
                        {!!close && (
                            <CrossIcon
                                className="modal_wrapper__close"
                                onClick={() => {
                                    BaseModal.item.closeLastModal();
                                    close();
                                    Modal.wrapperCloseHandler();
                                }}
                            />
                        )}

                        <div className="modal_wrapper__content">{!!children && children}</div>
                    </div>
                </div>
            );
        });
    }
}
