import theme from './state/theme';

const initalState = {
  theme,
};

export default function app(state = initalState, action) {
  switch (action.type) {
    case 'update':
      return {
        ...state,
        ...action.payload,
      };
    case 'update/theme':
      return {
        ...state,
        theme: {...state.theme, ...action.payload},
      };
    default:
      return state;
  }
}
