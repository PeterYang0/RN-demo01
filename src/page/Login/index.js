import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';

export default function Login({navigation, route}) {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  return (
    <>
      {/* <NavigationBar title="登录" /> */}
      <View style={styles.container}>
        <Text style={styles.title}>欢迎来到 tuo</Text>
        <View style={styles.loginContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.inputLabel}>用户名：</Text>
            <TextInput
              placeholder="请用户名"
              value={userName}
              onChangeText={val => setUserName(val)}
              style={styles.imputstyle}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.inputLabel}>密 {`   `}码：</Text>
            <TextInput
              secureTextEntry={true}
              placeholder="请输入密码"
              value={passWord}
              onChangeText={val => setPassWord(val)}
              style={styles.imputstyle}
            />
          </View>
          <Text
            style={styles.loginBtn}
            onPress={() => {
              if (userName && passWord) {
                console.log(userName);
                dispatch({
                  type: 'update',
                  payload: {
                    userInfo: {
                      userName,
                      passWord,
                    },
                  },
                });
                navigation.navigate('home');
              }
            }}>
            登录
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  loginContainer: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    paddingBottom: 15,
    paddingTop: 15,
  },
  inputLabel: {
    width: 60,
    textAlign: 'right',
  },
  imputstyle: {
    flex: 1,
  },
  loginBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
    textAlign: 'center',
  },
};
