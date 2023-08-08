import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItems.css";

const ReviewItems = ({ product, handleReviewItems }) => {
  const { id, name, price, quantity, shipping, img } = product;
  return (
    <div className="review-items">
      <div>
        <img src={img} alt="shoe/dress" />
      </div>
      <div className="review-detail-container">
        <div className="review-details">
          <p>{name}</p>
          <p>
            <small>Price: ${price}</small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
          <p>
            <small>Shipping: ${shipping}</small>
          </p>
        </div>

        <div className="delete-button-container">
          <button onClick={() => handleReviewItems(id)} className="btn-delete">
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItems;
