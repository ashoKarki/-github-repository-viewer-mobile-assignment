import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../../screens';
import {MainParamsList} from '../../../types/navigation';

/**
 * @author Ashok Karki
 * @function @Stack
 **/

const StackNav = createStackNavigator<MainParamsList>();
const Stack: FC = () => {
  return (
    <StackNav.Navigator
      screenOptions={{headerShown: false, gestureEnabled: true}}>
      <StackNav.Screen name="Home" component={Home} />
    </StackNav.Navigator>
  );
};

export default Stack;
