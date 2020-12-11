import React from 'react';
import { Image } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { AppTabNavigator } from './AppTabNavigator'
import {Icon} from 'react-native-elements'

import SettingScreen from '../screens/SettingScreen';

import CustomSideBarManu from './CustomSideBarMenu'
import MyDonationScreen from '../screens/MyDonationScreen';
import NotificationScreen from '../screens/NotificationScreen';


export const AppDrawerNavigator = createDrawerNavigator(
    {       

        Home: { screen : AppTabNavigator, navigationOptions:{drawerIcon: <Icon name='home' type='fontAwesome5'/>} },
        MyDonations:{screen: MyDonationScreen ,navigationOptions:{drawerIcon: <Icon name='gift' type='font-awesome'/>}} ,  
        Setting : { screen : SettingScreen ,navigationOptions:{drawerIcon: <Icon name='settings' type='fontAwesome5'/>}},
        Notification:{screen : NotificationScreen ,navigationOptions:{drawerIcon: <Icon name='bell' type='font-awesome'/>}}
    },
    {
        contentComponent: CustomSideBarManu
    },

    {
        initialRouteName : 'Home'
    }
);
