import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stack from '../Stacknav/Stack';

/**
 * @author
 * @function @RootNav
 **/

const RootNav: FC = () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default RootNav;
