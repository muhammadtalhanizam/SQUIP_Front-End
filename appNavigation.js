// In App.js in a new project

import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react'
// import database from '@react-native-firebase/database';
// import Icon from ''
// import Product from './singleProduct';
import SplashScreen from './screens/splashscreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/home';
import styles from './screens/style';
import Login from './screens/login';
import Signup from './screens/signup';
// import ProductDetails from './screens/ambulance';
// import Favorite from './screens/favorite';
// import Bag from './screens/bag';
// import Order from './screens/orderRecieved';
// import Menu from './screens/menu';
import Profile from './screens/profile';
import Ambulance from './screens/ambulance';
import Police from './screens/police';
import Firebrigade from './screens/firebrigade';
import AdminHome from './screens/adminhome';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeBottomNavigator = ({ navigation, route }) => {
  let obj = route.params
  console.log(obj)
  return (
    <Tab.Navigator
    screenOptions={
      {
        tabBarActiveTintColor:styles._red,
        // tabBarShowLabel:false
      }
    }
    >
      <Tab.Screen name="HomeStack" 
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: styles._danger,
          },
          headerShown: false,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        component={UserStackScreen} />
     
      <Tab.Screen name="Profile"

        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: styles._danger,

          },
          headerShown: false,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
        component={Profile} />
    </Tab.Navigator>
  );
}

const AdminBottomNavigator = ({ navigation, route }) => {
  let obj = route.params
  console.log(obj)
  return (
    <Tab.Navigator
    screenOptions={
      {
        tabBarActiveTintColor:styles._red,
        // tabBarShowLabel:false
      }
    }
    >
      <Tab.Screen name="HomeStack" 
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: styles._danger,
          },
          headerShown: false,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        component={AdminHome} />
     
      <Tab.Screen name="Profile"

        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: styles._danger,

          },
          headerShown: false,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
        component={Profile} />
    </Tab.Navigator>
  );
}
const UserStackScreen = () => {

  return (
    <Stack.Navigator
    >
      <Stack.Screen options={{
        title: 'Home',
        headerStyle: {
          backgroundColor: styles._danger,
        },
        headerTintColor: '#fff',
        headerShown:false,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="Home" component={Home} />

        <Stack.Screen options={{
        title: 'Firebrigade',
        headerStyle: {
          backgroundColor: styles._danger,
        },
        headerTintColor: '#fff',
        // headerShown:false,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="firebrigade" component={Firebrigade} />
          <Stack.Screen options={{
        title: 'Police',
        headerStyle: {
          backgroundColor: styles._danger,
        },
        headerTintColor: '#fff',
        // headerShown:false,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="police" component={Police} />
          <Stack.Screen options={{
        title: 'Ambulance',
        headerStyle: {
          backgroundColor: styles._danger,
        },
        headerTintColor: '#fff',
        // headerShown:false,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="ambulance" component={Ambulance} />
       
    </Stack.Navigator>
  );
}



function AppNavigation() {
  return (<>

    <NavigationContainer >

      <Stack.Navigator
        screenOptions={{
          // headerShown: false
        }}>
        <Stack.Screen options={{
          // title: 'My home',
          headerStyle: {
            backgroundColor: 'royalblue',
          },
          headerShown: false,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // tabBarIcon: ({ color, size }) => (
          //   <Icon name="home" color={color} size={size} />
          // ),
        }}
          name="SplashScreen" component={SplashScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="BottomNav" component={HomeBottomNavigator} />
        <Stack.Screen options={{ headerShown: false }} name="adminBottomNav" component={AdminBottomNavigator} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
        {/* <Stack.Screen name="Bus" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  </>
  );
}

export default AppNavigation;