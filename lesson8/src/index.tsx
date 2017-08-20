import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {  BrowserRouter as Router, Route/*, Link*/ } from 'react-router-dom';

import {store} from './reducers/store';

import App from './containers/app/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route path="/" component={App}/>
      </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
