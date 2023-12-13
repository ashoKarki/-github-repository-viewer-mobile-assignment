import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Root from './src/Root';

interface IProps {
  name: string;
}

/**
 * @author Ashok karki
 * @function @App
 **/

const App: FC<IProps> = ({name}) => {
  return <Root />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
