import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { default as theme } from './assets/custom-theme.json'
import { default as mapping } from './assets/mapping.json'
import HomeScreen from './components/Home/HomeScreen';
import InformationScreen from './components/Info/InformationScreen';
import stores from './redux/stores';
import { Provider } from 'react-redux';
import OnboardingScreen from './components/Onboarding/OnboardingScreen';
import LoginScreen from './components/Register/Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={stores}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }} customMapping={mapping}>
        <NavigationContainer>
          <StatusBar style='dark' translucent={false} />
          <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerShown: false }}>
            <Stack.Screen name='Onboard' options={{ headerShown: false }} component={OnboardingScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Information' component={InformationScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
  );
}
