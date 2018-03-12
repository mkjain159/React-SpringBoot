import React from 'react';
import ReactDOM from 'react-dom';
import {
  AppContainer
} from 'react-hot-loader';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from './stores';
import Home from './containers/Home';
import fetchIntercept from 'fetch-intercept';
let initialState = {

  "view":"home"
};

const store = configureStore(initialState);

render(

    <Provider store={store}>
      <Home/>
    </Provider>
  ,  document.getElementById('Home')
)
