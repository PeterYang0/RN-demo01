// GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';

import {ToastComponent} from './src/utils/toast';
import store from './src/store';
import Navigator from './src/navigator';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
      <ToastComponent />
    </Provider>
  );
}
