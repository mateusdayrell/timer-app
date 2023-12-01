import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { SignUp } from '../screens/Auth/SignUp';
import { SignIn } from '../screens/Auth/SignIn';
import { StackNavigationProp } from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

type StackParamList = {
  SignIn: any;
  SignUp: any;
};

export type AuthNavigationProp = StackNavigationProp<StackParamList, 'SignUp', 'SignIn'>;

export default function AuthRoutes() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen 
            name="SignIn" 
            component={SignIn}
        />
        <Stack.Screen 
            name="SignUp" 
            component={SignUp}
        />
      </Stack.Navigator>
  );
}