export const increment = data => {
  return {
    type: 'INCREMENT',
    payload: data
  };
};

export const decrement = data => {
  return {
    type: 'DECREMENT',
    payload: data
  };
};

// it is not neccessary to create a function for action we can pass objects directly to action creater
