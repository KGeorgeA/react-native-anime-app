import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import CardList from '../../screens/CardsList/CardList';
import Map from '../../screens/BlankComponents/Map';
import CameraScreen from '../../screens/CameraScreen/CameraScreen';
import Search from '../../screens/BlankComponents/Search';
import Comments from '../../screens/BlankComponents/Comments';
import Notifications from '../../screens/BlankComponents/Notifications';

import { MainStackParamsList } from '../../utils/types';

const Tab = createBottomTabNavigator<MainStackParamsList>();

const Main: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            CardList: {
              focused: 'home',
              main: 'home-outline',
            },
            Map: {
              focused: 'compass',
              main: 'compass-outline',
            },
            Camera: {
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
        name="CardList"
        component={CardList}
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
        name="Camera"
        component={CameraScreen}
        options={{ title: 'Camera' }}
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
