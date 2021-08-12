import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from './src/screens/Onboarding';
import Intro from './src/screens/Intro';
import IntroNext from './src/screens/IntroNext';
import MainTab from './src/nav/MainTab';
import Filter from './src/screens/Filter';
import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SignIn';
import SignupProcess from './src/screens/SignupProcess';
import PaymentMethod from './src/screens/PaymentMethod';
import UploadPhoto from './src/screens/UploadPhoto';
import UploadPreview from './src/screens/UploadPreview';
import SetLocation from './src/screens/SetLocation';
import SignupSuccess from './src/screens/SignupSuccess';
import Verification from './src/screens/Verification';
import ViaMethod from './src/screens/ViaMethod';
import Password from './src/screens/Password';
import Finish from './src/screens/Finish';
import Chat from './src/screens/Chat';
import Profile from './src/screens/Profile';

export type TRootStackParamList = {
  MainTab: undefined;
  Filter: {
    name: string;
    age: number;
  };
  Onboarding: undefined;
  Intro: undefined;
  IntroNext: undefined;
  SignUp: undefined;
  SignIn: undefined;
  SignupProcess: undefined;
  PaymentMethod: undefined;
  UploadPhoto: undefined;
  UploadPreview: undefined;
  SetLocation: undefined;
  SignupSuccess: undefined;
  Verification: undefined;
  ViaMethod: undefined;
  Password: undefined;
  Finish: undefined;
  Profile: undefined;
  Chat: undefined;
};

const Stack = createStackNavigator<TRootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="IntroNext"
          component={IntroNext}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupProcess"
          component={SignupProcess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PaymentMethod"
          component={PaymentMethod}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UploadPhoto"
          component={UploadPhoto}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UploadPreview"
          component={UploadPreview}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SetLocation"
          component={SetLocation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupSuccess"
          component={SignupSuccess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ViaMethod"
          component={ViaMethod}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Password"
          component={Password}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Finish"
          component={Finish}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />
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
