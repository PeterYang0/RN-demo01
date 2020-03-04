import React from 'react';
import {View, Text} from 'react-native';
import NavigationBar from '@/components/NavigationBar.js';

export default function Trending(props) {
  return (
    <>
      <NavigationBar title="趋势" goBack={false} />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>趋势</Text>
      </View>
    </>
  );
}
