import { useSelector } from "react-redux";

const PriceComponent = () => {
  const { price, total } = useSelector((state) => state.price);

  return (
    <>
      <h2>Price per seat: {price}</h2>
      <hr />
      <h3>Selected Seat || Total: {total} MMK</h3>
    </>
  );
};

export default PriceComponent;
