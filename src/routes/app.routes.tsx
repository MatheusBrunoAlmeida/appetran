import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from '../pages/Dashboard';
import Vehicles from '../pages/Vehicles';
import Login from '../pages/Login';
import ScalePage from '../pages/Scale';
import InfringementPage from '../pages/Infringement';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: { backgroundColor: '#262626' },
        // cardStyle: { backgroundColor: '#ffffff' },
      }}
      initialRouteName="LoginPage"
    >
      <App.Screen 
        options={{
          headerShown:false,
          headerTransparent: true
        }}
        name="LoginPage"
        component={Login}
      />
      <App.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Dashboard"
        component={Dashboard}
      />

      <App.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Vehicles"
        component={Vehicles}
      />

      <App.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="ScalePage"
        component={ScalePage}
      />

      <App.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="InfringementPage"
        component={InfringementPage}
      />

    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;