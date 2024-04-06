/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Layout } from "../../layouts";
import { SelectChangeEvent, Select, MenuItem } from "@mui/material";
import { AcupunctureModal } from "../../Modals";
import { useNavigate } from "react-router";
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const DoctorDescription = () => {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleCloseModal = () => {
    setOpen(false);
  };

  const [selectField, setSelectField] = React.useState('default');
  const handleChange = (event: SelectChangeEvent) => {
    setSelectField(event.target.value as string);
  };

  const [selectField2, setSelectField2] = React.useState('default');
  const handleChange2 = (event: SelectChangeEvent) => {
    setSelectField2(event.target.value as string);
  };

  return (
    <>
      <Layout>
        <main className="content doctorListing_page">
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
                <li>Dr. Angela Nielson, MD</li>
              </ul>
            </div>
          </section>

          <section className="doctorDetail_sc ub_spc">
            <div className="conta_iner">
              <div className="gap_p">
                <div className="left_s">
                  <div className="doctor_top">
                    <figure className="doctor_image">
                      <img
                        src="static/images/doctor_attachment_01.jpg"
                        alt="icon"
                      />
                    </figure>
                    <div className="detail_area hd_3">
                      <p className="c_primary">Acupuncture</p>
                      <h2>Dr. Angela Nielson, MD</h2>
                      <p>10 years of experience</p>
                      <address className="store_address">
                        <strong>California medical center</strong> 21 N
                        Greenwood Ave, Tulsa, OK 74120
                      </address>
                      <div className="store_rating">
                        <StarIcon /> 5.0
                      </div>
                    </div>
                  </div>
                  <div className="detailed_info">
                    <div className="hd_3">
                      <h2 className="fw_med">About Angela Nielson, MD</h2>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>

                    <div className="hd_5">
                      <h3 className="fw_med">Board Certifications</h3>
                    </div>
                    <p>American board of medical</p>

                    <div className="hd_5">
                      <h3 className="fw_med">Education and Training</h3>
                    </div>
                    <p>Medical School - San Diego University, California</p>

                    <div className="hd_5">
                      <h3 className="fw_med">Specialties</h3>
                    </div>
                    <p>
                      Family Physician <br /> Primary Care Doctor
                    </p>

                    <div className="hd_5">
                      <h3 className="fw_med">Practice names</h3>
                    </div>
                    <p>Juno Medical</p>

                    <div className="hd_5">
                      <h3 className="fw_med">Provider’s gender</h3>
                    </div>
                    <p>Female</p>

                    <div className="hd_5">
                      <h3 className="fw_med">License Number</h3>
                    </div>
                    <p>1184982423</p>
                  </div>
                </div>
                <div className="right_s">
                  <aside className="doctor_aside">
                    <div className="card_box">
                      <h6>Book Appointment</h6>
                      <form action="" className="form">
                        <div className="control_group">
                          <div className="appoint_select">
                            <label><input type="radio" name="appointment" value="online" checked />Online consultant</label>
                            <label><input type="radio" name="appointment" value="visit" />Visit Doctor Clinic</label>
                          </div>
                        </div>
                        <div className="control_group">
                          <Select
                            fullWidth
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            label="social-account"
                            value={selectField}
                            onChange={handleChange}
                          >
                            <MenuItem disabled value="default">Select</MenuItem>
                            <MenuItem value={10}>Acupuncture</MenuItem>
                            <MenuItem value={20}>Massage</MenuItem>
                            <MenuItem value={30}>Ayurveda</MenuItem>
                            <MenuItem value={40}>Yoga</MenuItem>
                            <MenuItem value={50}>Hypnotherapy</MenuItem>
                            <MenuItem value={60}>Reiki</MenuItem>
                            <MenuItem value={70}>Cupping</MenuItem>
                            <MenuItem value={80}>Chiropractor</MenuItem>
                          </Select>
                        </div>
                        <div className="control_group">
                          <Select
                            fullWidth
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            label="social-account"
                            value={selectField2}
                            onChange={handleChange2}
                          >
                            <MenuItem disabled value="default">Select</MenuItem>
                            <MenuItem value={10}>New patient</MenuItem>
                            <MenuItem value={20}>Returning patient</MenuItem>
                          </Select>
                        </div>

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
                            <a href="javascript:void(0)" onClick={() => setOpen(true)}>09:00 am</a>
                            <a href="javascript:void(0)" onClick={() => setOpen(true)}>10:00 am</a>
                            <a href="javascript:void(0)" onClick={() => setOpen(true)}>11:00 am</a>
                            <a href="javascript:void(0)" onClick={() => setOpen(true)}>12:00 pm</a>
                            <a href="javascript:void(0)" onClick={() => setOpen(true)}>01:00 pm</a>
                            <a href="javascript:void(0)" onClick={() => setOpen(true)}>02:00 pm</a>
                            <a href="javascript:void(0)" onClick={() => setOpen(true)}>03:00 pm</a>
                            <a href="javascript:void(0)" onClick={() => setOpen(true)}>04:00 pm</a>
                            <a href="javascript:void(0)" onClick={() => setOpen(true)}>05:00 pm</a>
                            <a href="javascript:void(0)" onClick={() => setOpen(true)}>06:00 pm</a>
                            <a href="javascript:void(0)" onClick={() => setOpen(true)}>07:00 pm</a>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="card_box">
                      <h6>Pricing</h6>
                      <ul className="price_list">
                        <li>
                          New patient <strong>$100</strong>
                        </li>
                        <li>
                          Follow up <strong>$20</strong>
                        </li>
                        <li>
                          Acupuncture <strong>$50</strong>
                        </li>
                        <li>
                          Head shoulder <strong>$20</strong>
                        </li>
                        <li>
                          Class <strong>$25</strong>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </div>

              <div className="faq_sc uht_spc">
                <div className="s_head hd_3">
                  <h2 className="fw_med">Frequently Asked Questions</h2>
                </div>
                <ul className="faq_list">
                  <li>
                    <strong>
                      How do i pay for the essentials or premium plan?
                    </strong>
                    <small>
                      You can pay with a credit car or via net banking (if you
                      are in Poland). We will renew your subscription
                      automatically at the end of every billing cycle.
                    </small>
                  </li>
                  <li>
                    <strong>
                      How do i pay for the essentials or premium plan?
                    </strong>
                    <small>
                      You can pay with a credit car or via net banking (if you
                      are in Poland). We will renew your subscription
                      automatically at the end of every billing cycle.
                    </small>
                  </li>
                  <li>
                    <strong>
                      How do i pay for the essentials or premium plan?
                    </strong>
                    <small>
                      You can pay with a credit car or via net banking (if you
                      are in Poland). We will renew your subscription
                      automatically at the end of every billing cycle.
                    </small>
                  </li>
                  <li>
                    <strong>
                      How do i pay for the essentials or premium plan?
                    </strong>
                    <small>
                      You can pay with a credit car or via net banking (if you
                      are in Poland). We will renew your subscription
                      automatically at the end of every billing cycle.
                    </small>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </Layout>
      <AcupunctureModal
        open={open}
        onClose={handleCloseModal}
        setOpen={setOpen}
      />
    </>
  );
};
