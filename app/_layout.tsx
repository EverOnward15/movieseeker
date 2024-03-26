import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';
import { Slot } from 'expo-router';

import config from '../tamagui.config';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '~/queryClient';



export default function Layout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Slot/>
      </GestureHandlerRootView>
      </QueryClientProvider>
    </TamaguiProvider>
  );
}
