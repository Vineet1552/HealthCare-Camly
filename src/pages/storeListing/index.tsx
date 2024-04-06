/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { StoreInfoCard } from "../../components";
import { Layout } from "../../layouts";
import { useNavigate } from "react-router";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box, Menu } from "@mui/material";

export default function StoreListing() {

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

  return (
    <Layout>
      <div className="content doctorListing_page">
        <section className="site_breadcrum">
          <div className="conta_iner">
            <ul>
              <li>
                <a onClick={() => navigate("/")}>Home</a>
              </li>
              <li>Store Listing</li>
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
                    <Box className={anchorElUser ? "dropdown-toggle active" : "dropdown-toggle"} onClick={handleOpenUserMenu}>Nearby</Box>
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
                      <h6>Nearby</h6>
                      <form>
                        <RadioGroup
                          className="filter_list"
                          aria-labelledby="demo-nearby-label"
                          name="nearby"
                        >
                          <FormControlLabel className="checkbox_label" value="mile1" control={<Radio />} label="1 mile" />
                          <FormControlLabel className="checkbox_label" value="mile2" control={<Radio />} label="5 miles" />
                          <FormControlLabel className="checkbox_label" value="mile3" control={<Radio />} label="10 miles" />
                          <FormControlLabel className="checkbox_label" value="mile4" control={<Radio />} label="25 miles" />
                          <FormControlLabel className="checkbox_label" value="mile5" control={<Radio />} label="50 miles" />
                        </RadioGroup>
                        <div className="btn_flex">
                          <input type="reset" className="btn_link" value="Clear" />
                          <button type="submit" className="btnn btn_xsm btn_primary">Apply</button>
                        </div>
                      </form>
                    </Menu>
                  </div>
                  <div className="dropdown">
                    <Box className={anchorElUser2 ? "dropdown-toggle active" : "dropdown-toggle"} onClick={handleOpenUserMenu2}>Category</Box>
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
                      <h6>Category</h6>
                      <form>
                        <RadioGroup
                          className="filter_list"
                          aria-labelledby="demo-category-label"
                          name="category"
                        >
                          <FormControlLabel className="checkbox_label" value="Acupuncture" control={<Radio />} label="Acupuncture" />
                          <FormControlLabel className="checkbox_label" value="Massage" control={<Radio />} label="Massage" />
                          <FormControlLabel className="checkbox_label" value="Ayurveda" control={<Radio />} label="Ayurveda" />
                          <FormControlLabel className="checkbox_label" value="Yoga" control={<Radio />} label="Yoga" />
                          <FormControlLabel className="checkbox_label" value="Hypnotherapy" control={<Radio />} label="Hypnotherapy" />
                          <FormControlLabel className="checkbox_label" value="Reiki" control={<Radio />} label="Reiki" />
                          <FormControlLabel className="checkbox_label" value="Cupping" control={<Radio />} label="Cupping" />
                          <FormControlLabel className="checkbox_label" value="Chiropractor" control={<Radio />} label="Chiropractor" />
                        </RadioGroup>
                        <div className="btn_flex">
                          <input type="reset" className="btn_link" value="Clear" />
                          <button type="submit" className="btnn btn_xsm btn_primary">Apply</button>
                        </div>
                      </form>
                    </Menu>
                  </div>
                  <div className="dropdown">
                    <Box className={anchorElUser3 ? "dropdown-toggle active" : "dropdown-toggle"} onClick={handleOpenUserMenu3}>Sort</Box>
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
                      <h6>Sort</h6>
                      <form>
                        <RadioGroup
                          className="filter_list"
                          aria-labelledby="demo-sort-label"
                          name="sort"
                        >
                          <FormControlLabel className="checkbox_label" value="byAscending" control={<Radio />} label="By Ascending" />
                          <FormControlLabel className="checkbox_label" value="byDescending" control={<Radio />} label="By Descending" />
                        </RadioGroup>
                        <div className="btn_flex">
                          <input type="reset" className="btn_link" value="Clear" />
                          <button type="submit" className="btnn btn_xsm btn_primary">Apply</button>
                        </div>
                      </form>
                    </Menu>
                  </div>
                  <div className="dropdown">
                    <Box className={anchorElUser4 ? "dropdown-toggle active" : "dropdown-toggle"} onClick={handleOpenUserMenu4}>Price</Box>
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
                      <h6>Price</h6>
                      <form>
                        <RadioGroup
                          className="filter_list"
                          aria-labelledby="demo-price-label"
                          name="price"
                        >
                          <FormControlLabel className="checkbox_label" value="lowToHigh" control={<Radio />} label="Low To High" />
                          <FormControlLabel className="checkbox_label" value="highToLow" control={<Radio />} label="High To Low" />
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
                  <h2 className="mb-0">Result Showing 4 Stores</h2>
                </div>
                <div className="box_listing">
                  <div className="gap_p hd_4">
                    <StoreInfoCard />
                    <StoreInfoCard />
                    <StoreInfoCard />
                    <StoreInfoCard />
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
