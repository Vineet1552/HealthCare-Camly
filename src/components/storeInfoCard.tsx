import React from "react";
import { useNavigate } from "react-router";
import StarIcon from '@mui/icons-material/Star';

export default function StoreInfoCard() {
  const navigate = useNavigate();
  return (
    <div className="box_single" onClick={() => navigate("/store-details")}>
      <figure>
        <img src="static/images/store_attachment_01.jpg" alt="icon" />
      </figure>
      <div className="info">
        <ul>
          <li className="c_primary">Herbal</li>
          <li className="store_rating">
            <StarIcon /> 5.0
          </li>
        </ul>
        <h3>Bloom Herbal Organics</h3>
        <p>Timing: 9:00 am to 8:00 pm</p>
        <p>Bldg 7, Ste 400 Austin, TX 78758</p>
        <p>
          <small>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </small>
        </p>
      </div>
    </div>
  );
}
