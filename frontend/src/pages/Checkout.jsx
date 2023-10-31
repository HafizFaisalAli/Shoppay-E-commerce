import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartInfo from "../components/CartInfo";
import PaymentInfo from "../components/PaymentInfo";
import ShippingInfo from "../components/ShippingInfo";
import StripeContainer from "../components/StripeContainer";
import { resetOrder } from "../redux/slices/orderSlice";

const Checkout = () => {
  const { success, orderId } = useSelector((state) => state.order);

  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      // reset order when moving from this page
      dispatch(resetOrder());
    };
  }, []);

  return (
    <div>
      <div className='pt-3'>
        {success ? (
          <p>
            Order created successfully{" "}
            <Link to={`/orders/${orderId}`}>View Order</Link>
          </p>
        ) : (
          <Row>
            <Col md={6}>
              <ShippingInfo />
              <CartInfo />
            </Col>
            <Col md={6}>
              <PaymentInfo />
              <StripeContainer />
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
};

export default Checkout;
