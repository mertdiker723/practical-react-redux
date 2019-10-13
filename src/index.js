import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from "react-redux";

import counterReducer from "./components/reducers/counter.js";
import reducerReducer from "./components/reducers/result.js";

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: reducerReducer
})

const store = createStore(rootReducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));