import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from './components/screens/';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Screens.map((s, i) => (
          <Stack.Screen key={i} name={s.name} component={s.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
