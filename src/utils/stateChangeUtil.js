import {BackHandler, ToastAndroid} from 'react-native';

let firstClick = 0;

function handleBack() {
  if (firstClick + 1000 > new Date().valueOf()) {
    BackHandler.exitApp();
    return true;
  } else {
    ToastAndroid.show('再按一次退出', ToastAndroid.SHORT);
    firstClick = new Date().valueOf();
    return true;
  }
}
export default function stateChangeUtil({state}) {
  const {index, routeNames} = state;
  const routeName = routeNames[index];
  switch (routeName) {
    case 'home':
      BackHandler.addEventListener('hardwareBackPress', handleBack);
      return;
    default:
      BackHandler.removeEventListener('hardwareBackPress', handleBack);
      return;
  }
}
