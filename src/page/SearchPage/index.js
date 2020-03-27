import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  FlatList,
  RefreshControl,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import uuid from 'uuid/v4';
import ListItem from '@/components/ListItem';
import {fetchHotList} from '@/services/hotListService';
import NavigationBar from '@/components/NavigationBar.js';
import NoData from '@/components/NoData';
import ToastManager from '@/utils/toast';

export default function SearchPage(props) {
  ToastManager.show('网络异常!');
  const {
    navigation,
    route: {
      // params: {type},
    },
  } = props;
  const {
    colors: {primary},
  } = useTheme();
  const [state, setState] = useState({
    isLoading: false,
    list: [],
    page: 1,
    value: '',
  });
  const {value, isLoading, list, page} = state;

  function loadData(params = {}) {
    setState({
      isLoading: true,
    });
    fetchHotList(params)
      .then(res => {
        setState({
          list: page === 1 ? res.items : [...list, ...res.items],
        });
      })
      .finally(() => {
        setState({
          isLoading: false,
        });
      });
  }

  function renderSearchInput() {
    return (
      <View>
        <TextInput
          placeholder="请输入搜索名称"
          value={value}
          onChangeText={val => setState({value: val})}
          style={styles.imputstyle}
        />
      </View>
    );
  }

  function renderRightButton() {
    return (
      <View>
        <TouchableOpacity>
          <Text
            style={styles.searchBtn}
            onPress={() => {
              setState({page: 1});
              loadData({keyWord: value, page: 1});
            }}>
            搜索
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      <NavigationBar
        titleView={renderSearchInput()}
        rightButton={renderRightButton()}
      />
      <FlatList
        data={list} // 数据源
        renderItem={data => (
          <ListItem keyWord={value} navigation={navigation} data={data} />
        )} // 渲染列表
        keyExtractor={item => String(item.id + uuid())} // key
        ListEmptyComponent={<NoData />} // 列表为空时渲染该组件。可以是 React Component, 也可以是一个 render 函数，或者渲染好的 element
        showsVerticalScrollIndicator={false} // 当此属性为true的时候，显示一个垂直方向的滚动条，默认为: true
        showsHorizontalScrollIndicator={false} // 当此属性为true的时候，显示一个水平方向的滚动条，默认为: true
        onEndReached={() => setState({page: page + 1})} // 在列表底部往下滑时触发该函数。表示当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用
        onEndReachedThreshold={0.01} // 决定当距离内容最底部还有多远时触发onEndReached回调，范围0~1，如0.01表示触底时触发
        refreshControl={
          <RefreshControl
            title="loading"
            titleColor={primary}
            colors={[primary]}
            refreshing={isLoading} // loading状态
            onRefresh={() => {
              setState({page: 1});
            }} // 刷新回调
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imputstyle: {
    borderRadius: 15,
    backgroundColor: '#fff',
    height: 35,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 15,
    paddingRight: 15,
  },
  searchBtn: {
    color: '#fff',
  },
});
