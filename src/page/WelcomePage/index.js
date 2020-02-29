import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

export default function WelcomePage({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('home');
    }, 200);
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>WelcomePage</Text>
    </View>
  );
}
