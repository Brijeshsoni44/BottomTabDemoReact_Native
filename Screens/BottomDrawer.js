// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import 'react-native-gesture-handler';

import * as React from 'react';
import { View, Text, SafeAreaView,Image } from 'react-native';


// import
//  MaterialCommunityIcons
// from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import HomeScreen from './Screens/BottomDrawerScreen/HomeScreen';
import ProfileScreen from './Screens/BottomDrawerScreen/ProfileScreen'
import Journal from './Screens/BottomDrawerScreen/Journal';
import Profile from './Screens/BottomDrawerScreen/Profile';
import Community from './Screens/BottomDrawerScreen/Community'
import SelfHelp from './Screens/BottomDrawerScreen/SelfHelp'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Page' }}/>

      </Stack.Navigator>
  );
}



function JorunalStack() {
  return (
    <Stack.Navigator
      initialRouteName="Journal"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b'},
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
        

      }}>
      
      <Stack.Screen
        name="Journal"
        component={Journal}
        options={{ title: 'Journal' }}/>
    </Stack.Navigator>
    
  );
}


function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b'},
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Profile' }}/>
    </Stack.Navigator>
  );
}

function SelfHelpStack() {
  return (
    <Stack.Navigator
      initialRouteName="SelfHelp"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b'},
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="SelfHelp"
        component={SelfHelp}
        options={{ title: 'SelfHelp' }}/>
    </Stack.Navigator>
  );
}

function CommunityStack() {
  return (
    <Stack.Navigator
      initialRouteName="Community"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b'},
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Community"
        component={Community}
        options={{ title: 'Community' }}/>
    </Stack.Navigator>
  );
}



function BottomDrawer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>

       <Tab.Screen
          name="JournaStack"
          component={JorunalStack}
          options={{
            tabBarLabel: 'Journal',
            tabBarIcon: ({ color }) => (
              <Image
              style={{width:25,height:25}}
                source={require('./journal.png')                  
                }/>
              )
            }} />  
       <Tab.Screen
          name="CommunityStack"
          component={CommunityStack}
          options={{
            tabBarLabel: 'Community',
            tabBarIcon: ({ color }) => (
              <Image
              style={{width:25,height:25}}
                source={require('./community.png')                  
                }/>
              )
          }} />
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Image
              style={{width:25,height:25}}
                source={require('./home.png')                  
                }/>
           )
          }}  />


   <Tab.Screen
          name="SelfHelpStack"
          component={SelfHelpStack}
          options={{
            tabBarLabel: 'SelfHelp',
            tabBarIcon: ({ color }) => (
              <Image
              style={{width:25,height:25}}
                source={require('./self_help.png')                  
                }/>
                )
          }} />   


        

      <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <Image
              style={{width:25,height:25}}
                source={require('./Profile_img.png')                  
                }/>
           )
          }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default BottomDrawer;