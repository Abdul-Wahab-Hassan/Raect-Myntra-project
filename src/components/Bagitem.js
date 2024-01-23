import React from "react";
import { useDispatch } from "react-redux";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { bagActions } from "../store/bagSlice";

const Bagitem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    
      <div class="bag-item-container">
        <div class="item-left-part">
          <img class="bag-item-img" src={item.image} />
        </div>
        <div class="item-right-part">
          <div class="company">${item.company}</div>
          <div class="item-name">${item.item_name}</div>
          <div class="price-container">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount-percentage">
              (${item.discount_percentage}% OFF)
            </span>
          </div>
          <div class="return-period">
            <span class="return-period-days">${item.return_period} days</span>{" "}
            return available
          </div>
          <div class="delivery-details">
            Delivery by
            <span class="delivery-details-days">${item.delivery_date}</span>
          </div>
        </div>

        <div
          class="remove-from-cart"
          onClick={handleRemoveItem}
        >
           <RiDeleteBin5Fill />
        </div>
      </div>
    
  );
};

export default Bagitem;
