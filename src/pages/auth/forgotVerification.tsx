import { useState } from "react";
import { Layout } from "../../layouts";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import OtpInput from "react-otp-input";
import FormControl from '@mui/material/FormControl';

const ForgotVerification = () => {

  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  

  return (
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
                  <b className="c_primary">+91 93230 02660</b>
                </p>
              </div>
              <form className="form" method="post" action="profile-setup.php">
                <FormControl
                  className="otp_input"
                  sx={{ width: '100%' }
                  }>
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderInput={(props) => <input {...props} />}
                    inputType="tel"
                  />
                </FormControl>
                <div className="form_btn">
                  <button
                    type="submit"
                    className="btnn btn_xsm btn_primary w_100"
                    onClick={() => navigate("/reset-password")}
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
              </form>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ForgotVerification;
