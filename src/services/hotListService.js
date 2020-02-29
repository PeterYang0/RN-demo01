import request from '../utils/request';
export const fetchList = key => {
  return request('https://api.github.com/users/52Lau/starred');
};
