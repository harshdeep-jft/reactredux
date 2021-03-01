import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Home/HomeScreen';
import InformationScreen from './components/Info/InformationScreen';
import stores from './redux/stores';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={stores}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Information' component={InformationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
