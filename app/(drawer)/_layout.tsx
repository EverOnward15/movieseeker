import { Text, View } from 'react-native'
import React from 'react'
import Drawer from 'expo-router/drawer';
import {colorTokens } from '@tamagui/themes';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const Layout = () => {
  return (
    <Drawer initialRouteName="(home)" screenOptions={{
        headerShown: true,
        drawerHideStatusBarOnOpen: false,
        drawerActiveBackgroundColor: colorTokens.dark.blue.blue6,
        drawerActiveTintColor: "#fff",
        drawerLabelStyle: {marginLeft: -20},
    }}>
        <Drawer.Screen name="(home)" options={{
            title: "Movie Seeker",
            headerShown: false,
            drawerIcon: ({ color, size }) => 
                <FontAwesome5 name="home" size={24} color={colorTokens.light.blue.blue8} />,
        }}/>
        <Drawer.Screen name="(favorites)" options={{
            title: "My Favorites",
            headerShown: false,
            drawerIcon: ({ color, size }) => 
            <MaterialIcons name="favorite" size={24} color="red" />,
        }}/>
    </Drawer>
  )
}

export default Layout