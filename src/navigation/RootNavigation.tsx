import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import Main from './Main';
import Login from '../screens/Login';

import { RootStackParamsList } from '../utils/types';

const RootStack = createNativeStackNavigator<RootStackParamsList>();

interface RoutesProps {
  routeName: keyof RootStackParamsList;
  component: React.ComponentType<React.FC>;
  options?: NativeStackNavigationOptions;
}

const rootRoutes: RoutesProps[] = [
  {
    routeName: 'Auth',
    component: Login,
  },
  {
    routeName: 'Main',
    component: Main,
  },
];

export const RootNavigation = () => {
  return (
    <RootStack.Navigator initialRouteName="Auth">
      {
        rootRoutes.map(
          ({ routeName, component, options = { headerShown: false } }, index) => {
            return (
              <RootStack.Screen
                key={index}
                name={routeName}
                component={component}
                options={options}
              />
            );
          },
        )
      }
    </RootStack.Navigator>
  );
};
