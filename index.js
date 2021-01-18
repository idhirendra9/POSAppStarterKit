import React from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './src/redux/store';
import {Provider as PaperProvider} from 'react-native-paper';
import {Color} from 'ui-kit';
import Home from './src/screens/Home';
import {name as appName} from './app.json';

console.disableYellowBox = true;

export const ReduxWrapper = ({}) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <PaperProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: Color.white}}>
          <Home />
        </SafeAreaView>
      </PaperProvider>
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxWrapper);
