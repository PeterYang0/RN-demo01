import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ToastManager from '@/utils/toast';
import {RightBtn} from '@/components/CommonIcon';
import NavigationBar from '@/components/NavigationBar.js';
import {useTheme} from '@react-navigation/native';

export default function My({navigation, route}) {
  const {
    colors: {primary},
  } = useTheme();

  const menu = [
    {
      name: '趋势管理',
      children: [
        {
          icon: {
            Icon: AntDesign,
            name: 'checkcircleo',
          },
          name: '自定义语言',
          callback: e => ToastManager.netError(),
        },
        {
          icon: {
            Icon: AntDesign,
            name: 'barchart',
          },
          name: '语言排序',
          callback: e => e,
        },
      ],
    },
    {
      name: '最热管理',
      children: [
        {
          icon: {
            Icon: AntDesign,
            name: 'tago',
          },
          name: '自定义标签',
          callback: e => e,
        },
        {
          icon: {
            Icon: AntDesign,
            name: 'barchart',
          },
          name: '标签排序',
          callback: e => e,
        },
      ],
    },
    {
      name: '设置',
      children: [
        {
          icon: {
            Icon: AntDesign,
            name: 'sync',
          },
          name: 'CodePush',
          callback: () => {
            navigation.navigate('code-push');
          },
        },
      ],
    },
  ];

  function getMenuItem(
    {callback = e => e, icon: {name: iconName, Icon}, name = ''},
    index,
  ) {
    return (
      <TouchableOpacity
        key={index}
        onPress={callback}
        style={styles.setting_item_container}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Icon
            name={iconName}
            size={16}
            style={{color: primary, marginRight: 10}}
          />
          <Text>{name}</Text>
        </View>
        <RightBtn />
      </TouchableOpacity>
    );
  }

  function renderItems() {
    return menu.map((item, index) => (
      <View key={index}>
        <Text style={styles.groupTitle}>{item.name}</Text>
        {item.children.map((c, i) => getMenuItem(c, i))}
      </View>
    ));
  }

  return (
    <>
      <NavigationBar title="我的" goBack={false} />
      <ScrollView>
        <TouchableOpacity style={styles.item} onPress={() => {}}>
          <View style={styles.about_left}>
            <AntDesign
              name="github"
              size={40}
              style={{
                marginRight: 10,
                color: primary,
              }}
            />
            <Text>GitHub Popular</Text>
          </View>
          <RightBtn />
        </TouchableOpacity>
        <View style={styles.line} />
        {renderItems()}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  line: {
    height: 0.5,
    opacity: 0.5,
    backgroundColor: 'darkgray',
  },
  about_left: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  item: {
    backgroundColor: 'white',
    padding: 10,
    height: 90,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  groupTitle: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 5,
    fontSize: 12,
    color: 'gray',
  },
  setting_item_container: {
    backgroundColor: 'white',
    padding: 10,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
