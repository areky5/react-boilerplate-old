import { ADD_TEST } from '../actions/constants';

const initialState = {
  test: []
};

export default function(state = initialState, action){
  switch (action.type) {
    case ADD_TEST:
      return {
        ...state, test: action.payload
      };
    default:
      return state;
  }
}
