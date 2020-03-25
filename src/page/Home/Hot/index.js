import React from 'react';
import {StyleSheet} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useTheme} from '@react-navigation/native';
import NavigationBar from '@/components/NavigationBar.js';
import Content from './Content';

const Tab = createMaterialTopTabNavigator();

// 这是默认主题色
// primary: 'rgb(255, 45, 85)',
// background: 'rgb(242, 242, 242)',
// card: 'rgb(255, 255, 255)',
// text: 'rgb(28, 28, 30)',
// border: 'rgb(199, 199, 204)',

// activeTintColor: 设置TabBar选中状态下的标签和图标的颜色；
// inactiveTintColor: 设置TabBar非选中状态下的标签和图标的颜色；
// showIcon: 是否展示图标，默认是false；
// showLabel: 是否展示标签，默认是true；
// upperCaseLabel - 是否使标签大写，默认为true。
// tabStyle: 设置单个tab的样式；
// indicatorStyle: 设置 indicator(tab下面的那条线)的样式；
// labelStyle: 设置TabBar标签的样式；
// iconStyle: 设置图标的样式；
// style: 设置整个TabBar的样式；
// allowFontScaling: 设置TabBar标签是否支持缩放，默认支持；
// safeAreaInset：覆盖的forceInset prop，默认是{ bottom: 'always', top: 'never' }，可选值：top | bottom | left | right ('always' | 'never')；

export default function HotList({navigation}) {
  const {colors} = useTheme();
  const styles = StyleSheet.create({
    tabStyle: {
      width: 120,
    },
    labelStyle: {
      color: colors.HomeTabActiveFontColor,
    },
    indicatorStyle: {
      height: 2,
      backgroundColor: colors.HomeTabActiveFontColor,
    },
  });

  const tabs = ['java', 'php', 'python', 'javascript'];
  return (
    <>
      <NavigationBar
        title="最热项目"
        goBack={false}
        search
        searchCallback={() => {
          console.log(11111);
        }}
      />
      <Tab.Navigator
        tabBarOptions={{
          tabStyle: styles.tabStyle,
          labelStyle: styles.labelStyle,
          indicatorStyle: styles.indicatorStyle, // 底部的线
          upperCaseLabel: false,
          scrollEnabled: true,
          style: {backgroundColor: colors.primary},
          // activeTintColor: 'red',
        }}>
        {tabs.map(item => (
          <Tab.Screen key={item} name={item}>
            {comProps => <Content {...comProps} keyWord={item} />}
          </Tab.Screen>
        ))}
      </Tab.Navigator>
    </>
  );
}
