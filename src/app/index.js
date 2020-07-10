import React from 'react';
import { Provider } from 'react-redux';

import '../scss/application.scss';
import createStore from '../redux/store';

import Routes from './components/Routes';

function App() {
  return (
    <Provider store={createStore()}>
      <Routes />
    </Provider>
  );
}

export default App;
