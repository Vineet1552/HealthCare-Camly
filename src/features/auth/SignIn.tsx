import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as Yup from "yup";
import {
  getFromStorage,
  removeFromStorage,
  setToStorage,
  showError,
  showToast,
  Loader,
  STORAGE_KEYS,
} from "../../constants";
import { usePostLoginMutation } from "../../services/auth";
import { useAppDispatch } from "../../hooks/store";
import { setCredentials } from "../../reducers/authSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isEmail, setIsEmail] = useState(true);
  const [loginApi, { isLoading }] = usePostLoginMutation();

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
      email: "",
      phone: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object({
      remember: Yup.boolean(),
      email: isEmail
        ? Yup.string()
            .required("Email is required")
            .matches(
              /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
              "Enter a valid email address!"
            )
        : Yup.string().notRequired(),
      phone: isEmail
        ? Yup.string().notRequired()
        : Yup.string()
            .typeError("That doesn't look like a phone number")
            .min(8)
            .max(16)
            .required("A phone number is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password should be min 6 letters"),
    }),

    onSubmit: async (values: any) => {
      formik.setSubmitting(true);
      let body = {
        ...(isEmail ? { email: values.email } : { phone: values.phone }),
        password: formik.values.password,
        ...(!isEmail ? { countryCode: values.countryCode } : {}),
        ...(!isEmail ? { countryName: values.countryName } : {}),
      };

      console.log(body);
      try {
        const response = await loginApi(body).unwrap();
        if (response?.status === 200) {
          // showToast("Login Successfully.");
          setToStorage(STORAGE_KEYS.token, response?.token || "");
          setToStorage(STORAGE_KEYS.userId, response?.user?.id || "");
          dispatch(
            setCredentials({
              user: response?.user || null,
              token: response?.token || null,
            })
          );
          if (formik?.values?.remember) {
            setToStorage(STORAGE_KEYS.credentials, JSON.stringify(body));
          } else {
            removeFromStorage(STORAGE_KEYS.credentials);
          }
          navigate("/", { replace: true });
        }
      } catch (error: any) {
        showError(error?.data?.message || "");
      }
    },
  });

  useEffect(() => {
    const data = getFromStorage(STORAGE_KEYS.credentials);
    if (data) {
      const rememberData = JSON.parse(`${data}`);
      formik.setFieldValue("phone", rememberData?.phone);
      formik.setFieldValue("password", rememberData?.password);
      formik.setFieldValue("email", rememberData?.email);
      formik.setFieldValue("remember", true);
    }
  }, []);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        {!isEmail ? (
          <div className="tab-pane">
            <div className="control_group">
              <label>Phone Number</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                className="text_field"
                fullWidth
                name="phone"
                onChange={(val) => {
                  if (val.target.value === " " || val.target.value === ".") {
                  } else {
                    formik.handleChange(val);
                  }
                }}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                helperText={formik.touched.phone && formik.errors.phone}
              />
              {/* {formik.touched.phone && formik.errors.phone ? <p>error</p> : ""} */}
            </div>
            <div className="control_group">
              <label>Password</label>
              <TextField
                hiddenLabel
                placeholder="Enter Password"
                fullWidth
                className="text_field"
                name="password"
                onChange={(val) => {
                  formik.handleChange(val);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                helperText={formik.touched.password && formik.errors.password}
                type={showPassword1 ? "text" : "password"}
                variant="outlined"
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
            <div className="control_group control_group_flex">
              <label className="checkbox_label">
                {/* <Checkbox /> Remember me */}
                <FormControlLabel
                  control={<Checkbox />}
                  label={"Remember me"}
                  checked={formik.values.remember}
                  name="remember"
                  onChange={formik.handleChange}
                />
              </label>
              <p>
                <small>
                  <a
                    href="javascript:void(0)"
                    onClick={() =>
                      navigate("/forgot-password", { state: "phone" })
                    }
                  >
                    Forgot Password
                  </a>
                </small>
              </p>
            </div>
          </div>
        ) : (
          <div className="tab-pane">
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
            <div className="control_group">
              <label>Password</label>
              <TextField
                hiddenLabel
                placeholder="Enter Password"
                className="text_field"
                fullWidth
                name="password"
                helperText={formik.touched.password && formik.errors.password}
                onChange={(val) => {
                  formik.handleChange(val);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                type={showPassword2 ? "text" : "password"}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment className="eye_btn" position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword2}
                        edge="end"
                      >
                        {showPassword2 ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="control_group control_group_flex">
              <label className="checkbox_label">
                <Checkbox /> Remember me
              </label>
              <p>
                <small>
                  <a
                    href="javascript:void(0)"
                    onClick={() =>
                      navigate("/forgot-password", { state: "email" })
                    }
                  >
                    Forgot Password
                  </a>
                </small>
              </p>
            </div>
          </div>
        )}
        <div className="form_btn">
          <Button type="submit" className="btnn btn_xsm btn_primary w_100">
            Login
          </Button>
        </div>
      </form>

      <div className="text_tabs">
        {!isEmail ? (
          <Button
            className="nav-link"
            type="button"
            onClick={() => setIsEmail(true)}
          >
            Sign in with email
          </Button>
        ) : (
          <Button
            className="nav-link"
            type="button"
            onClick={() => setIsEmail(false)}
          >
            Sign in with phone number
          </Button>
        )}
      </div>
    </>
  );
};

export default SignIn;
