import React from "react";
import { Checkbox } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type CartItemType = {
  product_id: string;
  product_image: string;
  product_name: string;
  product_price: string;
  product_quantity: string;
};

const CartItem = ({
  product_id,
  product_image,
  product_name,
  product_price,
  product_quantity,
}: CartItemType) => {
  return (
    <>
      <tr>
        <td>
          <label className="checkbox_label">
            <Checkbox />
          </label>
        </td>
        <td>
          <figure className="product_image">
            <img src={product_image} alt="Icon" />
          </figure>
        </td>
        <td>
          <b>{product_name}</b>
        </td>
        <td>{product_price}</td>
        <td>
          <div className="quantity">
            <button className="minus" aria-label="Decrease">
              <RemoveIcon />
            </button>
            {/* <input
                type="number"
                className="input-box"
                value="1"
                min="1"
                max="10"
            /> */}
            {product_quantity}
            <button className="plus" aria-label="Increase">
              <AddIcon />
            </button>
          </div>
        </td>
        <td>{product_price}</td>
        <td>
          <button className="icon_btn">
            <img src="static/images/delete_icon.svg" alt="Icon" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
