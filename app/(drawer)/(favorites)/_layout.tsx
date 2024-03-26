import React from 'react'
import { Stack } from 'expo-router'
import { DrawerToggleButton } from '@react-navigation/drawer'
import { useTheme } from 'tamagui'

const Layout = () => {
    const theme = useTheme();
  return (
    <Stack screenOptions={{
        headerStyle: {
            backgroundColor: theme.blue7.get(),
        },
        headerTintColor: "#fff",
    }}>
        <Stack.Screen name="favorites" options={{
            title: "My Favorites",
            headerLeft: () => <DrawerToggleButton tintColor='#fff'/>,
        }}></Stack.Screen>

        <Stack.Screen name="(movie)/[id]" options={{
            title: "",
        }}></Stack.Screen>

        <Stack.Screen name="(tv)/[id]" options={{
            title: "",
        }}></Stack.Screen>
    </Stack>
  )
}

export default Layout