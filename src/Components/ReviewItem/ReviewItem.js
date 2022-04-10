import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./ReviewItem.css";

const ReviewItem = props => {
  const { cart, deleteCart } = props;
  const { name, img, price, shipping, quantity } = cart;
  //   console.log(cart);
  return (
    <div className="select-card">
      <div className="select-card-detail">
        <img src={img} alt="" />
        <div className="select-card-details">
          <p className="names">{name}</p>
          <p>
            <small>Price : ${price}</small>
          </p>
          <p>
            <small>Shipping : ${shipping}</small>
          </p>
          <p>
            <small>Quantity : {quantity}</small>
          </p>
        </div>
      </div>
      <FontAwesomeIcon
        onClick={() => deleteCart(cart)}
        className="icon"
        icon={faTrashAlt}
      ></FontAwesomeIcon>
    </div>
  );
};

export default ReviewItem;
