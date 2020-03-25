GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {Provider as ProviderX} from '@ant-design/react-native';
import store from './src/store';
import Navigator from './src/navigator';

export default function App() {
  return (
    <Provider store={store}>
      <ProviderX>
        <Navigator />
      </ProviderX>
    </Provider>
  );
}
