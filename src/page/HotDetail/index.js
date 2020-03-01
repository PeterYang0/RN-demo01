import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import useSetStatusBarbgColor from '@/hooks/useSetStatusBarbgColor';

function HotDetail({navigation, route, dispatch}) {
  useSetStatusBarbgColor(dispatch);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={() => navigation.navigate('test')}>
        这是详情-id:{route.params.id}
      </Text>
    </View>
  );
}
export default connect(state => ({app: state.app}))(HotDetail);
