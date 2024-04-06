// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Layout } from "../../layouts";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "react-phone-input-2/lib/bootstrap.css";
import moment from "moment";
import {
  IconButton,
  InputAdornment,
  TextField,
  SelectChangeEvent,
  Select,
  MenuItem,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AddIcon from "@mui/icons-material/Add";
import PhoneInput from "react-phone-input-2";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  STORAGE_KEYS,
  getFromStorage,
  setToStorage,
  showError,
  showToast,
} from "../../constants";
import { usePostProfileSetupMutation } from "../../services/auth";
import { isNumber, isString } from "../../utils/validations";

const ProfileSetup = () => {
  const location = useLocation();
  const { state } = location;
  const [image, setImage] = useState<any>();
  const getData = getFromStorage(STORAGE_KEYS.res) as any;
  console.log(getData, "ddd");
  const navigate = useNavigate();
  const [updateProfile] = usePostProfileSetupMutation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [value, setValue] = useState("default");

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

  const [selectField, setSelectField] = React.useState("default");
  const handleChange = (event: SelectChangeEvent) => {
    setSelectField(event.target.value as string);
  };
  const handleChangeStatus = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: getData ? JSON.parse(getData)?.email : "",
      fullName: "",
      phone: getData ? JSON.parse(getData)?.phone : "",
      countryCode: "+1",
      dob: "",
      gender: "",
      password: "",
      confirmPassword: "",
      height: "",
      weight: "",
      martialStatus: "",
      address: "",
      occupation: "",
      id: 0,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .matches(
          /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
          "Please enter a valid email"
        ),
      fullName: Yup.string()
        .required("Name is required")
        .min(2, "Minimum 2 characters are required")
        .max(100, "Maximum 100 characters is required"),
      phone: Yup.string()
        .required("Phone number is required")
        .min(6, "Minimum 6 digits are required")
        .max(16, "Maximum 16 digits are required"),
      countryCode: Yup.string().required("Country code is required"),
      dob: Yup.string().required("Date of Birth is required"),
      height: Yup.string().required("Heigh is required"),
      weight: Yup.string().required("Weight is required"),
      address: Yup.string().required("Country,city is required"),
      occupation: Yup.string().required("Occupation is required"),
      occupation: Yup.string().required("Occupation is required"),
      password: Yup.string()
        .label("new Password")
        .required("New password is required.")
        .notOneOf(
          [Yup.ref("oldPassword"), null],
          "New password cannot be same as old password."
        ),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match.")
        .required("Confirm password is required."),
    }),
    onSubmit: async (values) => {
      formik.setSubmitting(true);
      setError(false);
      let body = {
        profile_photo: image?.File,
        email: values.email,
        name: values.fullName,
        phone_number: values.countryCode + formik.values.phone,
        countryCode: values.countryCode,
        dob: values.dob,
        gender: selectField,
        height: values.height,
        weight: values.weight,
        martialStatus: value,
        address: values.address,
        occupation: values.occupation,
        id: getData ? JSON.parse(getData)?.id : 0,
        password: values.password,
        password_confirmation: values.password,
      };

      try {
        const response = await updateProfile(body).unwrap();
        if (response?.status === 200) {
          // if (response?.data?.isEmailVerify) {
          showToast("Profile updated successfully");
          // const newData = response?.data?.id;
          setToStorage(STORAGE_KEYS.stepID, response?.data?.id);
          navigate("/step-1");

          // }
        }
      } catch (error: any) {
        showError(error?.data?.message || "");
      }
    },
  });

  const handleChangePhone = (phone: any, country: any) => {
    // formik.setFieldValue("phone", val);
    formik.setFieldValue("phone", phone?.replace(country.dialCode, ""));
    formik.setFieldValue("countryCode", country?.dialCode);
    // formik.setFieldValue("countryName", country?.countryCode.toUpperCase());
  };

  useEffect(() => {
    if (getData) {
      formik.setFieldValue("countryCode", JSON.parse(getData)?.countryCode);
    }
  }, []);

  return (
    <Layout>
      <main className="content auth_page">
        <section className="auth_sc uh_spc">
          <div className="conta_iner">
            <div className="inner">
              <div className="hd_4 text_center">
                {/* <a onClick={() => navigate("/login")} className="back_icon">
                  <ArrowBackIcon />
                </a> */}
                <h2>Profile Setup</h2>
              </div>
              <form className="form" onSubmit={formik.handleSubmit}>
                <div className="control_group text_center">
                  <div className="upload_image">
                    <figure>
                      <img
                        src={
                          image
                            ? image
                            : "/static/images/user_icon_placeholder.svg"
                        }
                      />
                    </figure>
                    <div className="action">
                      <AddIcon />
                      <input
                        type="file"
                        inputProps={{
                          accept: "image/png,image/jpeg",
                        }}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                          const files = (event.target as HTMLInputElement)
                            .files;
                          if (files && files[0].type.includes("image")) {
                            setImage(files);
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="control_group">
                  <label>Full name</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    className="text_field"
                    fullWidth
                    name="fullName"
                    onChange={(val) => {
                      if (
                        val.target.value === " " ||
                        val.target.value === "."
                      ) {
                      } else if (isString(val.target.value)) {
                        formik.handleChange(val);
                      }
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    helperText={
                      formik.touched.fullName && formik.errors.fullName
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Email Id</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    className="text_field"
                    fullWidth
                    disabled={JSON.parse(getData)?.email}
                    name="email"
                    value={formik.values.email}
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
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </div>
                <div className="control_group">
                  <label>Phone number</label>
                  <PhoneInput
                    country={"us"}
                    placeholder="0 (000) 000-000"
                    enableSearch={true}
                    disabled={JSON.parse(getData)?.phone}
                    inputStyle={{ width: "100%" }}
                    onChange={(phone, country) =>
                      handleChangePhone(phone, country)
                    }
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
                <div className="control_group">
                  <label>Gender</label>
                  <Select
                    fullWidth
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    label="social-account"
                    value={selectField}
                    onChange={handleChange}
                    name="gender"
                  >
                    <MenuItem disabled value="default">
                      Select
                    </MenuItem>
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Non-binary"}>Non-Binary</MenuItem>
                  </Select>
                </div>
                <div className="control_group">
                  <label>Date of birth</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    name="dob"
                    className="text_field"
                    type="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.dob}
                    helperText={formik.touched.dob && formik.errors.dob}
                    inputProps={{
                      // max: new Date().toISOString().split("T")[0],
                      max: moment().subtract(18, "years").format("YYYY-MM-DD"),
                    }}
                    onKeyDown={(e) => e.preventDefault()} // Prevent keyboard input
                    InputProps={{ disableUnderline: true }}
                  />
                </div>
                <div className="control_group">
                  <label>Height</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    className="text_field"
                    fullWidth
                    name="height"
                    onChange={(val) => {
                      if (
                        val.target.value === " " ||
                        val.target.value === "."
                      ) {
                      } else if (isNumber(val.target.value)) {
                        formik.handleChange(val);
                      }
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.height}
                    helperText={formik.touched.height && formik.errors.height}
                  />
                </div>
                <div className="control_group">
                  <label>Weight</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    className="text_field"
                    fullWidth
                    name="weight"
                    onChange={(val) => {
                      if (
                        val.target.value === " " ||
                        val.target.value === "."
                      ) {
                      } else if (isNumber(val.target.value)) {
                        formik.handleChange(val);
                      }
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.weight}
                    helperText={formik.touched.weight && formik.errors.weight}
                  />
                </div>
                <div className="control_group">
                  <label>Martial status</label>
                  <Select
                    fullWidth
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    label="social-account"
                    value={value}
                    onChange={handleChangeStatus}
                    name="gender"
                  >
                    <MenuItem disabled value="default">
                      Select
                    </MenuItem>
                    <MenuItem value={"Married"}>Married</MenuItem>
                    <MenuItem value={"Un-married"}>Un-married</MenuItem>
                  </Select>
                </div>
                <div className="control_group">
                  <label>Country, City</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    className="text_field"
                    name="address"
                    onChange={(val) => {
                      if (
                        val.target.value === " " ||
                        val.target.value === "."
                      ) {
                      } else if (isString(val.target.value)) {
                        formik.handleChange(val);
                      }
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                    helperText={formik.touched.address && formik.errors.address}
                  />
                </div>
                <div className="control_group">
                  <label>Occupation</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    className="text_field"
                    fullWidth
                    name="occupation"
                    onChange={(val) => {
                      if (
                        val.target.value === " " ||
                        val.target.value === "."
                      ) {
                      } else if (isString(val.target.value)) {
                        formik.handleChange(val);
                      }
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.occupation}
                    helperText={
                      formik.touched.occupation && formik.errors.occupation
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Password</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter Password"
                    fullWidth
                    className="text_field"
                    name="password"
                    type={showPassword1 ? "text" : "password"}
                    variant="outlined"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
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
                    className="text_field"
                    placeholder="Enter Password"
                    fullWidth
                    name="confirmPassword"
                    type={showPassword2 ? "text" : "password"}
                    variant="outlined"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.confirmPassword &&
                      Boolean(formik.errors.confirmPassword)
                    }
                    helperText={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                    }
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
                <div className="form_btn">
                  <button
                    type="submit"
                    className="btnn btn_xsm btn_primary w_100"
                    // onClick={() => navigate("/step-1")}
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

export default ProfileSetup;
