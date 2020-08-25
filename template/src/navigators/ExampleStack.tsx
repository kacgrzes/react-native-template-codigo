import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewAppScreen from '../screens/NewAppScreen';
import ExampleScreen from '../screens/ExampleScreen';

const { Navigator, Screen } = createStackNavigator();

const ExampleStack = () => {
  return (
    <Navigator>
      <Screen name='NewApp' component={NewAppScreen} />
      <Screen name='Example' component={ExampleScreen} />
    </Navigator>
  )
}

export default ExampleStack;
