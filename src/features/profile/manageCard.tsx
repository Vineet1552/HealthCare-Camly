/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import AddCardModal from "../../Modals/addCardModal";
import AddIcon from '@mui/icons-material/Add';

export default function ManageCard() {
  const [open, setOpen] = useState(false);
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <div
      className="tab-pane fade"
      id="v-pills-Cards"
      role="tabpanel"
      aria-labelledby="v-pills-Cards-tab"
    >
      <div className="account_head">
        <h3>Manage Cards</h3>
      </div>
      <div className="payment_list">
        <label>
          <a href="javascript:void(0)" onClick={() => setOpen(true)}></a>
          <figure>
            <img src="static/images/visa_icon.jpg" alt="" />
          </figure>
          <span>
            <strong>•••• •••• •••• 4432</strong>
            Personal - 06/23
          </span>
          <p className="c_danger" onClick={() => setOpen(true)}>
            Edit
          </p>
        </label>
        <label>
          <a href="javascript:void(0)" onClick={() => setOpen(true)}></a>
          <figure>
            <img src="static/images/visa_icon.jpg" alt="" />
          </figure>
          <span>
            <strong>•••• •••• •••• 4432</strong>
            Personal - 06/23
          </span>
          <p className="c_danger" onClick={() => setOpen(true)}>
            Edit
          </p>
        </label>
        <a href="javascript:void(0)" className="add_payment">
          <span>
            <AddIcon />
          </span>
          <p className="c_primary" onClick={() => setOpen(true)}>
            Add New Card
          </p>
          <p>Save and Pay via Cards.</p>
          <img src="static/images/payment_icon.svg" alt="Icon" />
        </a>
      </div>
      <AddCardModal open={open} onClose={handleCloseModal} setOpen={setOpen} />
    </div>
  );
}
