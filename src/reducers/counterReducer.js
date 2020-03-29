// reducer is a function which take 2 arguments one is initial state and other is action which is dispatched

// reducer is the only function which can change the state

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;
    case 'DECREMENT':
      return state - action.payload;
    // reducer returns the new state
    default:
      return state;
  }
};

export default counterReducer;
