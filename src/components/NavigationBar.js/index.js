import React from 'react';
import {
  Text,
  StatusBar,
  StyleSheet,
  View,
  Platform,
  DeviceInfo,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

const NAV_BAR_HEIGHT_IOS = 35; //导航栏在iOS中的高度
const NAV_BAR_HEIGHT_ANDROID = 35; //导航栏在Android中的高度
const STATUS_BAR_HEIGHT = DeviceInfo.isIPhoneX_deprecated ? 0 : 20; //状态栏的高度

export default function NavigationBar(props) {
  const {
    colors: {primary, statusBarBgColor},
  } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: primary,
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
    hidden: false,
    backgroundColor: statusBarBgColor,
  };
  let statusBar = !defaultStatusBar.hidden ? (
    <View style={styles.statusBar}>
      <StatusBar {...defaultStatusBar} />
    </View>
  ) : null;

  let titleView = props.titleView ? (
    props.titleView
  ) : (
    <Text ellipsizeMode="head" numberOfLines={1} style={styles.title}>
      {props.title}
    </Text>
  );

  let content = props.hide ? null : (
    <View style={styles.navBar}>
      {getButtonElement(props.leftButton)}
      <View style={[styles.navBarTitleContainer, props.titleLayoutStyle]}>
        {titleView}
      </View>
      {getButtonElement(props.rightButton)}
    </View>
  );

  function getButtonElement(data) {
    return <View style={styles.navBarButton}>{data ? data : null}</View>;
  }

  return (
    <View style={[styles.container, props.style]}>
      {statusBar}
      {content}
    </View>
  );
}
