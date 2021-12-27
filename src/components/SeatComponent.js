import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { select_seat, set_total } from "../redux/action/actions";
import _ from "lodash";

const SeatComponent = ({ seat = null }) => {
  const dispatch = useDispatch();

  const selected_seat = useSelector((state) => {
    return state.seat;
  });

  const { price } = useSelector((state) => state.price);
  const toggleSeat = (seat) => {
    const temp_state = _.cloneDeep(selected_seat || []);
    if (temp_state.includes(seat)) {
      const current_Index = temp_state.indexOf(seat);
      temp_state.splice(current_Index, 1);
    } else temp_state.push(seat);

    dispatch(select_seat(temp_state));
    dispatch(set_total(temp_state.length * price));
  };

  if (!seat) return null;

  return <button onClick={() => toggleSeat(seat)}>{seat}</button>;
};

export default SeatComponent;
