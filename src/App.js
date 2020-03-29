import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/counterActions';

function App() {
  const count = useSelector(state => state.counter);
  // useSelector is used to map state to a state property or we can say select a particular property from state
  const dispatch = useDispatch(); // use to create dispatch function which will dispatch our action
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h3>Counter:{count}</h3>
      <div>
        <button
          onClick={() => {
            dispatch(increment(5));
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement(5));
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
