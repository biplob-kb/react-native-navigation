/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import Contact from './screens/Contact';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';
import ServiceDetails from './screens/ServiceDetails';

// Define RootStackParamList without including HomeStack as a route
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Profile: undefined;
  Contact: undefined;
  ServiceDetails: {service: IService};
  TabNavigator: undefined;
};

// Create Stack and Tab Navigators
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

// HomeStack for Home and ServiceDetails screens
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ServiceDetails"
        component={ServiceDetails}
      />
    </Stack.Navigator>
  );
};

// Tab Navigator including HomeStack
const TabNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000750',
          borderTopWidth: 0,
          elevation: 10,
          shadowOpacity: 10,
          paddingVertical: 2,
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#7f8c8d',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'call' : 'call-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
};

// Main App component with Root Stack
const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigator">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
