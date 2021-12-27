import * as ActionTypes from "../action/action_types";

const initial_state = [];

export const SeatReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ActionTypes.SELECT_SEAT:
      return action.payload;
    default:
      return state;
  }
};
