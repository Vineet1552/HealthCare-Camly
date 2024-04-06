import { TextField } from "@mui/material";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/bootstrap.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { STORAGE_KEYS, setToStorage, showError } from "../../constants";
import { usePostSignUpMutation } from "../../services/auth";
import PhoneInput from "react-phone-input-2";

const SignUp = () => {
  const navigate = useNavigate();
  const [isEmail, setIsEmail] = useState(false);
  const [signUpMutation] = usePostSignUpMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      countryCode: "+1",
      countryName: "US",
    },
    validationSchema: Yup.object({
      email: !isEmail
        ? Yup.string()
            .required("Email is required")
            .matches(
              /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
              "Please enter a valid email"
            )
        : Yup.string().notRequired(),

      phone: !isEmail
        ? Yup.string().notRequired()
        : Yup.string()
            .required("Phone number is required")
            .min(6, "Phone number cannot have less than 6 digits ")
            .max(16),
    }),
    onSubmit: async (values) => {
      formik.setSubmitting(true);
      let body = {
        ...(!isEmail ? { email: formik.values.email } : {}),
        ...(isEmail
          ? { phone_number: formik.values.countryCode + formik.values.phone }
          : {}),
        ...(isEmail ? { countryCode: formik.values.countryCode } : {}),
        ...(isEmail ? { countryName: formik.values.countryName } : {}),
      };
      console.log(body);

      try {
        const response = await signUpMutation(body).unwrap();
        // if (response?.mesaage === "otp sent successfully ") {

        const newData = {
          phone: formik.values.phone,
          email: response?.user?.email,
          id: response?.user?.id,
          countryCode: formik.values.countryCode,
        };

        setToStorage(STORAGE_KEYS.res, JSON.stringify(newData));

        const data = {
          page: "signUp",
          type: !isEmail ? "email" : "phone",
          ...(isEmail ? { countryCode: formik.values.countryCode } : {}),
          ...(isEmail ? { countryName: formik.values.countryName } : {}),
          ...(isEmail
            ? { phone: formik.values.phone }
            : { email: formik.values.email }),
        };

        navigate("/otp-verify", { state: data });
        // }
      } catch (error: any) {
        showError(error?.data?.message || "");
      }
    },
  });

  const handleChangePhone = (phone: any, country: any) => {
    formik.setFieldValue("phone", phone?.replace(country.dialCode, ""));
    formik.setFieldValue("countryCode", country?.dialCode);
    formik.setFieldValue("countryName", country?.countryCode.toUpperCase());
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        {isEmail ? (
          <div className="tab-pane">
            <div className="control_group">
              <label>Phone Number</label>
              <PhoneInput
                country={"us"}
                placeholder="0 (000) 000-000"
                enableSearch={true}
                inputStyle={{ width: "100%" }}
                onChange={(phone, country) => handleChangePhone(phone, country)}
                onBlur={formik.handleBlur}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault(); // Prevent default behavior (form submission)
                    formik.handleSubmit(); // Manually submit the form
                  }
                }}
                value={formik.values.countryCode + formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <h6 className="err_msg">
                  {formik.touched.phone && formik.errors.phone}
                </h6>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          <div className="tab-pane ">
            <div className="control_group">
              <label>Email</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                className="text_field"
                fullWidth
                name="email"
                onChange={(val) => {
                  if (val.target.value === " " || val.target.value === ".") {
                  } else {
                    formik.handleChange(val);
                  }
                }}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>
          </div>
        )}

        <div className="form_btn">
          <button
            type="submit"
            className="btnn btn_xsm btn_primary w_100"
            // onClick={() => navigate("/otp-verify")}
          >
            Next
          </button>
        </div>
      </form>
      <div className="text_tabs">
        {!isEmail ? (
          <button
            className="nav-link"
            type="button"
            onClick={() => setIsEmail(true)}
          >
            Sign up with Phone Number
          </button>
        ) : (
          <button
            className="nav-link"
            type="button"
            onClick={() => setIsEmail(false)}
          >
            Sign up with Email
          </button>
        )}
      </div>
    </>
  );
};

export default SignUp;
