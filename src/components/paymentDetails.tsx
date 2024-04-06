/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useNavigate } from "react-router";
import AddCardModal from "../Modals/addCardModal";
import AddIcon from '@mui/icons-material/Add';

export function PaymentDetailsCard() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <div className="payment_box">
      <h3>Payment Detail</h3>
      <div className="p_group">
        <p>
          Session Fee <strong>$35</strong>
        </p>
        <p>
          Total Cost <strong>$350.00</strong>
        </p>
      </div>
      <h3>Online Payments</h3>
      <div className="payment_list">
        <label>
          <figure>
            <img src="static/images/visa_icon.jpg" alt="" />
          </figure>
          <span>
            <strong>•••• •••• •••• 4432</strong>
            Personal - 06/23
          </span>
          <input type="radio" name="payment" value="payment1" />
        </label>
        <label>
          <figure>
            <img src="static/images/visa_icon.jpg" alt="" />
          </figure>
          <span>
            <strong>•••• •••• •••• 4432</strong>
            Personal - 06/23
          </span>
          <input type="radio" name="payment" value="payment1" />
        </label>
        <a href="javascript:void(0)" className="add_payment" onClick={() => setOpen(true)}>
          <span>
            <AddIcon />
          </span>
          <p className="c_primary">
            Add New Card
          </p>
          <p>Save and Pay via Cards.</p>
          <img src="static/images/payment_icon.svg" alt="Icon" />
        </a>
      </div>

      <div className="btn_flex">
        <a
          href="javascript:void(0)"
          onClick={() => navigate("/payment-done")}
          className="btnn btn_primary"
        >
          Pay Now
        </a>
      </div>
      <AddCardModal open={open} onClose={handleCloseModal} setOpen={setOpen} />
    </div>
  );
}
