import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import App from './js/App';
import AppReducer from './js/reducers/app.reducer';
import registerServiceWorker from './js/registerServiceWorker';
import './css/index.css';

const appStore = createStore(AppReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={appStore}>
        <Router>
            <Route component={App} path="/" />
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
