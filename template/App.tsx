import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NewAppScreen from './src/screens/NewAppScreen';

const App = () => {
  return (
    <NavigationContainer>
      <NewAppScreen />
    </NavigationContainer>
  )
}

export default App;
