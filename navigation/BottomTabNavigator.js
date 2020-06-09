import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import HomeScreenPEB from '../screens/HomeScreenPEB';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileNavigate from './profileNavigation';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Colorido',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-color-palette" />,
        }}
      />
      <BottomTab.Screen
        name="PEB"
        component={HomeScreenPEB}
        options={{
          title: 'P&B',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-film" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigate}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'My Lorem Picsum';
    case 'PEB':
      return 'My Lorem Picsum';
      case 'Profile':
      return 'Meu Perfil';
  }
}
