import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import NavigationBar from '@/components/NavigationBar.js';

function HotDetail({navigation, route, dispatch}) {
  return (
    <>
      <NavigationBar title="详情" navigation={navigation} />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text onPress={() => navigation.navigate('test')}>
          这是详情-id:{route.params.id}
        </Text>
      </View>
    </>
  );
}
export default connect(state => ({app: state.app}))(HotDetail);
