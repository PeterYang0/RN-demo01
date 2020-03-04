import React from 'react';
import {View, Text} from 'react-native';
import NavigationBar from '@/components/NavigationBar.js';

export default function My({navigation, route}) {
  return (
    <>
      <NavigationBar title="我的" goBack={false} />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>我的</Text>
        <Text
          onPress={() => {
            navigation.navigate('code-push');
          }}>
          关于版本
        </Text>
      </View>
    </>
  );
}
