import React from 'react';
import BaseModal, { OneModatPropsType } from './BaseModal';
import { Loader } from '../../components/Loader';
import $ from 'jquery';

import Divider from '../../components/Divider';
import Button from '../../components/Button';

import './index.scss';

export default class Modal extends BaseModal {
    static wrapperCloseHandler(onClose: OneModatPropsType['close'] = null, closeByOusideClick: boolean = true) {
        if (!BaseModal.item.state.modals.length) {
            $(document).off('keydown');
            $('body').off('click', '.modal_wrapper').css('overflow', 'unset');
        } else {
            $('body').css('overflow', 'hidden');
            if (!!onClose) {
                // Escape press
                $(document)
                    .off('keydown')
                    .on('keydown', (e) => {
                        if (e.code === 'Escape') {
                            Modal.hide();
                            Modal.wrapperCloseHandler();
                        }
                    });

                //	outside click
                if (closeByOusideClick) {
                    $('body')
                        .off('click')
                        .on('click', '.modal_wrapper', (e) => {
                            if (e.target && e.target.contains(e.currentTarget)) {
                                Modal.hide();
                                Modal.wrapperCloseHandler();
                            }
                        });
                }
            }
        }
    }

    // кастомный alert
    static alert(title: string, msg: string, onOk: () => void = () => {}) {
        Modal.update(
            <div>
                <h2>{title}</h2>
                <p>{msg}</p>
                <Divider style={{ padding: '2.5rem 0' }} />

                <div className="modal_buttons">
                    <Button
                        onClick={() => {
                            Modal.hide();
                            onOk();
                        }}
                    >
                        OK
                    </Button>
                </div>
            </div>,
            'center',
            null
        );
    }

    // кастомный confirm
    static confirm(title: string, msg: string, onOk: () => void = () => {}, onCancel: () => void = () => {}) {
        Modal.update(
            <div>
                <h2>{title}</h2>
                <p>{msg}</p>
                <Divider style={{ padding: '2.5rem 0' }} />

                <div className="modal_buttons">
                    <Button
                        onClick={() => {
                            Modal.hide();
                            onOk();
                        }}
                    >
                        OK
                    </Button>
                    <Button
                        onClick={() => {
                            Modal.hide();
                            onCancel();
                        }}
                        secondary
                    >
                        Отмена
                    </Button>
                </div>
            </div>,
            'center',
            null
        );
    }

    //	модалка загрузки...
    static loading(msg: string = '', onClose = () => {}, className = '') {
        Modal.update(<Loader label={msg} />, className, onClose);
    }

    static component(
        children: OneModatPropsType['children'],
        className: OneModatPropsType['className'] = '',
        onClose: OneModatPropsType['close'] = null,
        closeByOusideClick = true
    ) {
        Modal.wrapperCloseHandler(onClose, closeByOusideClick);
        BaseModal.update(children, className, onClose);
        Modal.wrapperCloseHandler(onClose, closeByOusideClick);
    }

    static async hide(hideAllModals = false) {
        await super.hide(hideAllModals);
        Modal.wrapperCloseHandler();
    }

    static len = () => BaseModal.len();
}
