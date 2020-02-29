import React from 'react';
import {View, Text} from 'react-native';

export default function Favorite({dispatch}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => {
          dispatch({
            type: 'update/theme',
            payload: {
              primary: '#000',
            },
          });
        }}>
        收藏
      </Text>
    </View>
  );
}
