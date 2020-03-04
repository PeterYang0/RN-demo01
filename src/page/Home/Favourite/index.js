import React from 'react';
import {View, Text} from 'react-native';
import NavigationBar from '@/components/NavigationBar.js';

export default function Favorite({dispatch}) {
  return (
    <>
      <NavigationBar title="收藏" goBack={false} />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>收藏</Text>
      </View>
    </>
  );
}
