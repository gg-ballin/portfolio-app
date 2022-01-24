import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CustomTabBar from '../components/organisms/CustomTabBar';
import {TabNavigatorProps} from '../interfaces/tabNavigatorInterfaces';
import HomeScreen from './Secure/Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
      tabBar={(props: JSX.IntrinsicAttributes & TabNavigatorProps) => {
        return <CustomTabBar {...props} />;
      }}>
      <Tab.Screen name="Home" children={HomeScreen} />
      {/* <Tab.Screen name="Home" children={HomeStack} />
			<Tab.Screen name="Tasks" children={TasksStack} />
			<Tab.Screen name="Notifications" children={NotificationsStack} />
			<Tab.Screen name="FarmTools" children={FarmToolsStack} /> */}
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Secured" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
