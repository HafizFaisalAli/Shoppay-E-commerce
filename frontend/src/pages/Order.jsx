import { useParams } from "react-router-dom";

const Order = () => {
  const { id } = useParams();
  return <div>Order : {id}</div>;
};

export default Order;
