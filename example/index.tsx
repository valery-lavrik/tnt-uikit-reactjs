import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Badge, Divider } from '../src';
import Example from '../src/Example/index';

const App = () => {
    return (
        <div style={{
            width: '500px',
            border: '1px solid red',
            margin: '0 auto',
            padding: '20px',
        }}>
            {/* <Badge children={"it is badge none status"} />
            <Divider />
            <Badge children={"it is badge success"} status={"success"} /> */}
            <Example />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
