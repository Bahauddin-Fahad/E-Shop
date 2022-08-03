import React from "react";
import BottomButtons from "./BottomButtons";
import Cart from "./Cart/Cart";
import PaymentAndDelivery from "./PaymentAndDelivery/PaymentAndDelivery";
import ShippingHeader from "./ShippingHeader";
import ShippingInfo from "./ShippingInfo/ShippingInfo";
const Home = () => {
  return (
    <div className="px-7 mb-10">
      <ShippingHeader />
      <div className="grid grid-cols-12 lg:grid-cols-12 gap-16 mt-12">
        <ShippingInfo />
        <PaymentAndDelivery />
        <Cart />
      </div>
      <BottomButtons />
    </div>
  );
};

export default Home;
