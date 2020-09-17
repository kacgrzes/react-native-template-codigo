import React from 'react'
import { Text } from 'react-native'
import { getBuildNumber, getVersion } from 'react-native-device-info'

const version = getVersion()
const buildNumber = getBuildNumber()

export const Version = () => (
  <Text>
    {version} ({buildNumber})
  </Text>
)
