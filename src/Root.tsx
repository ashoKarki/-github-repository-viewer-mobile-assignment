import React, {FC} from 'react';
import RootNav from './navigator/Rootnav/Rootnav';
import {Provider} from 'react-redux';
import {persistor, store} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {PaperProvider} from 'react-native-paper';

interface IProps {}

/**
 * @author Ashok karki
 * @function @Root
 **/

const Root: FC<IProps> = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <PersistGate persistor={persistor}>
          <RootNav />
        </PersistGate>
      </PaperProvider>
    </Provider>
  );
};

export default Root;
