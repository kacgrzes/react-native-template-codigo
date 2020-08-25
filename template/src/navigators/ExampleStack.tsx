import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewAppScreen from '../screens/NewAppScreen';
import ExampleScreen from '../screens/ExampleScreen';
import { ExampleStackParamList } from '../types';

const { Navigator, Screen } = createStackNavigator<ExampleStackParamList>();

const ExampleStack = () => {
  return (
    <Navigator>
      <Screen name='NewApp' component={NewAppScreen} />
      <Screen name='Example' component={ExampleScreen} />
    </Navigator>
  )
}

export default ExampleStack;
