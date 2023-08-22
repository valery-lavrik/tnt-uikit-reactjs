import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Example from '../src/Example/index';

const App = () => {
    return (
        <div style={{
            // width: '500px',
            // border: '1px solid red',
            // margin: '0 auto',
            // padding: '20px',
        }}>
            <Example />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
