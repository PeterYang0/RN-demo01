import requset from '@/utils/request';

export function fetchHotList({page = 1, size = 10, keyWord}) {
  return requset('https://api.github.com/search/repositories', {
    query: {
      q: keyWord,
      sort: 'starts',
      page,
      per_page: size,
    },
  });
}
