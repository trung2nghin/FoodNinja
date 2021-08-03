import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Start from './src/screens/Start';
import Intro from './src/screens/Intro';
import IntroNext from './src/screens/IntroNext';
import MainTab from './src/nav/MainTab';
import Filter from './src/screens/Filter';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Info from './src/screens/Info';
import Pay from './src/screens/Pay';
import Selectimg from './src/screens/Selectimg';
import Upimg from './src/screens/Upimg';
import Location from './src/screens/Location';
import Congrat from './src/screens/Congrat';
import Verification from './src/screens/Verification';
import ViaMethod from './src/screens/ViaMethod';
import Password from './src/screens/Password';
import Finish from './src/screens/Finish';
import Chat from './src/screens/Chat';
import Profile from './src/screens/Profile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Start"
          component={Start}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Intro"
          component={Intro}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="IntroNext"
          component={IntroNext}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Info"
          component={Info}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Pay"
          component={Pay}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Selectimg"
          component={Selectimg}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Upimg"
          component={Upimg}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Location"
          component={Location}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Congrat"
          component={Congrat}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Verification"
          component={Verification}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="ViaMethod"
          component={ViaMethod}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Password"
          component={Password}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Finish"
          component={Finish}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Filter"
          component={Filter}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
