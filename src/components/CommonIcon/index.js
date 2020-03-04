import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTheme} from '@react-navigation/native';

export function RightBtn() {
  const {
    colors: {primary},
  } = useTheme();
  return (
    <AntDesign
      name="right"
      size={16}
      style={{
        marginRight: 10,
        alignSelf: 'center',
        color: primary,
      }}
    />
  );
}

export function LeftBtn() {
  const {
    colors: {primary},
  } = useTheme();
  return (
    <AntDesign
      name="left"
      size={16}
      style={{
        marginRight: 10,
        alignSelf: 'center',
        color: primary,
      }}
    />
  );
}
