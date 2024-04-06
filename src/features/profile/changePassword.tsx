import React, { useState } from "react";
import {
  IconButton,
  InputAdornment,
  TextField,
  useRadioGroup,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useChangePasswordMutation } from "../../services/auth";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  STORAGE_KEYS,
  getFromStorage,
  showError,
  showToast,
} from "../../constants";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
export default function ChangePassword() {
  const [showPassword1, setShowPassword1] = useState(false);
  const [changePassword] = useChangePasswordMutation();
  const navigate = useNavigate();
  const Id = getFromStorage(STORAGE_KEYS.userId);
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

  const [showPassword3, setShowPassword3] = useState(false);
  const handleClickShowPassword3 = () => {
    setShowPassword3(!showPassword3);
  };
  const handleMouseDownPassword3 = (event: any) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      current_password: "",
      new_password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      current_password: Yup.string().required("Old Password is required"),
      new_password: Yup.string().required("New Password is required"),
      confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("new_password")], "Passwords must match"),
    }),
    onSubmit: async (values) => {
      formik.setSubmitting(true);
      let body = {
        current_password: formik.values.current_password,
        new_password: formik.values.new_password,
        id: Id,
      };
      try {
        const response = await changePassword(body).unwrap();
        if (response.status === 200) {
          navigate("/profile");
          showToast(response?.message);
        }
      } catch (error: any) {
        console.error("error", error);
        showError(error?.data?.error);
      }
    },
  });

  return (
    <div
      className="tab-pane fade"
      id="v-pills-Password"
      role="tabpanel"
      aria-labelledby="v-pills-Password-tab"
    >
      <div className="account_head">
        <h3>Change Password</h3>
      </div>
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="control_group">
          <label>Old Password</label>
          <TextField
            hiddenLabel
            placeholder="Enter Password"
            fullWidth
            className="text_field"
            id="current_password"
            name="current_password"
            type={showPassword1 ? "text" : "password"}
            variant="outlined"
            value={formik.values.current_password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={
              formik.touched.current_password &&
              Boolean(formik.errors.current_password)
            }
            helperText={
              formik.touched.current_password && formik.errors.current_password
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
          <label>New Password</label>
          <TextField
            hiddenLabel
            placeholder="Enter Password"
            fullWidth
            id="new_password"
            className="text_field"
            name="new_password"
            type={showPassword1 ? "text" : "password"}
            variant="outlined"
            value={formik.values.new_password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={
              formik.touched.new_password && Boolean(formik.errors.new_password)
            }
            helperText={
              formik.touched.new_password && formik.errors.new_password
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
            id="confirmPassword"
            name="confirmPassword"
            className="text_field"
            type={showPassword3 ? "text" : "password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment className="eye_btn" position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword3}
                    onMouseDown={handleMouseDownPassword3}
                    edge="end"
                  >
                    {showPassword3 ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="form_btn">
          <button type="submit" className="btnn btn_xsm btn_primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
