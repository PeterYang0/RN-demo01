const initalState = {};

export default function hotList(state = initalState, action) {
  switch (action.type) {
    case 'update':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
