import * as ActionTypes from "../action/action_types";

const initial_state = {
  price: 20000,
  total: 0,
};

export const PriceReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ActionTypes.SET_TOTAL:
      return { ...state, total: action.payload };

    default:
      return state;
  }
};
