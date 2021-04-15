import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// redux
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import rootReduicer from './services/Reduicers/index'

const store = createStore(rootReduicer)
console.log("STORE",store)
//

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('root')
);
