import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { History } from './History.screen';
import { Home } from './Home.screen';
import { Analytics } from './Analytics.screen';
import { AnaliticsIcon, HistoryIcon, HomeIcon } from '../components/Icons';
import { theme } from '../theme';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        headerTitleStyle: {
          color: theme.colorBlue,
          fontFamily: theme.fontFamilyBold,
        },
        tabBarActiveTintColor: theme.colorBlue,
        tabBarInactiveTintColor: theme.colorGrey,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <HomeIcon size={size} color={color} />;
          }

          if (route.name === 'History') {
            return <HistoryIcon size={size} color={color} />;
          }

          if (route.name === 'Analytics') {
            return <AnaliticsIcon size={size} color={color} />;
          }

          return null;
        },
      })}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{ title: "Today's moods" }}
      />
      <BottomTabs.Screen
        name="History"
        component={History}
        options={{ title: 'Past moods' }}
      />
      <BottomTabs.Screen
        name="Analytics"
        component={Analytics}
        options={{ title: 'Fancy Graphs' }}
      />
    </BottomTabs.Navigator>
  );
};
