import React from "react";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import ProfileBox from "../features/profile/profileBox";
import Header from "./header";
import { Footer } from "./footer/footer";

import { AddressModal } from "../Modals/addAddressModal";
import ManageAddress from "../features/profile/manageAddress";
import { ChangePassword, ManageCard, OrderHistory } from "../features/profile";
import { Appointment } from "../features/profile/appointmentHistory";

export const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
