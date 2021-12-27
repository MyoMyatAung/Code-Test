import { useSelector } from "react-redux";
import SeatComponent from "./SeatComponent";

const SelectedSeatList = () => {
  const selected_seat = useSelector((state) => state.seat);

  return (
    <>
      <ul>
        {selected_seat.map((seat, index) => {
          return (
            <li key={index}>
              <SeatComponent seat={seat} from="_selected seat" />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SelectedSeatList;
