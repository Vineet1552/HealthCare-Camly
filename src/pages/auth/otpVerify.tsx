import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Layout } from "../../layouts";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import OtpInput from "react-otp-input";
import FormControl from "@mui/material/FormControl";
import {
  usePostForgotPassMutation,
  usePostVerifyOtpMutation,
} from "../../services/auth";
import {
  STORAGE_KEYS,
  getFromStorage,
  showError,
  showToast,
} from "../../constants";
import { Alert } from "@mui/material";

const OtpVerify = () => {
  const location = useLocation();
  const [optVerificationMutation] = usePostVerifyOtpMutation();
  const [forgotPass] = usePostForgotPassMutation();
  const getData = getFromStorage(STORAGE_KEYS.res) as any;
  // console.log(typeof JSON.parse(getData)?.id);
  const state = location;
  console.log(state, "--");
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);

  const handleNothing = async () => {
    if (otp?.length === 4) {
      setError(false);

      const body2 = {
        // type: state?.page === "signUp" ? "signup" : "login",
        ...(state?.state?.type === "phone"
          ? { countryCode: state?.state?.countryCode }
          : {}),
        ...(state?.state?.type === "phone"
          ? { countryName: state?.state?.countryName }
          : {}),
        ...(state?.state?.type === "phone"
          ? { phone: state?.state?.phone }
          : { email: state?.state?.email }),
        // ...(state?.state?.page === "login" ? { deviceToken: fcm_token } : {}),
        // ...(state?.state?.page === "login" ? { deviceType: "WEB" } : {}),
        otp: otp,
      };

      try {
        const res = await forgotPass(body2).unwrap();
        navigate("/reset-password", { state: state });
      } catch (error: any) {
        if (error?.data?.message) {
          showError(error?.data?.message || "");
        }
      }
    } else {
      setError(true);
    }
  };

  const handleSubmit = async () => {
    if (otp?.length === 4) {
      setError(false);

      const body = {
        // type: state?.page === "signUp" ? "signup" : "login",
        ...(state?.state?.type === "phone"
          ? { countryCode: state?.state?.countryCode }
          : {}),
        ...(state?.state?.type === "phone"
          ? { countryName: state?.state?.countryName }
          : {}),
        ...(state?.state?.type === "phone"
          ? { phone: state?.state?.phone }
          : { email: state?.state?.email }),
        // ...(state?.state?.page === "login" ? { deviceToken: fcm_token } : {}),
        // ...(state?.state?.page === "login" ? { deviceType: "WEB" } : {}),
        otp: otp,
        id: getData ? JSON.parse(getData)?.id : 0,
      };

      try {
        const res = await optVerificationMutation(body).unwrap();
        navigate("/profile-setup", { state: state });
        // if (res?.statusCode === 200) {
        //   if (state?.state?.page === "signUp") {
        //     // setToStorage(
        //     //   STORAGE_KEYS.tempToken,
        //     //   JSON.stringify(res?.data?.token)
        //     // );
        //     // dispatch(
        //     //   temporaryToken({
        //     //     tempToken: res?.data?.token || null,
        //     //   })
        //     // );
        //     navigate("/profile-setup", { state: state, replace: true });
        //   }
        //   // else if (state?.type === "profile") {
        //   //   showToast(translation.auth.profileCredit);
        //   //   navigate("/", { replace: true });
        //   // }
        //   else if (state?.state?.page === "forgot") {
        //     // setToStorage(
        //     //   STORAGE_KEYS.tempToken,
        //     //   JSON.stringify(res?.data?.token)
        //     // );
        //     // dispatch(
        //     //   temporaryToken({
        //     //     tempToken: res?.data?.token || null,
        //     //   })
        //     // );
        //     navigate("/reset-password", { replace: true });
        //   }
        //   //  else if (state?.page === "login") {
        //   //   console.log("state: /kkkkk", state);
        //   //   setToStorage(STORAGE_KEYS.token, res?.data?.token || "");
        //   //   dispatch(
        //   //     setCredentials({
        //   //       user: res?.data,
        //   //       token: res?.data?.token || "",
        //   //     })
        //   //   );
        //   //   if (
        //   //     state?.type === "phone" &&
        //   //     // res?.data?.isVerified &&
        //   //     res?.data?.isProfileComplete
        //   //   ) {
        //   //     navigate("/dashboard", { replace: true });
        //   //   }
        //   //   if (res?.data && !res?.data?.isProfileComplete) {
        //   //     navigate("/profile-setup", { state: state, replace: true });
        //   //   }
        //   // } else {
        //   //   showToast("Login Successfully.");
        //   //   setToStorage(STORAGE_KEYS.token, res?.data?.token || "");
        //   //   setToStorage(STORAGE_KEYS.credentials, JSON.stringify(res?.data));
        //   //   dispatch(
        //   //     setCredentials({
        //   //       user: res?.data,
        //   //       token: res?.data?.token || "",
        //   //     })
        //   //   );
        //   //   navigate("/dashboard", { replace: true });
        //   // }
        // }
      } catch (error: any) {
        if (error?.data?.message) {
          showError(error?.data?.message || "");
        }
      }
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Layout>
        <main className="content auth_page">
          <section className="auth_sc uh_spc">
            <div className="conta_iner">
              <div className="inner">
                <div className="hd_4 text_center">
                  <a onClick={() => navigate("/login")} className="back_icon">
                    <ArrowBackIcon />
                  </a>
                  <h2>Verification</h2>
                  <p>
                    We have just sent you a verification code via <br />
                    <b className="c_primary">{state.state.type === "phone" ? `+${state?.state?.countryCode} ${state?.state?.phone}` : state?.state?.email}</b>
                    {/* <b className="c_primary">
                      {state.state.type === "phone"? `${state.state.countryCode} ${state.state.phone}`: state.state.email}
                    </b> */}
                  </p>
                </div>

                <FormControl className="otp_input" sx={{ width: "100%" }}>
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderInput={(props) => <input {...props} />}
                    inputType="tel"
                  />
                  <br />
                  {error && otp.length !== 4 ? (
                    <h6 className="err_msg" style={{ textAlign: "center" }}>
                      Otp is required
                    </h6>
                  ) : (
                    ""
                  )}
                </FormControl>
                <div className="form_btn">
                  <button
                    type="submit"
                    className="btnn btn_xsm btn_primary w_100"
                    onClick={
                      state.state.page === "signUp"
                        ? handleSubmit
                        : handleNothing
                    }
                  >
                    Next
                  </button>
                </div>
                <div className="form_bottom">
                  <p>The verify code will expire in 00:59</p>
                  <p>
                    <a href="javascript:void(0)" className="c_primary">
                      <b>Resend Code</b>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default OtpVerify;
