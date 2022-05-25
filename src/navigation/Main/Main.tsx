import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import List from '../List/List';
import Map from '../../screens/BlankComponents/Map';
import Search from '../../screens/BlankComponents/Search';
import Comments from '../../screens/BlankComponents/Comments';
import Notifications from '../../screens/BlankComponents/Notifications';

import type { MainStackParamsList } from '../../utils/types';
import MediaNavigation from '../Media/MediaNavigation';

const Tab = createBottomTabNavigator<MainStackParamsList>();

const Main: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="List"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            List: {
              focused: 'home',
              main: 'home-outline',
            },
            Map: {
              focused: 'compass',
              main: 'compass-outline',
            },
            Media: {
              focused: 'camera',
              main: 'camera-outline',
            },
            Search: {
              focused: 'search',
              main: 'search-outline',
            },
            Comments: {
              focused: 'chatbubbles',
              main: 'chatbubbles-outline',
            },
            Notifications: {
              focused: 'notifications',
              main: 'notifications-outline',
            },
          };

          const icon = icons[route.name];
          return <Ionicons name={focused ? icon.focused : icon.main} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#109CEB',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        // header: (props) => (<Header {...props} />),
      })}
    // tabBar={(props) => (<Footer {...props} />)}
    >
      <Tab.Screen
        name="List"
        component={List}
        options={{
          title: 'List',
          headerRight: () => (
            // eslint-disable-next-line no-console
            <Button title="Filter" color="#109CEB" onPress={() => console.log('hi')} />
          ),
        }}
      />

      <Tab.Screen
        name="Map"
        component={Map}
        options={{ title: 'Map' }}
      />

      <Tab.Screen
        name="Media"
        component={MediaNavigation}
        options={{ title: 'Media' }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{ title: 'Search' }}
      />

      <Tab.Screen
        name="Comments"
        component={Comments}
        options={{ title: 'Commentaries' }}
      />

      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{ title: 'Notifications' }}
      />
    </Tab.Navigator>
  );
};
export default Main;
