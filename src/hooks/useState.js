import {useState, useCallback} from 'react';

// 通用state
export default function useSetState(initialState) {
  const [state, set] = useState(initialState);
  const setState = useCallback(
    newState => {
      set(prevState => ({...prevState, ...newState}));
    },
    [set],
  );
  return [state, setState];
}
