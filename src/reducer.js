import defaultState from './defaultState';
import * as C from './constants';

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case C.SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.value !== undefined ? action.value : null
      };
    default:
      return state;
  }
};

export default reducer;
