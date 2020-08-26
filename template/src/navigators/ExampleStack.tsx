import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ExampleScreen, NewAppScreen } from 'screens'
import { ExampleStackParamList } from 'types'

const { Navigator, Screen } = createStackNavigator<ExampleStackParamList>()

export const ExampleStack = () => {
  return (
    <Navigator>
      <Screen name="NewApp" component={NewAppScreen} />
      <Screen name="Example" component={ExampleScreen} />
    </Navigator>
  )
}
