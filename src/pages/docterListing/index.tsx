/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router";
import { AcupunctureCard } from "../../components";
import { Layout } from "../../layouts";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box, Menu } from "@mui/material";

export default function DocterListing() {

  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => { setAnchorElUser(event.currentTarget); };
  const handleCloseUserMenu = () => { setAnchorElUser(null); };

  const [anchorElUser2, setAnchorElUser2] = React.useState<null | HTMLElement>(null);
  const handleOpenUserMenu2 = (event: React.MouseEvent<HTMLElement>) => { setAnchorElUser2(event.currentTarget); };
  const handleCloseUserMenu2 = () => { setAnchorElUser2(null); };

  const [anchorElUser3, setAnchorElUser3] = React.useState<null | HTMLElement>(null);
  const handleOpenUserMenu3 = (event: React.MouseEvent<HTMLElement>) => { setAnchorElUser3(event.currentTarget); };
  const handleCloseUserMenu3 = () => { setAnchorElUser3(null); };

  const [anchorElUser4, setAnchorElUser4] = React.useState<null | HTMLElement>(null);
  const handleOpenUserMenu4 = (event: React.MouseEvent<HTMLElement>) => { setAnchorElUser4(event.currentTarget); };
  const handleCloseUserMenu4 = () => { setAnchorElUser4(null); };

  const [anchorElUser5, setAnchorElUser5] = React.useState<null | HTMLElement>(null);
  const handleOpenUserMenu5 = (event: React.MouseEvent<HTMLElement>) => { setAnchorElUser5(event.currentTarget); };
  const handleCloseUserMenu5 = () => { setAnchorElUser5(null); };

  const [anchorElUser6, setAnchorElUser6] = React.useState<null | HTMLElement>(null);
  const handleOpenUserMenu6 = (event: React.MouseEvent<HTMLElement>) => { setAnchorElUser6(event.currentTarget); };
  const handleCloseUserMenu6 = () => { setAnchorElUser6(null); };

  const [anchorElUser7, setAnchorElUser7] = React.useState<null | HTMLElement>(null);
  const handleOpenUserMenu7 = (event: React.MouseEvent<HTMLElement>) => { setAnchorElUser7(event.currentTarget); };
  const handleCloseUserMenu7 = () => { setAnchorElUser7(null); };

  const [anchorElUser8, setAnchorElUser8] = React.useState<null | HTMLElement>(null);
  const handleOpenUserMenu8 = (event: React.MouseEvent<HTMLElement>) => { setAnchorElUser8(event.currentTarget); };
  const handleCloseUserMenu8 = () => { setAnchorElUser8(null); };

  return (
    <Layout>
      <div className="content doctorListing_page">
        <section className="site_breadcrum">
          <div className="conta_iner">
            <ul>
              <li>
                <a onClick={() => navigate("/")}>Home</a>
              </li>
              <li>Doctor Listing</li>
            </ul>
          </div>
        </section>

        <section className="grid_sc ub_spc">
          <div className="conta_iner">
            <div className="gap_p">
              <div className="left_s">
                <form action="" className="search_form">
                  <div className="control_group">
                    <input
                      className="icon_search"
                      type="text"
                      placeholder="Condition, Procedure, Doctor"
                    />
                  </div>
                  <hr />
                  <div className="control_group">
                    <input
                      className="icon_location"
                      type="text"
                      placeholder="Location"
                    />
                  </div>
                  <button type="button" className="btnn btn_primary">
                    <img src="static/images/search_icon_small.svg" alt="Icon" />
                  </button>
                </form>
                <div className="filter_sc">
                  <div className="dropdown">
                    <Box className={anchorElUser ? "dropdown-toggle active" : "dropdown-toggle"} onClick={handleOpenUserMenu}>Experience</Box>
                    <Menu
                      className="filter_dropdown_menu"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <h6>Experience</h6>
                      <form>
                        <RadioGroup
                          className="filter_list"
                          aria-labelledby="demo-experience-label"
                          name="experience"
                        >
                          <FormControlLabel className="checkbox_label" value="experience1" control={<Radio />} label="5 years" />
                          <FormControlLabel className="checkbox_label" value="experience2" control={<Radio />} label="10 years" />
                          <FormControlLabel className="checkbox_label" value="experience3" control={<Radio />} label="15 years" />
                        </RadioGroup>
                        <div className="btn_flex">
                          <input type="reset" className="btn_link" value="Clear" />
                          <button type="submit" className="btnn btn_xsm btn_primary">Apply</button>
                        </div>
                      </form>
                    </Menu>
                  </div>
                  <div className="dropdown">
                    <Box className={anchorElUser2 ? "dropdown-toggle active" : "dropdown-toggle"} onClick={handleOpenUserMenu2}>Gender</Box>
                    <Menu
                      className="filter_dropdown_menu"
                      anchorEl={anchorElUser2}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElUser2)}
                      onClose={handleCloseUserMenu2}
                    >
                      <h6>Gender</h6>
                      <form>
                        <RadioGroup
                          className="filter_list"
                          aria-labelledby="demo-sort-label"
                          name="sort"
                        >
                          <FormControlLabel className="checkbox_label" value="Female" control={<Radio />} label="Female" />
                          <FormControlLabel className="checkbox_label" value="Male" control={<Radio />} label="Male" />
                          <FormControlLabel className="checkbox_label" value="Non-binary" control={<Radio />} label="Non-binary" />
                        </RadioGroup>
                        <div className="btn_flex">
                          <input type="reset" className="btn_link" value="Clear" />
                          <button type="submit" className="btnn btn_xsm btn_primary">Apply</button>
                        </div>
                      </form>
                    </Menu>
                  </div>
                  <div className="dropdown">
                    <Box className={anchorElUser3 ? "dropdown-toggle active" : "dropdown-toggle"} onClick={handleOpenUserMenu3}>Price</Box>
                    <Menu
                      className="filter_dropdown_menu"
                      anchorEl={anchorElUser3}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElUser3)}
                      onClose={handleCloseUserMenu3}
                    >
                      <h6>Price</h6>
                      <form>
                        <RadioGroup
                          className="filter_list"
                          aria-labelledby="demo-price-label"
                          name="price"
                        >
                          <FormControlLabel className="checkbox_label" value="lowToHight" control={<Radio />} label="Low to high" />
                          <FormControlLabel className="checkbox_label" value="highToLow" control={<Radio />} label="High to low" />
                        </RadioGroup>
                        <div className="btn_flex">
                          <input type="reset" className="btn_link" value="Clear" />
                          <button type="submit" className="btnn btn_xsm btn_primary">Apply</button>
                        </div>
                      </form>
                    </Menu>
                  </div>
                  <div className="dropdown">
                    <Box className={anchorElUser4 ? "dropdown-toggle active" : "dropdown-toggle"} onClick={handleOpenUserMenu4}>Rating</Box>
                    <Menu
                      className="filter_dropdown_menu"
                      anchorEl={anchorElUser4}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElUser4)}
                      onClose={handleCloseUserMenu4}
                    >
                      <h6>Rating</h6>
                      <form>
                        <RadioGroup
                          className="filter_list"
                          aria-labelledby="demo-star-label"
                          name="star"
                        >
                          <FormControlLabel className="checkbox_label" value="1star" control={<Radio />} label="1" />
                          <FormControlLabel className="checkbox_label" value="2star" control={<Radio />} label="2" />
                          <FormControlLabel className="checkbox_label" value="3star" control={<Radio />} label="3" />
                          <FormControlLabel className="checkbox_label" value="4star" control={<Radio />} label="4" />
                          <FormControlLabel className="checkbox_label" value="5star" control={<Radio />} label="5" />
                        </RadioGroup>
                        <div className="btn_flex">
                          <input type="reset" className="btn_link" value="Clear" />
                          <button type="submit" className="btnn btn_xsm btn_primary">Apply</button>
                        </div>
                      </form>
                    </Menu>
                  </div>
                  <div className="dropdown">
                    <Box className={anchorElUser5 ? "dropdown-toggle active" : "dropdown-toggle"} onClick={handleOpenUserMenu5}>Morning</Box>
                    <Menu
                      className="filter_dropdown_menu"
                      anchorEl={anchorElUser5}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElUser5)}
                      onClose={handleCloseUserMenu5}
                    >
                      <h6>Morning</h6>
                      <form>
                        <RadioGroup
                          className="filter_list"
                          aria-labelledby="demo-morning-label"
                          name="morning"
                        >
                          <FormControlLabel className="checkbox_label" value="morning1" control={<Radio />} label="Starts before 12pm" />
                        </RadioGroup>
                        <div className="btn_flex">
                          <input type="reset" className="btn_link" value="Clear" />
                          <button type="submit" className="btnn btn_xsm btn_primary">Apply</button>
                        </div>
                      </form>
                    </Menu>
                  </div>
                  <div className="dropdown">
                    <Box className={anchorElUser6 ? "dropdown-toggle active" : "dropdown-toggle"} onClick={handleOpenUserMenu6}>Afternoon</Box>
                    <Menu
                      className="filter_dropdown_menu"
                      anchorEl={anchorElUser6}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElUser6)}
                      onClose={handleCloseUserMenu6}
                    >
                      <h6>Afternoon</h6>
                      <form>
                        <RadioGroup
                          className="filter_list"
                          aria-labelledby="demo-afternoon-label"
                          name="afternoon"
                        >
                          <FormControlLabel className="checkbox_label" value="afternoon1" control={<Radio />} label="Starts after 12pm" />
                        </RadioGroup>
                        <div className="btn_flex">
                          <input type="reset" className="btn_link" value="Clear" />
                          <button type="submit" className="btnn btn_xsm btn_primary">Apply</button>
                        </div>
                      </form>
                    </Menu>
                  </div>
                  <div className="dropdown">
                    <Box className={anchorElUser7 ? "dropdown-toggle active" : "dropdown-toggle"} onClick={handleOpenUserMenu7}>Evening</Box>
                    <Menu
                      className="filter_dropdown_menu"
                      anchorEl={anchorElUser7}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElUser7)}
                      onClose={handleCloseUserMenu7}
                    >
                      <h6>Evening</h6>
                      <form>
                        <RadioGroup
                          className="filter_list"
                          aria-labelledby="demo-evening-label"
                          name="evening"
                        >
                          <FormControlLabel className="checkbox_label" value="evening1" control={<Radio />} label="Starts after 5pm" />
                        </RadioGroup>
                        <div className="btn_flex">
                          <input type="reset" className="btn_link" value="Clear" />
                          <button type="submit" className="btnn btn_xsm btn_primary">Apply</button>
                        </div>
                      </form>
                    </Menu>
                  </div>
                  <div className="dropdown">
                    <Box className={anchorElUser8 ? "dropdown-toggle active" : "dropdown-toggle"} onClick={handleOpenUserMenu8}>Weekend</Box>
                    <Menu
                      className="filter_dropdown_menu"
                      anchorEl={anchorElUser8}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElUser8)}
                      onClose={handleCloseUserMenu8}
                    >
                      <h6>Weekend</h6>
                      <form>
                        <RadioGroup
                          className="filter_list"
                          aria-labelledby="demo-Weekend-label"
                          name="Weekend"
                        >
                          <FormControlLabel className="checkbox_label" value="Weekend1" control={<Radio />} label="Weekend" />
                        </RadioGroup>
                        <div className="btn_flex">
                          <input type="reset" className="btn_link" value="Clear" />
                          <button type="submit" className="btnn btn_xsm btn_primary">Apply</button>
                        </div>
                      </form>
                    </Menu>
                  </div>
                </div>
                <div className="hd_4">
                  <h2 className="mb-0">Result Showing 4 Doctors</h2>
                  <div className="doctor_date">
                    <a href="javascript:void(0)">
                      <ArrowBackIosNewIcon />
                    </a>
                    <span>Monday,Jan 16, 2024</span>
                    <a href="javascript:void(0)">
                      <ArrowForwardIosIcon />
                    </a>
                  </div>
                </div>
                <div className="box_listing">
                  <div className="gap_p hd_4">
                    <AcupunctureCard />
                    <AcupunctureCard />
                    <AcupunctureCard />
                    <AcupunctureCard />
                  </div>
                </div>
              </div>
              <div className="right_s">
                <div className="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13720.683685743084!2d76.709613!3d30.713595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feef63fffffdd%3A0xe08a861af795e737!2sApptunix%20-%20Mobile%20App%20Development%20Company!5e0!3m2!1sen!2sin!4v1707717234796!5m2!1sen!2sin"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
