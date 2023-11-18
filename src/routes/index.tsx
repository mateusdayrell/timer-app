import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { useAppSelector } from '../hooks';

export default function Routes() {
  const user = useAppSelector((state) => state.auth?.user)
  return (
    <NavigationContainer>
      { 
        user
          ? <AuthRoutes />
          : <AppRoutes />
      }        
    </NavigationContainer>
  )
}
