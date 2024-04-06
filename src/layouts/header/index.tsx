/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { MenuItem, Box, IconButton, Menu, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useAuth from "../../hooks/useAuth";
import { usePostGetProfileMutation } from "../../services/auth";
import { STORAGE_KEYS, getFromStorage, showError } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { getToken, setCredentials } from "../../reducers/authSlice";

const Header = () => {
  const userId = getFromStorage(STORAGE_KEYS.userId);
  const userData = useAuth();
  console.log(userData, "okk");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const UserToken = getFromStorage(STORAGE_KEYS.token);

  const [getProfile] = usePostGetProfileMutation();
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] =
    useState(false);
  const [isFlagDropdownVisible, setIsFlagDropdownVisible] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownVisible(!isProfileDropdownVisible);
  };

  const toggleFlagDropdown = () => {
    setIsFlagDropdownVisible(!isFlagDropdownVisible);
  };

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [openFlag, setOpenFlag] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenFlagMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenFlag(event.currentTarget);
  };

  const handleCloseFlagMenu = () => {
    setOpenFlag(null);
  };

  const getUserProfile = async () => {
    const body = {
      id: userId,
    };
    const token = getFromStorage(STORAGE_KEYS.token);
    try {
      const res = await getProfile(body).unwrap();
      if (res?.status === 200 && token) {
        dispatch(
          setCredentials({
            user: res?.user,
            token: token,
          })
        );
      }
    } catch (error: any) {
      if (error?.data?.message) {
        showError(error?.data?.message || "");
      }
    }
  };

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  useEffect(() => {
    if (window) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  useEffect(() => {
    const token = getFromStorage(STORAGE_KEYS.token);

    if (token) {
      dispatch(
        setCredentials({
          token: `${token}`,
          user: null,
        })
      );
      getUserProfile();
    }
  }, []);

  return (
    <header
      id="header"
      className={scroll ? "site_header scrolled" : "site_header"}
    >
      <div className="conta_iner">
        <nav>
          <a onClick={() => navigate("/")} className="site_logo">
            <figure>
              <img src={`/static/images/camly_logo.svg`} alt="Camly Logo" />
            </figure>
          </a>
          <ul className="site_menu">
            <li>
              <a target="_blank">Practitioner</a>
            </li>
            <li>
              <a target="_blank">List your Herbal Store</a>
            </li>
            {userData ? (
              <li>
                <Box className="user_btn" onClick={handleOpenUserMenu}>
                  <IconButton onClick={handleOpenUserMenu}>
                    <Avatar alt="Remy Sharp" src="/static/images/dummy.png" />
                  </IconButton>
                  <span>{userData?.name}</span>
                  <KeyboardArrowDownIcon />
                </Box>
                <Menu
                  id="menu-appbar"
                  className="menu_drop"
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
                  <MenuItem onClick={() => navigate("/profile")}>
                    <a href="javascript:void(0)">Profile</a>
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/my-cart")}>
                    <a href="javascript:void(0)">My Cart</a>
                  </MenuItem>
                  <MenuItem onClick={toggleProfileDropdown}>
                    <a href="javascript:void(0)">Notification</a>
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/login")}>
                    <a href="javascript:void(0)">Log Out</a>
                  </MenuItem>
                </Menu>
              </li>
            ) : (
              <li>
                <Button
                  className="btnn btn_xsm btn_primary w_100"
                  onClick={() => navigate("/login")}
                >
                  LOGIN
                </Button>
              </li>
            )}

            <li>
              <Box className="flag_btn" onClick={handleOpenFlagMenu}>
                <IconButton onClick={handleOpenFlagMenu}>
                  <figure>
                    <img src="/static/images/usa_flag_icon.png" alt="" />
                  </figure>
                </IconButton>
                <KeyboardArrowDownIcon />
              </Box>
              <Menu
                id="menu-appbar"
                className="menu_drop"
                anchorEl={openFlag}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(openFlag)}
                onClose={handleCloseFlagMenu}
              >
                <MenuItem onClick={() => navigate("")}>
                  <a href="javascript:void(0)">
                    <figure>
                      <img src={`/static/images/usa_flag_icon.png`} alt="" />
                      <figcaption>USA</figcaption>
                    </figure>
                  </a>
                </MenuItem>
              </Menu>
            </li>

            {/* <li className="dropdown">
              <FormControl>
                <Select
                  open={isProfileDropdownVisible}
                  onClose={toggleProfileDropdown}
                  onOpen={toggleProfileDropdown}
                  displayEmpty
                  value="james"
                >
                  <MenuItem value="james">
                    <figure>
                      <img
                        src="/static/images/user_placeholder.png"
                        alt="User Avatar"
                      />
                    </figure>
                    <span>James</span>
                  </MenuItem>
                  <MenuItem onClick={toggleProfileDropdown}>
                    <a href="1">Profile</a>
                  </MenuItem>
                  <MenuItem onClick={toggleProfileDropdown}>
                    <a href="1">My Cart</a>
                  </MenuItem>
                  <MenuItem onClick={toggleProfileDropdown}>
                    <a href="1">Notification</a>
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/login")}>
                    <a>Log Out</a>
                  </MenuItem>
                </Select>
              </FormControl>
            </li> */}
            {/* <li className="dropdown">
                <button
                    className="flag_btn dropdown-toggle"
                    type="button"
                    id="flagButton"
                    onClick={toggleFlagDropdown}
                >
                    <figure>
                        <img src="/static/images/usa_flag_icon.png" alt="" />
                    </figure>
                    <i className="fas fa-angle-down"></i>
                </button>
                {isFlagDropdownVisible && (
                    <div className="menu_drop dropdown-menu dropdown-menu-end" aria-labelledby="flagButton">
                        <ul>
                            <li>
                                <a href="1">
                                    <figure>
                                        <img src={`/static/images/usa_flag_icon.png`} alt="" />
                                        <figcaption>USA</figcaption>
                                    </figure>
                                </a>
                            </li>
                            <li>
                                <a href="1">
                                    <figure>
                                        <img src={`/static/images/usa_flag_icon.png`} alt="" />
                                        <figcaption>USA</figcaption>
                                    </figure>
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
