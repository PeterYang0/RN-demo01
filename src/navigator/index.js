import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {DefaultTheme} from '@react-navigation/native';

import Home from '@/page/Home';
import WelcomePage from '@/page/WelcomePage';
import HotDetail from '@/page/HotDetail';
import CodePush from '@/page/CodePush';
import stateChange from '@/utils/stateChangeUtil';

const Stack = createStackNavigator();
export default function Navigator() {
  const {theme} = useSelector(state => state.app);
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...theme,
    },
  };

  return (
    <NavigationContainer
      theme={MyTheme}
      onStateChange={state => stateChange({state})}>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="welcome"
          component={WelcomePage}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="hot-detail"
          component={HotDetail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="code-push"
          component={CodePush}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
