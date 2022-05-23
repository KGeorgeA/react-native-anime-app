import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CardList from '../../screens/CardList';
import Anime from '../../screens/Anime';

import { ListStackParamsList } from '../../utils/types';

const RootStack = createNativeStackNavigator<ListStackParamsList>();

const List: React.FC = () => {
  return (
    <RootStack.Navigator initialRouteName="CardList">
      <RootStack.Screen
        name="CardList"
        component={CardList}
        options={{ headerShown: false }}
      />

      <RootStack.Screen
        name="Anime"
        component={Anime}
        options={{ headerShown: false }}
      />
  </RootStack.Navigator>
  );
};

export default List;
