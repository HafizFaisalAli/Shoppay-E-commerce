import StripeForm from "./StripeForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51IutRpCcy8OEmYvUPfh80W83msyNs3bcjVZUOyE1EZpD8i5Y2fpesJL1vXDBoiHJXqj77lpZdhYaW9PTIzWurucM009BX1NtaD"
);

const StripeContainer = () => {
  return (
    <Elements stripe={stripePromise}>
      <StripeForm />
    </Elements>
  );
};

export default StripeContainer;
