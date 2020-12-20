import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './store/reducer/todoReducer';
import statusReducer from './store/reducer/statusReducer';


const rootReducer = combineReducers({
  todo:todoReducer,
  status:statusReducer,
})

const store= createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
