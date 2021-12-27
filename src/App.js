import "./App.css";
import PriceComponent from "./components/PriceComponent";
import SeatListComponent from "./components/SeatListComponent";
import SelectedSeatList from "./components/SelectedSeatList";

function App() {
  const seat_list = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ];

  return (
    <div>
      <SeatListComponent seat_list={seat_list} />
      <PriceComponent />
      <SelectedSeatList />
    </div>
  );
}

export default App;
