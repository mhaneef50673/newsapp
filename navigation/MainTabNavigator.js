import React from 'react';
import { Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import NewsHomeScreen from '../screens/NewsHomeScreen';
import Standings from '../screens/Standings';
import Results from '../screens/Results';
import SettingsScreen from '../screens/SettingsScreen';

export default TabNavigator(
  {
    News: {
      screen: NewsHomeScreen,
    },
    Standings: {
      screen: Standings,
    },
    Results: {
      screen: Results,
    },
    Settings: {
      screen: SettingsScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'News':          
              iconName = "newspaper-o";
            break;
          case 'Standings':
              iconName = "sort-numeric-asc";
            break;
          case 'Results':
              iconName = "registered";
            break;            
          case 'Settings':
              iconName = 'wrench';
        }
        return (
          <FontAwesome
            name={iconName}
            size={22}
            style={{ marginBottom: -3 }}
            color={focused ? 'red' : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: 'red',
    },
  }
);
