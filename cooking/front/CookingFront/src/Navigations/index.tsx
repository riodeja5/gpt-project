import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, RecommendScreen } from '../Screens';
import { GraphqlTestScreen } from '../Screens/graphqlTest';

type RootStackParamList = {
  Home: undefined;
  本日のおすすめメニュー: undefined;
  Tab: undefined;
  Graphqlテスト: undefined;
}
export type RootStackNavProp<T extends keyof RootStackParamList> = NativeStackNavigationProp<RootStackParamList, T>

type TabParamList = {
  Tab1: undefined;
  Tab2: undefined;
  NestNavigator: undefined;
}

type NestStackParamList = {
  Tab3: undefined;
  Recommend: undefined;
}
export type NestStackNavProp<T extends keyof NestStackParamList> = NativeStackNavigationProp<NestStackParamList, T>

const HomeStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();
const NestStack = createNativeStackNavigator<NestStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName="Home">
        <HomeStack.Screen 
          name="Home"
          component={HomeScreen} 
        />
        <HomeStack.Screen
          name="本日のおすすめメニュー"
          component={RecommendScreen}
        />
        <HomeStack.Screen
          name="Graphqlテスト"
          component={GraphqlTestScreen}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
