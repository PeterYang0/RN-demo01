import {useEffect} from 'react';
import {BackHandler} from 'react-native';

export default function usePressBack(callback) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBack);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleBack() {
    callback();
  }
}
