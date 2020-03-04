import {filterNullValueObject, generateUrlWithGetParam} from './index';

export default function request(url, options = {}) {
  let newUrl = url;
  // 头查询参数
  if (options.query) {
    let filterNullQuery = options.query;
    if (options.method === 'GET') {
      filterNullQuery = filterNullValueObject(options.query);
    }
    newUrl = generateUrlWithGetParam(url, filterNullQuery);
  }
  return new Promise((resolve, reject) => {
    fetch(newUrl, {
      method: 'GET',
      ...options,
      headers: getHeader(options.headers),
    })
      .then(response => {
        return new Promise((resolveStatus, rejectStatus) => {
          if (response.status === 204) {
            // 204 no content则直接返回{}
            resolveStatus({});
            return false;
          }
          if (response.ok) {
            const {dataType = 'json'} = options;
            resolveStatus(response[dataType]());
          } else {
            const {failCallBack = e => e} = options;
            failCallBack();
            rejectStatus(response);
          }
        });
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => reject(err));
  });
}

/**
 * 默认headers
 */
function getHeader(headerInfo = {}) {
  const headers = {
    'Content-type': 'application/json;charset=UTF-8', // 默认格式
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    ...headerInfo,
  };
  return headers;
}
