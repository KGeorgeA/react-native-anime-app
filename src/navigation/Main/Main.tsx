import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import List from '../List/List';
import Map from '../../screens/BlankComponents/Map';
import Comments from '../../screens/BlankComponents/Comments';
import Notifications from '../../screens/BlankComponents/Notifications';

import type { MainStackParamsList } from '../../utils/types';
import MediaNavigation from '../Media/MediaNavigation';
import CustomButton from '../../ui/components/CustomButton';
import { useAppDispatch } from '../../utils/hooks';
import { toggleFilterDrawerView } from '../../store/reducer';

const Tab = createBottomTabNavigator<MainStackParamsList>();

const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  const toggleFilterDrawer = () => {
    dispatch(toggleFilterDrawerView());
  };

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
            <CustomButton
              buttonText="Filters"
              touchableComponentProps={{
                touchableOpacityProps: {
                  onPress: toggleFilterDrawer,
                  style: {
                    marginRight: 10,
                  },
                },
                viewProps: {
                  style: {
                    backgroundColor: '#109CEB',
                    padding: 5,
                  },
                },
              }}
              textStyles={{
                fontSize: 18,
                color: 'white',
              }}
            />
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
