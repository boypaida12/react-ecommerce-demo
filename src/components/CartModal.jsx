/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";

function CartModal({ productImage }) {
  const state = useSelector((state) => {
    return state.productReducer;
  });

  const subTotal = state.price * state.count;

  return (
    <>
      <div className="d-flex gap-3 text-grey-50">
        <img src={productImage} alt="" width={50} className="rounded-2" />
        <div>
          <span>Fall Limited Edition Sneakers</span>
          <br />
          <span>
            ${state.price} x {state.count} =
            <span className="text-black-90 fw-bold"> ${subTotal}.00</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default CartModal;
