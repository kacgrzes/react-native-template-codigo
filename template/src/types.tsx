import { StackScreenProps } from '@react-navigation/stack'

export type ExampleStackParamList = {
  NewApp: undefined,
  Example: {
    param1: string
  },
}

export type NewAppScreenProps = StackScreenProps<ExampleStackParamList, 'NewApp'>
export type ExampleScreenProps = StackScreenProps<ExampleStackParamList, 'Example'>