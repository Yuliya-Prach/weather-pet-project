import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Reducers/weather';
import MainPage from './Pages/MainPage';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <MainPage/>
    </Provider>,
    document.getElementById('root'))
;

