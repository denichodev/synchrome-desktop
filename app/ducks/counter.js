// @flow
// State type
export type counterStateType = {
  +counter: number
};

type actionType = {
  +type: string
};

// Actions
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

// Reducers
export default function counterReduucer(state: number = 0, action: actionType) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}

// Action Creators
const increment = () => {
  return {
    type: INCREMENT_COUNTER
  };
}

const decrement = () => {
  return {
    type: DECREMENT_COUNTER
  };
};

const incrementIfOdd = () => ((
    dispatch: (action: actionType) => void,
    getState: () => counterStateType
  ) => {
  const { counter } = getState();

  if (counter % 2 === 0) {
    return;
  }

  dispatch(increment());
}
);

const incrementAsync = (delay: number = 1000) => (
  (dispatch: (action: actionType) => void) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  }
);

export const counterActions = {
  increment,
  decrement,
  incrementIfOdd,
  incrementAsync
};
