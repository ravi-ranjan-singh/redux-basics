import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

// combineReducer function combine multiple reducer into a single reducer which can be pased to createStore function

const allReducers = combineReducers({
  counter: counterReducer
});

// key in the object represent name of properties int the combined state

export default allReducers;
