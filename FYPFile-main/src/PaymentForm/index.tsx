// File: StripeCheckout.jsx or StripeCheckout.tsx (Vite supports both)

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

// Load publishable key from .env
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// ========== Form Component ========== //
const CheckoutForm = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);
    setMessage("");

    try {
      // Create PaymentIntent on backend
      const { data } = await axios.post(
        "http://localhost:5000/api/payment/create-payment-intent",
        {
          amount: amount * 100, // Stripe uses cents
        }
      );

      const result = await stripe.confirmCardPayment(data.paymentIntent, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      });

      if (result.error) {
        setMessage(`❌ Payment failed: ${result.error.message}`);
      } else if (result.paymentIntent?.status === "succeeded") {
        setMessage("✅ Payment successful!");
      }
    } catch (error: any) {
      console.error(error);
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto" }}>
      <CardElement />
      <button
        type="submit"
        disabled={!stripe || loading}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#6772e5",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {loading ? "Processing…" : `Pay $${amount}`}
      </button>
      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </form>
  );
};

// ========== Wrapper Component ========== //
export const StripeCheckout = ({ amount = 50 }) => {
  return (
    <Elements stripe={stripePromise}>
      <div style={{ border: "1px solid green", marginTop: "10rem" }}>
        <CheckoutForm amount={amount} />
      </div>
    </Elements>
  );
};

export default StripeCheckout;
