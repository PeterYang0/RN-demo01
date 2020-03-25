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
import NavigationBar from '@/components/NavigationBar.js';

export default function SearchPage(props) {
  const {navigation, route} = props;
  return (
    <View>
      <NavigationBar title="搜索" />
      <Text>{route.params.type}搜索列表</Text>
    </View>
  );
}
