import React from "react";
import BottomButtons from "./BottomButtons";
import Cart from "./Cart/Cart";
import PaymentAndDelivery from "./PaymentAndDelivery/PaymentAndDelivery";
import ShippingHeader from "./ShippingHeader";
import ShippingInfo from "./ShippingInfo/ShippingInfo";
const Home = () => {
  return (
    <div className="px-10 mb-10">
      <ShippingHeader />
      <div className="grid grid-cols-12 py-16">
        <ShippingInfo />
        <PaymentAndDelivery />
        <Cart />
      </div>
      <BottomButtons />
    </div>
  );
};

export default Home;
