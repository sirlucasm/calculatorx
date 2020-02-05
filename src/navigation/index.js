import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './../views/Main';

const StackNavigation = createStackNavigator({
    Home: {
      screen: Main,
      navigationOptions: {
        headerShown: false
      }
    },
});

export default createAppContainer(StackNavigation);