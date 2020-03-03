import * as json from '@/assets/icons/iconfont.json';

const {glyphs = []} = json.default;
const mapper = {};
glyphs.forEach(item => {
  mapper[item.name] = item.unicode_decimal;
});
export default mapper;
