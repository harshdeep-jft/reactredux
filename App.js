import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Home/HomeScreen';
import InformationScreen from './components/Info/InformationScreen';
import stores from './redux/stores';
import { Provider } from 'react-redux';
import OnboardingScreen from './components/Onboarding/OnboardingScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={stores}>
      <NavigationContainer>
        <StatusBar hidden={false} style='dark' />
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
          <Stack.Screen name='Onboard' options={{ headerShown: false }} component={OnboardingScreen} />
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Information' component={InformationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
