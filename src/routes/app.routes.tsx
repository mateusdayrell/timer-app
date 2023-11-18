import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons'

import { Timer } from '../screens/App/Timer';
import { NewTimer } from '../screens/App/NewTimer';
import { Menu } from '../screens/App/Menu';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen 
            name="Timers" 
            component={Timer}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size} />,
                tabBarLabel:"Timers"
            }}
        />
        <Tab.Screen 
            name="Novo timer" 
            component={NewTimer}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='plus' color={color} size={size} />,
                tabBarLabel:"Novo timer"
            }}
        />
        <Tab.Screen 
            name="Menu" 
            component={Menu} 
        />
      </Tab.Navigator>
  );
}