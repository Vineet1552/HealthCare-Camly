import { Route, Routes } from "react-router-dom";
import Pages from "./pages";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/login" element={<Pages.Login />} />
        <Route path="/otp-verify" element={<Pages.OtpVerify />} />
        <Route path="/profile-setup" element={<Pages.ProfileSetup />} />
        <Route path="/forgot-password" element={<Pages.ForgotPassword />} />
        <Route path="/reset-password" element={<Pages.ResetPassword />} />
        <Route
          path="/forgot-verification"
          element={<Pages.ForgotVerification />}
        />
        <Route path="/step-1" element={<Pages.Step1 />} />
        <Route path="/step-2" element={<Pages.Step2 />} />
        <Route path="/step-3" element={<Pages.Step3 />} />
        <Route path="/step-4" element={<Pages.Step4 />} />
        <Route path="/step-5" element={<Pages.Step5 />} />
        <Route path="/step-6" element={<Pages.Step6 />} />
        <Route path="/step-7" element={<Pages.Step7 />} />
        <Route path="/my-cart" element={<Pages.MyCart />} />
        <Route path="/checkout" element={<Pages.Checkout />} />
        <Route path="/profile" element={<Pages.Profile />} />
        <Route path="/docterlisting" element={<Pages.DocterListing />} />
        <Route path="/product-details" element={<Pages.ProductDeatils />} />
        <Route path="/payment-done" element={<Pages.PaymentDonePage />} />
        <Route
          path="/doctor-description"
          element={<Pages.DoctorDescription />}
        />
        <Route path="/doctor-booking" element={<Pages.DoctorBooking />} />
        <Route path="/store-listing" element={<Pages.StoreListing />} />
        <Route path="/store-details" element={<Pages.StoreDetail />} />
        <Route path="/product-checkout" element={<Pages.ProductCheckout />} />
      </Routes>
    </>
  );
};
export default Routing;
