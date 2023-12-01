import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { useAppSelector } from '../hooks';
import React from 'react';
import { User } from '../store/reducers/authSlice';

// mateus@email.co
// password
// 95YiOyIPzVBImX8B
export default function Routes() {
  const user = useAppSelector((state) => state.auth?.user as User | undefined)
  console.log(user)
  return (
    <NavigationContainer>
      { 
        user?.id
          ? <AppRoutes />
          : <AuthRoutes />
      }        
    </NavigationContainer>
  )
}
