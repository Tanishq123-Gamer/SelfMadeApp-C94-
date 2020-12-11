import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import RecieverDetailScreen from '../screens/RecieverDetailScreen';
import BookDonateScreen from '../screens/BookDonateScreen';



export const AppStackNavigator = createStackNavigator(
    {
    BookDonateList:{screen:BookDonateScreen,navigationOptions:{headerShown:false}},
        RecieverDetails:{screen:RecieverDetailScreen, navigationOptions:{headerShown:false}}
    }
    ,

    {
        initialRouteName : 'BookDonateList'
    }
);
