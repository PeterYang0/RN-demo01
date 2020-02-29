import {createStore, combineReducers} from 'redux';

import appReducer from './appReducer';
import hotList from './hotList';

const store = createStore(
  combineReducers({
    app: appReducer,
    hotlist: hotList,
  }),
);
export default store;
