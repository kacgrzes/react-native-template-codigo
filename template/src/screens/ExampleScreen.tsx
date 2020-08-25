import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { ExampleScreenProps } from 'types';

export const ExampleScreen = (props: ExampleScreenProps) => {
  return (
    <View>
      <Pressable onPress={() => props.navigation.goBack()}>
        <Text>Hello from {props.route.params.param1}</Text>
      </Pressable>
    </View>
  );
};
