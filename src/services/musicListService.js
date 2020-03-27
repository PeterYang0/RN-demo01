import requset from '@/utils/request';

export function fetchHotMusicList({page = 1, size = 10, keyWord}) {
  return requset('https://v1.itooi.cn/netease/songList/hot');
}
