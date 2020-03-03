import React from 'react';
import {
  Text,
  StatusBar,
  StyleSheet,
  View,
  Platform,
  DeviceInfo,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';

import {useTheme} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const NAV_BAR_HEIGHT_IOS = 35; //导航栏在iOS中的高度
const NAV_BAR_HEIGHT_ANDROID = 35; //导航栏在Android中的高度
const STATUS_BAR_HEIGHT = DeviceInfo.isIPhoneX_deprecated ? 0 : 20; //状态栏的高度

export default function NavigationBar(props) {
  const {navigation} = useSelector(state => state.app);
  const {
    titleView, // title 组件
    tatusBarStyle, // tatusBar拓展样式
    title, // 标题
    statusBarHide = false, // tatusBar的隐藏
    style, // 样式
    titleLayoutStyle, // title拓展样式
    leftButton, // 左按钮
    goBack = true, // 返回
    rightButton, // 右按钮
  } = props;
  const {
    colors: {primary, statusBarBgColor},
  } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: primary,
      paddingBottom: 4,
    },
    navBarButton: {
      alignItems: 'center',
    },
    navBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: Platform.OS === 'ios' ? 40 : 0,
      height:
        Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
    },
    navBarTitleContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      left: 40,
      right: 40,
      top: 0,
      bottom: 0,
    },
    title: {
      fontSize: 20,
      color: 'white',
    },
    statusBar: {
      height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0,
    },
  });

  const defaultStatusBar = {
    barStyle: 'light-content',
    hidden: statusBarHide,
    backgroundColor: statusBarBgColor,
    ...tatusBarStyle,
  };
  let statusBar = !defaultStatusBar.hidden ? (
    <View style={styles.statusBar}>
      <StatusBar {...defaultStatusBar} />
    </View>
  ) : null;

  function getButtonElement(data) {
    return <View style={styles.navBarButton}>{data ? data : null}</View>;
  }

  return (
    <View style={[styles.container, style]}>
      {statusBar}
      <View style={styles.navBar}>
        {goBack && (
          <TouchableOpacity onPress={() => navigation && navigation.goBack()}>
            <AntDesign
              style={{marginLeft: 12}}
              name="left"
              size={22}
              color="#fff"
            />
          </TouchableOpacity>
        )}
        {getButtonElement(leftButton)}
        <View style={[styles.navBarTitleContainer, titleLayoutStyle]}>
          {titleView ? (
            titleView
          ) : (
            <Text ellipsizeMode="head" numberOfLines={1} style={styles.title}>
              {title}
            </Text>
          )}
        </View>
        {getButtonElement(rightButton)}
      </View>
    </View>
  );
}
