/* eslint-disable jsx-a11y/anchor-has-content */
import { useState } from "react";
import { useNavigate } from "react-router";
import AcupunctureModal from "../Modals/AcupunctureModal";
import StarIcon from '@mui/icons-material/Star';

export default function AcupunctureCard() {
  const [open, setOpen] = useState(false);
  const handleCloseModal = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  return (
    <div className="box_single">
      <a href="javscript:void(0)" onClick={() => navigate("/doctor-description")}></a>
      <figure>
        <img src="static/images/doctor_attachment_01.jpg" alt="icon" />
      </figure>
      <div className="info">
        <ul>
          <li className="c_primary">Acupuncture</li>
          <li className="store_rating">
            <StarIcon /> 5.0
          </li>
        </ul>
        <h3>Dr. Angela Nielson, MD</h3>
        <p>10 years of experience</p>
        <p>
          New patient appointments • Highly recommended • Excellent wait time
        </p>
        <div className="slot_list">
          <span onClick={() => setOpen(true)}>09:00 am</span>
          <span onClick={() => setOpen(true)}>10:00 am</span>
          <span onClick={() => setOpen(true)}>11:00 am</span>
          <span onClick={() => setOpen(true)}>12:00 pm</span>
          <span onClick={() => setOpen(true)}>01:00 pm</span>
          <span onClick={() => setOpen(true)}>02:00 pm</span>
          <span onClick={() => setOpen(true)}>03:00 pm</span>
          <span onClick={() => setOpen(true)}>04:00 pm</span>
          <span onClick={() => setOpen(true)}>05:00 pm</span>
          <span onClick={() => setOpen(true)}>06:00 pm</span>
          <span onClick={() => setOpen(true)}>07:00 pm</span>
        </div>
      </div>
      <AcupunctureModal
        open={open}
        onClose={handleCloseModal}
        setOpen={setOpen}
      />
    </div>
  );
}
