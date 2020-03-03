import React from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';

export default function Trending(props) {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => {
          dispatch({type: 'update', payload: {count: 5}});
        }}>
        趋势
      </Text>
    </View>
  );
}
