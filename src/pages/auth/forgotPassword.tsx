import React, { useState } from "react";
import { Layout } from "../../layouts";
import { useLocation, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useFormik } from "formik";
import * as Yup from "yup";
import { showError, showToast } from "../../constants";
import "react-phone-input-2/lib/bootstrap.css";
import PhoneInput from "react-phone-input-2";

const ForgotPassword = () => {
  const location = useLocation();
  const { state } = location;
  console.log(state);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [error, setError] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      countryCode: "",
    },
    validationSchema: Yup.object({
      remember: Yup.boolean(),
      email:
        state === "email"
          ? Yup.string()
              .required("Email is required")
              .matches(
                /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                "Enter a valid email address!"
              )
          : Yup.string().notRequired(),
      phone:
        state === "email"
          ? Yup.string().notRequired()
          : Yup.string()
              .typeError("That doesn't look like a phone number")
              .min(8)
              .max(16)
              .required("A phone number is required"),
    }),

    onSubmit: async (values) => {
      // formik.setSubmitting(true);
      console.log("hitt");
      const data = {
        page: "login",
        type: state === "email" ? "email" : "phone",
        ...(state === "phone" ? { countryCode: values.countryCode } : {}),
        ...(state === "phone"
          ? { phone: values.phone }
          : { email: values.email }),
      };

      navigate("/otp-verify", { state: data });
    },
  });

  const handleChangePhone = (phone: any, country: any) => {
    setPhone(phone?.replace(country.dialCode, ""));
    setCountryCode(country?.dialCode);
    // formik.setFieldValue("countryName", country?.countryCode.toUpperCase());
  };

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
                <h2>Forgot password?</h2>
                <p>Please enter your details.</p>
              </div>
              <form onSubmit={formik.handleSubmit}>
                {state === "phone" ? (
                  <div className="control_group">
                    <label>Phone Number</label>
                    <PhoneInput
                      country={"us"}
                      placeholder="0 (000) 000-000"
                      enableSearch={true}
                      inputStyle={{ width: "100%" }}
                      onChange={(phone, country) =>
                        handleChangePhone(phone, country)
                      }
                      onBlur={formik.handleBlur}
                      value={formik.values.countryCode + formik.values.phone}
                    />
                  </div>
                ) : (
                  <div className="control_group">
                    <label> email </label>
                    <TextField
                      hiddenLabel
                      type="email"
                      placeholder="Enter here"
                      fullWidth
                      name="email"
                      onChange={(val) => {
                        if (
                          val.target.value === " " ||
                          val.target.value === "."
                        ) {
                        } else {
                          formik.handleChange(val);
                        }
                      }}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </div>
                )}

                <div className="form_btn">
                  <button
                    type="submit"
                    className="btnn btn_xsm btn_primary w_100"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ForgotPassword;
