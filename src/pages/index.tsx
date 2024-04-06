/* eslint-disable import/no-anonymous-default-export */
import Home from "./Home";
import Login from "./auth/login";
import OtpVerify from "./auth/otpVerify";
import ProfileSetup from "./auth/profileSetup";
import ForgotPassword from "./auth/forgotPassword";
import ResetPassword from "./auth/resetPassword";
import ForgotVerification from "./auth/forgotVerification";
import DocterListing from "./docterListing";
import { DoctorBooking } from "./docterBooking";
import { Checkout } from "./checkout";
import { MyCart } from "./myCart";
import { PaymentDonePage } from "./paymentDone";
import Profile from "./Profile";
import Step1 from "./auth/step1";
import Step2 from "./auth/step2";
import Step3 from "./auth/step3";
import Step4 from "./auth/step4";
import Step5 from "./auth/step5";
import Step6 from "./auth/step6";
import Step7 from "./auth/step7";
import { ProductDeatils } from "./productDetails";
import { DoctorDescription } from "./docterDescription";
import StoreListing from "./storeListing";
import { StoreDetail } from "./storeListing/storeDetails";
import { ProductCheckout } from "./productCheckout";

export default {
  Home,
  Login,
  OtpVerify,
  ProfileSetup,
  PaymentDonePage,
  DoctorBooking,
  DocterListing,
  Checkout,
  MyCart,
  Profile,
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  ForgotPassword,
  ResetPassword,
  ForgotVerification,
  ProductDeatils,
  DoctorDescription,
  StoreListing,
  StoreDetail,
  ProductCheckout,
};
