import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import List from '../List/List';
import Map from '../../screens/BlankComponents/Map';
import Comments from '../../screens/BlankComponents/Comments';
import Notifications from '../../screens/BlankComponents/Notifications';
import HeaderRightButton from '../../ui/components/HeaderRightButton';

import CONSTANTS from '../../utils/constants';
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
        tabBarActiveTintColor: CONSTANTS.COLORS.PRIMARY.MAIN,
        tabBarInactiveTintColor: CONSTANTS.COLORS.GRAY,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      })}
      // tabBar={() => {
      //   return (
      //     <View style={{ backgroundColor: 'lime', height: 200 }}>
      //       <Text>
      //         TEEEEEST
      //       </Text>
      //     </View>
      //   );
      // }}
    >
      <Tab.Screen
        name="List"
        component={List}
        options={{
          title: 'List',
          headerRight: HeaderRightButton,
        }}
      />

      <Tab.Screen
        name="Map"
        component={Map}
        options={{ title: 'Map', headerShown: false, tabBarShowLabel: false }}
      />

      <Tab.Screen
        name="Media"
        component={MediaNavigation}
        options={{ title: 'Media' }}
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
