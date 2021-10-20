import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: { backgroundColor: '#262626' },
      }}
      initialRouteName="Dashboard"
    >
      <App.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Dashboard"
        component={Dashboard}
      />
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;