import SeatComponent from "./SeatComponent";

const SeatListComponent = ({ seat_list = [] }) => {

  return (
    <>
      <ul>
        {seat_list.map((seat, i) => {
          return (
            <SeatComponent
              seat={seat}
              key={i}
            />
          );
        })}
      </ul>
    </>
  );
};

export default SeatListComponent;
