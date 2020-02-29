import React from 'react';
import {View, Text} from 'react-native';

export default function HotDetail({navigation, route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={() => navigation.navigate('test')}>
        这是详情-id:{route.params.id}
      </Text>
    </View>
  );
}
