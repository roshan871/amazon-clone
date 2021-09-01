import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./ CheckoutProduct";
import { Link } from "react-router-dom"
import StripeCheckout from "react-stripe-checkout";
import Subtotal from "./Subtotal";
// import { cardElement, useStripe, useElements} from "@stripe/react-stripe-js";
// import StripeCheckoutButton from "./StripeCheckoutButton";

function Payment(){
    const [{ basket, user }, ] = useStateValue();
    // const stripe = useStripe();
    // const elements = useElements();
    const publishableKey =
    "pk_test_51JStr5BljLMedA1L5zq93RRZkBCPAIfViwnQ43IUQYoPC42ZcFZcjHkVQAz7qS94I7vLulfQlse1JHeal3vo3kUq00rLOt1Jqv";

    // const onToken = (token) => {
    //     console.log(token);
    //     alert("Payment Succesful!");
    // };
    return(
        <div className="payment">
            <div className="payment-container">
                <h3>
                    Checkout(
                        <Link to="/checkout">{basket?.length}</Link>
                    )
                </h3>
                    {/* Payment  section - Delivery address */}
                    <div className="payment-section">
                        <div className="payment-title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment-address">
                            <p>{user?.email}</p>
                            <p>4940 Thunderbird Circle</p>
                            <p>Boulder,Colorado</p>
                        </div>
                    </div>
                    {/* Payment  section - Review Items */}
                    <div className="payment-section">
                        <div className="payment-title">
                            <h3>Review items and delivery</h3>
                        </div>
                        <div className="payment-items">
                            {basket.map(item => (
                                <CheckoutProduct
                                    id= {item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating} 
                                />
                            ))}
                        </div>
                    </div>
                    {/* Payment  section - Payment Method */}
                    <div className="payment-section">
                        <div className="payment-title">
                            <h3>Payment Method</h3>
                        </div>
                        <div className="payment-details">
                            {/* Stripe magic will go */}
                            <StripeCheckout
                            label="Pay now"
                            name="Amazon-clone"
                            billingAddress
                            shippingAddress
                            image="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                            // description={`Your total is $${price}`}
                            // amount={priceForStripe}
                            // panelLabel="Pay Now"
                            token={<Subtotal />}
                            stripeKey={publishableKey}
                            />
                            <div className="checkout__right">
                                <Subtotal />
                            </div>
                            {/* <form>
                                <cardElement/>
                            </form> */}
                            
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Payment;