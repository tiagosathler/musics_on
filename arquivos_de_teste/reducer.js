export const INITIAL_STATE = {
  count: 0,
};

export function init(restartState) {
  return restartState;
}

export function reducer(state, action) {
  switch (action.type) {
  case 'increment':
    return { ...state, count: state.count + action.payload };
  case 'decrement':
    return { ...state, count: state.count - action.payload };
  case 'reset':
    return init(INITIAL_STATE);
  default:
    break;
  }
}
