import {useEffect} from 'react';
import {BackHandler, ToastAndroid} from 'react-native';

let firstClick = 0;
export default function usePressBack(props) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBack);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress');
    };
  }, []);

  function handleBack() {
    if (firstClick + 1000 > new Date().valueOf()) {
      BackHandler.exitApp();
      return true;
    } else {
      ToastAndroid.show('再按一次退出', ToastAndroid.SHORT);
      return true;
    }
  }
}
