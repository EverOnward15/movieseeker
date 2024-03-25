import { Text, View } from 'react-native'
import React from 'react'
import Drawer from 'expo-router/drawer';
import { colorTokens } from '@tamagui/themes';

const Layout = () => {
  return (
    <Drawer screenOptions={{
        headerShown: true,
        drawerHideStatusBarOnOpen: true,
        drawerActiveBackgroundColor: colorTokens.dark.blue.blue6,
        drawerActiveTintColor: "#fff",
    }}>
        <Drawer.Screen name="(home)" options={{
            title: "Movie Seeker",
            headerShown: false,
        }}/>
        <Drawer.Screen name="(favorites)" options={{}}/>
    </Drawer>
  )
}

export default Layout