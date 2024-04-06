import { Modal, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { generateResponsiveStyle } from "../utils/authModalStyle";
interface CardModalProps {
  open: boolean;
  onClose: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export default function AddCardModal({
  open,
  onClose,
  setOpen,
}: CardModalProps) {
  const style = generateResponsiveStyle();
  return (
    <Modal
      className="modal form_modal"
      id="addCardModal"
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      open={open}
      onClose={onClose}
    >
      <div className="modal-dialog">
        <div className="modal-body hd_4">
          <div className="btn-close">
            <CloseIcon onClick={() => setOpen(false)} />
          </div>{" "}
          <h2>Add New Card</h2>
          <form>
            <div className="control_group">
              <label>Card Number</label>
              <TextField hiddenLabel placeholder="Enter here" fullWidth />
            </div>
            <div className="control_group">
              <label>Card Holder Name</label>
              <TextField hiddenLabel placeholder="Enter here" fullWidth />
            </div>
            <div className="gap_p">
              <div className="control_group w_50">
                <label>Expiry</label>
                <TextField hiddenLabel placeholder="Enter here" fullWidth />
              </div>
              <div className="control_group w_50">
                <label>CVV</label>
                <TextField hiddenLabel placeholder="Enter here" fullWidth />
              </div>
            </div>
            <div className="btn_flex">
              <a
                className="c_danger"
                href="javascript:void(0)"
                onClick={() => setOpen(false)}
              >
                Cancel
              </a>
              <button className="btnn btn_xsm btn_primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
