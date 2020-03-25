import React from 'react';
import {Text, View, Image} from 'react-native';

export default function NoData(props) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
      }}>
      <Image
        style={{height: 100, width: 100, marginBottom: 20}}
        source={require('@/assets/images/img1.png')}
      />
      <Text>暂无数据</Text>
    </View>
  );
}
