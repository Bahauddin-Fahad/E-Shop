import React from "react";
import DeliveryMethod from "./DeliveryMethod";
import PaymentMethod from "./PaymentMethod";

const PaymentAndDelivery = () => {
  return (
    <div className="col-span-full lg:col-span-4 space-y-10">
      <PaymentMethod />
      <DeliveryMethod />
    </div>
  );
};

export default PaymentAndDelivery;
