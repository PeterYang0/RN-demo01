import React from 'react';
import {View, Text} from 'react-native';
import NavigationBar from '@/components/NavigationBar.js';
import ToastManager from '@/utils/toast';

export default function Favorite({dispatch}) {
  return (
    <>
      <NavigationBar title="收藏" goBack={false} />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          onPress={() => {
            ToastManager.netError();
          }}>
          收藏
        </Text>
      </View>
    </>
  );
}
