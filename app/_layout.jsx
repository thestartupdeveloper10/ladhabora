import React from 'react'
import { Text } from 'react-native'
import { Stack } from "expo-router";

function RootLayout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout