import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { PriceReducer } from "../reducer/price_reducer";
import { SeatReducer } from "../reducer/seat_reducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      seat: SeatReducer,
      price: PriceReducer,
    }),
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
};
