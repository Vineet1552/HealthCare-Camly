/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import ProfileBox from "../../features/profile/profileBox";
import Sidebar from "../../features/profile/sidebar";
import OrderHistory from "../../features/profile/orderHistory";
import { AppointmentHistory } from "../../components/appointmentHistory";
import ManageAddress from "../../features/profile/manageAddress";
import ManageCard from "../../features/profile/manageCard";
import ChangePassword from "../../features/profile/changePassword";
import { Layout } from "../../layouts";
import { useNavigate } from "react-router";
import { Appointment } from "../../features/profile/appointmentHistory";
import useAuth from "../../hooks/useAuth";
import { useLazyGetAllAddressQuery } from "../../services/profile";
import { STORAGE_KEYS, getFromStorage, showError } from "../../constants";
import { UserAddress } from "../../types/General";

export default function Profile() {
  const navigate = useNavigate();
  const userId = getFromStorage(STORAGE_KEYS.userId);
  const userData = useAuth();
  const [activeCase, setActiveCase] = useState<number>(1);
  const [getAddress] = useLazyGetAllAddressQuery();
  const [addressData, setAddressData] = useState<UserAddress[]>([]);

  const getAllAddress = async () => {
    try {
      const res = await getAddress({ id: userId }).unwrap();
      setAddressData(res?.addresses);
      // if (res?.status === 200) {
      // }
    } catch (error: any) {
      if (error?.data?.message) {
        showError(error?.data?.message || "");
      }
    }
  };

  useEffect(() => {
    getAllAddress();
  }, []);

  const handleActiveCase = () => {
    switch (activeCase) {
      case 1:
        return <ProfileBox />;
      case 2:
        return <OrderHistory />;
      case 3:
        return <Appointment />;
      case 4:
        return (
          <ManageAddress
            addressData={addressData}
            getAllAddress={getAllAddress}
          />
        );
      case 5:
        return <ManageCard />;
      case 6:
        return <ChangePassword />;
      default:
        return <ProfileBox />;
    }
  };

  return (
    <Layout>
      <main className="content account_page">
        <section className="site_breadcrum">
          <div className="conta_iner">
            <ul>
              <li>
                <a onClick={() => navigate("/")}>Home</a>
              </li>
              <li>My Account</li>
            </ul>
          </div>
        </section>

        <section className="account_sc ub_spc">
          <div className="conta_iner">
            <div className="gap_p">
              <div className="left_s">
                <Sidebar
                  activeCase={activeCase}
                  setActiveCase={setActiveCase}
                />
              </div>
              <div className="right_s">
                <div className="tab-content">{handleActiveCase()}</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
