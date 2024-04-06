import React, { useState } from "react";
import { Layout } from "../../layouts";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import * as Yup from "yup";
import { showError, showToast } from "../../constants";
import { usePostResetPasswordMutation } from "../../services/auth";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [resetPass] = usePostResetPasswordMutation();
  const location = useLocation();
  const { state } = location;
  console.log(state);
  const [isEmail, setIsEmail] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const handleClickShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };
  const handleMouseDownPassword1 = (event: any) => {
    event.preventDefault();
  };

  const [showPassword2, setShowPassword2] = useState(false);
  const handleClickShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };
  const handleMouseDownPassword2 = (event: any) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      passwordConfirmation: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .label("Password")
        .required("Password is required")
        .min(6, "Minimum 6 characters are required"),

      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref("newPassword")], "Passwords must match")
        .required("Confirm password is required "),
    }),
    onSubmit: async () => {
      formik.setSubmitting(true);

      let body = {
        new_password: formik.values.newPassword,
        ...(state?.state?.type === "phone"
          ? { phone_number: state?.state?.phone }
          : { email: state?.state?.email }),
      };

      try {
        const response = await resetPass(body).unwrap();
        if (response?.status === 200) {
          showToast("Password reset successfully" || "");
        }
      } catch (error: any) {
        showError(error?.data?.message || "");
      }
      formik.setSubmitting(false);
      navigate("/login", {
        replace: true,
      });
    },
  });
  return (
    <Layout>
      <main className="content auth_page">
        <section className="auth_sc uh_spc">
          <div className="conta_iner">
            <div className="inner">
              <div className="hd_4 text_center">
                <a
                  onClick={() => navigate("/forgot-password")}
                  className="back_icon"
                >
                  <ArrowBackIcon />
                </a>
                <h2>Reset Password</h2>
                <p>Please set your new password</p>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="control_group">
                  <label>New Password</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter Password"
                    fullWidth
                    name="newPassword"
                    type={showPassword1 ? "text" : "password"}
                    variant="outlined"
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
                    value={formik.values.newPassword}
                    helperText={
                      formik.touched.newPassword && formik.errors.newPassword
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment className="eye_btn" position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword1}
                            onMouseDown={handleMouseDownPassword1}
                            edge="end"
                          >
                            {showPassword1 ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="control_group">
                  <label>Confirm Password</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter Password"
                    fullWidth
                    name="passwordConfirmation"
                    type={showPassword1 ? "text" : "password"}
                    variant="outlined"
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
                    value={formik.values.passwordConfirmation}
                    helperText={
                      formik.touched.passwordConfirmation &&
                      formik.errors.passwordConfirmation
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment className="eye_btn" position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword1}
                            onMouseDown={handleMouseDownPassword1}
                            edge="end"
                          >
                            {showPassword1 ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="form_btn">
                  <button
                    type="submit"
                    className="btnn btn_xsm btn_primary w_100"
                  >
                    Update
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

export default ResetPassword;
