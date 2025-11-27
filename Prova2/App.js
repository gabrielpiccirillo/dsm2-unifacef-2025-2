import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import MeusCompromissos from './screens/MeusCompromissos';
import CompromissosEquipe from './screens/CompromissosEquipe';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Início' }}
        />

        <Stack.Screen 
          name="MeusCompromissos" 
          component={MeusCompromissos} 
          options={{ title: 'Meus compromissos' }}
        />

        <Stack.Screen 
          name="CompromissosEquipe" 
          component={CompromissosEquipe} 
          options={{ title: 'Compromissos da equipe' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
