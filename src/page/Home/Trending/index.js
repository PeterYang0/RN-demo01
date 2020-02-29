import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

function Trending(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => {
          props.dispatch({type: 'update', payload: {count: 5}});
        }}>
        趋势
      </Text>
    </View>
  );
}

export default connect()(Trending);
