import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {DefaultTheme} from '@react-navigation/native';
import {BackHandler, ToastAndroid} from 'react-native';

import Home from '../page/Home';
import WelcomePage from '../page/WelcomePage';
import HotDetail from '../page/HotDetail';
import CodePush from '../page/CodePush';

const Stack = createStackNavigator();
let firstClick = 0;
function Navigator({app: {theme}}) {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...theme,
    },
  };

  function handleBack() {
    if (firstClick + 1000 > new Date().valueOf()) {
      BackHandler.exitApp();
      return true;
    } else {
      ToastAndroid.show('再按一次退出', ToastAndroid.SHORT);
      return true;
    }
  }
  return (
    <NavigationContainer
      theme={MyTheme}
      onStateChange={state => {
        const {index, routeNames} = state;
        if (routeNames[index] === 'home') {
          BackHandler.addEventListener('hardwareBackPress', handleBack);
        } else {
          BackHandler.removeEventListener('hardwareBackPress', handleBack);
        }
      }}>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={WelcomePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="hot-detail" component={HotDetail} />
        <Stack.Screen name="code-push" component={CodePush} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default connect(state => ({app: state.app}))(Navigator);
