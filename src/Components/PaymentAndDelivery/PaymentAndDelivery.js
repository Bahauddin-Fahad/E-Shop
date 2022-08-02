import React from "react";
import DeliveryMethod from "./DeliveryMethod";
import PaymentMethod from "./PaymentMethod";

const PaymentAndDelivery = () => {
  return (
    <div className="col-span-4">
      <PaymentMethod />
      <DeliveryMethod />
    </div>
  );
};

export default PaymentAndDelivery;
