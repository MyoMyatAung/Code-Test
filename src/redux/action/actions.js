import * as ActionTypes from "./action_types";

export const select_seat = (data = []) => {
  return {
    type: ActionTypes.SELECT_SEAT,
    payload: data,
  };
};

export const set_total = (data = 0) => {
  return {
    type: ActionTypes.SET_TOTAL,
    payload: data,
  };
};
