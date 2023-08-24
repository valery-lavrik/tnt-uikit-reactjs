// UI Kit
// https://www.figma.com/file/a9nmr5CbQqNOoCchflDJxV/%D0%9C%D0%9A%D0%92%D0%9F-UI-%D0%9A%D0%98%D0%A2?type=design&node-id=3448%3A5912&mode=design&t=KyRMMe4E8AF6syqK-1

// Иконки
// https://www.figma.com/file/dXjrLWZXtCBZr9jnqJkOGq/%5BTNT%5D-Icon-pack?type=design&node-id=1%3A4302&mode=design&t=3DPoiFgu0ZCgifIO-1

// Макеты
// https://www.figma.com/file/wpjceM2GH3eXc6uKYQHn3k/Оркестратор-2.0?type=design&node-id=0-1&mode=design&t=qE78SJslnHZd5Dck-0

// Цветовая палитра
// https://www.figma.com/file/N3fcmglAoURnMDKuMohx0A/%5BTNT%5D-Color-Theme-(White%2BDark)?type=design&node-id=49-25203&mode=design&t=dlBT1Dyl4vYxtYUr-0

import React from 'react';
import ReactDOM from 'react-dom/client';
import Example from './Example/index';
import Modal from './utils/Modal';
import Notification from './utils/Notification';

import './scss/main.scss';
import './index.scss';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <div className="page-wrapper">
            {/* <MenuNavigation Routes={Routes} /> */}
            <div className="page-wrapper__content">
                <div className="page-wrapper__head">
                    <h2>TNT - UIKIT</h2>
                    {/* {!!headerButton && (
                        <Button style={{ marginLeft: '2rem' }} secondary onClick={(e) => headerButton(e)}>
                            <PlusIcon /> Добавить
                        </Button>
                    )} */}
                    {/* <MenuUser style={{ marginLeft: 'auto' }} /> */}
                </div>

                <Example />

            </div>
        </div>

        <Modal />
        <Notification />
    </React.StrictMode>
);