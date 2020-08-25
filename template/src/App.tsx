import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ExampleStack } from 'navigators/ExampleStack';

const App = () => {
  return (
    <NavigationContainer>
      <ExampleStack />
    </NavigationContainer>
  );
};

export default App;
