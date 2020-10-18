import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import Navigator from './navigators';

const store = createStore(reducer);

export default function Root() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
