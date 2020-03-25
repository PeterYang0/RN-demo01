import React, {useEffect} from 'react';
// import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import Icon from '@/components/Icon';
import Hot from './Hot';
import Trending from './Trending';
import Favourite from './Favourite';
import My from './My/index';
import {useDispatch} from 'react-redux';

const BottomTab = createBottomTabNavigator();
export default function Home(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'update',
      payload: {
        navigation: props.navigation,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BottomTab.Navigator
      // initialRouteName="trending"
      tabBarOptions={{
        // activeTintColor: props.app.theme.primaryColor,
        labelStyle: {fontSize: 14},
        style: {paddingTop: 4},
      }}>
      <BottomTab.Screen
        name="hot"
        component={Hot}
        options={{
          tabBarLabel: 'github',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="github" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="trending"
        component={Trending}
        options={{
          tabBarLabel: '音乐',
          tabBarIcon: ({color, size}) => (
            // <Icon name="home" size={size} color={color} />
            <MaterialCommunityIcons
              name="music-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="favourite"
        options={{
          tabBarLabel: '收藏',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="favorite" size={size} color={color} />
          ),
        }}>
        {comProps => <Favourite {...comProps} dispatch={props.dispatch} />}
      </BottomTab.Screen>
      <BottomTab.Screen
        name="my"
        component={My}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
