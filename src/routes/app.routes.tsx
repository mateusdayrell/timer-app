import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons'

import { Timer } from '../screens/App/Timer';
import { NewTimer } from '../screens/App/NewTimer';
import { Menu } from '../screens/App/Menu';
import { StackNavigationProp } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

type StackParamList = {
    Timers: any;
    'Novo timer': any;
    Menu: any;
  };
  
export type AppNavigationProp = StackNavigationProp<StackParamList, 'Timers', 'Novo timer'>;

export default function AppRoutes() {
  return (
      <Tab.Navigator screenOptions={{ 
            headerShown: false ,
            tabBarStyle:{
                backgroundColor:'#1FD761',
              },
              tabBarLabelStyle: {
                color: '#1E1E1E', // Cor do texto tabBarLabel
                fontSize: 14
              },
        }}
    >
        <Tab.Screen 
            name="Timers" 
            component={Timer}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='home' color="#1E1E1E" size={size} />,
                tabBarLabel:"Timers",
            }}
        />
        <Tab.Screen 
            name="NovoTimer" 
            component={NewTimer}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='plus' color="#1E1E1E" size={size} />,
                tabBarLabel:"Novo timer"
            }}
        />
        <Tab.Screen 
            name="Menu" 
            component={Menu} 
            options={{
                tabBarIcon: ({color, size}) => <Feather name='menu' color="#1E1E1E" size={size} />,
                tabBarLabel:"Menu"
            }}
        />
      </Tab.Navigator>
  );
}