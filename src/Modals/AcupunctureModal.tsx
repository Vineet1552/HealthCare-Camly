import React, { Dispatch, SetStateAction } from "react";
import { Modal, Button } from "@mui/material";
import { generateResponsiveStyle } from "../utils/authModalStyle";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarIcon from '@mui/icons-material/Star';

interface AcupunctureModalProps {
  open: boolean;
  onClose: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export default function AcupunctureModal({
  open,
  onClose,
  setOpen,
}: AcupunctureModalProps) {
  const navigate = useNavigate();
  const style = generateResponsiveStyle();

  return (
    <Modal
      className="modal booking_modal"
      id="slotsModal"
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      open={open}
      onClose={onClose}
    >
      <div className="modal-dialog">
        <div className="modal-body">
          <div className="btn-close" onClick={() => setOpen(false)}>
            <CloseIcon />
          </div>
          <div className="inner">
            <figure className="booking_image">
              <img src="static/images/doctor_attachment_01.jpg" alt="Icon" />
            </figure>
            <div className="booking_details hd_4">
              <p className="c_primary">Acupuncture</p>
              <h2>Dr. Angela Nielson, MD</h2>
              <p>
                <small>10 years of experience</small>
              </p>
              <div className="store_rating">
                <StarIcon /> 5.0
              </div>
            </div>
          </div>
          <form>
            <div className="slots">
              <h6>Select Slot</h6>
              <div className="doctor_date">
                <a href="javascript:void(0)">
                  <ArrowBackIosNewIcon />
                </a>
                <span>Monday,Jan 16, 2024</span>
                <a href="javascript:void(0)">
                  <ArrowForwardIosIcon />
                </a>
              </div>
              <div className="slot_list">
                <label className="label_chip">
                  09:00 am <input type="radio" name="slot" value="slot1" />
                </label>
                <label className="label_chip">
                  10:00 am <input type="radio" name="slot" value="slot2" />
                </label>
                <label className="label_chip">
                  11:00 am <input type="radio" name="slot" value="slot3" />
                </label>
                <label className="label_chip">
                  12:00 pm <input type="radio" name="slot" value="slot4" />
                </label>
                <label className="label_chip">
                  01:00 pm <input type="radio" name="slot" value="slot5" />
                </label>
                <label className="label_chip">
                  02:00 pm <input type="radio" name="slot" value="slot6" />
                </label>
                <label className="label_chip">
                  03:00 pm <input type="radio" name="slot" value="slot7" />
                </label>
                <label className="label_chip">
                  04:00 pm <input type="radio" name="slot" value="slot8" />
                </label>
                <label className="label_chip">
                  05:00 pm <input type="radio" name="slot" value="slot9" />
                </label>
                <label className="label_chip">
                  06:00 pm <input type="radio" name="slot" value="slot10" />
                </label>
                <label className="label_chip">
                  07:00 pm <input type="radio" name="slot" value="slot11" />
                </label>
              </div>
            </div>
            <div className="btn_flex">
              <a className="c_danger" href="javascript:void(0)" onClick={() => setOpen(false)}>Cancel</a>
              <Button
                onClick={() => navigate("/doctor-booking")}
                className="btnn btn_xsm btn_primary"
              >
                Book Now
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
