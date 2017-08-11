import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Spinner from './Spinner';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Spinner />, document.getElementById('intro'));
registerServiceWorker();
