import {createIconSet} from 'react-native-vector-icons';
import mapper from './config';

const Icon = createIconSet(mapper, 'iconfont', 'iconfont.ttf');
export default Icon;

export const Button = Icon.Button;
export const TabBarItem = Icon.TabBarItem;
export const TabBarItemIOS = Icon.TabBarItemIOS;
export const ToolbarAndroid = Icon.ToolbarAndroid;
export const getImageSource = Icon.getImageSource;
