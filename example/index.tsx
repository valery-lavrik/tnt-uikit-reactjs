import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Example from '../src/Example/index';
import Modal from '../src/utils/Modal';
import Notification from '../src/utils/Notification';

import '../src/scss/main.scss';
import './index.scss';

const App = () => {

    return (
        <>
            <div className="page-wrapper">
                {/* <MenuNavigation Routes={Routes} /> */}
                <div className="page-wrapper__content">
                    <div className="page-wrapper__head">
                        <h2>Тестирование компонент</h2>
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
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
