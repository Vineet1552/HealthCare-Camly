import React from "react";
import { PaymentDetailsCard } from "../../components";
import { Layout } from "../../layouts";
import { useNavigate } from "react-router";
import StarIcon from '@mui/icons-material/Star';

export const DoctorBooking = () => {

  const navigate = useNavigate();
  
  return (
    <>
      <Layout>
        <main className="content booking_page">
          <section className="site_breadcrum">
            <div className="conta_iner">
              <ul>
                <li>
                  <a onClick={() => navigate("/")}>Home</a>
                </li>
                <li>
                  <a onClick={() => navigate("/doctor-listing")}>
                    Doctor Listing
                  </a>
                </li>
                <li>
                  <a onClick={() => navigate("/doctor-description")}>
                    Dr. Angela Nielson, MD
                  </a>
                </li>
                <li>Booking</li>
              </ul>
            </div>
          </section>
          <section className="booking_sc ub_spc">
            <div className="conta_iner">
              <div className="booking_info">
                <div className="inner">
                  <figure className="booking_image">
                    <img
                      src="static/images/doctor_attachment_01.jpg"
                      alt="icon"
                    />
                    <figcaption>Online consultant</figcaption>
                  </figure>
                  <div className="booking_details hd_3">
                    <ul>
                      <li className="c_primary">Acupuncture</li>
                      <li className="store_rating">
                        <StarIcon /> 5.0
                      </li>
                    </ul>
                    <h2>Angela Nielson, MD</h2>
                    <p>10 years of experience</p>
                    <p>
                      Monday,Jan 16, 2024 :{" "}
                      <strong className="c_primary">9:00 am</strong>
                    </p>
                  </div>
                </div>
                <h3>
                  <strong>California medical center:</strong> 21 N Greenwood
                  Ave, Tulsa, OK 74120
                </h3>
              </div>
              <PaymentDetailsCard />
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};
