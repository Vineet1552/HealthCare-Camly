import CloseIcon from "@mui/icons-material/Close";
import {
  Modal,
  Button,
  TextField,
  SelectChangeEvent,
  Select,
  MenuItem,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { isString, useFormik } from "formik";
import * as Yup from "yup";
import useAuth from "../../hooks/useAuth";
import { usePostProfileSetupMutation } from "../../services/auth";
import {
  STORAGE_KEYS,
  getFromStorage,
  showError,
  showToast,
} from "../../constants";
import PhoneInput from "react-phone-input-2";
import moment from "moment";
import "react-phone-input-2/lib/bootstrap.css";
import { isNumber } from "../../utils/validations";
import { setCredentials } from "../../reducers/authSlice";
import { useAppDispatch } from "../../hooks/store";

interface editProfileModalProps {
  open: boolean;
  onClose: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export default function EditProfile({
  open,
  onClose,
  setOpen,
}: editProfileModalProps) {
  const userData = useAuth();
  const dispatch = useAppDispatch();
  const [updateProfile] = usePostProfileSetupMutation();
  const userId = getFromStorage(STORAGE_KEYS.userId);
  console.log(userId);
  const [value, setValue] = useState("default");

  const [selectField, setSelectField] = React.useState("default");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectField(event.target.value as string);
  };

  const handleChangePhone = (phone: any, country: any) => {
    // formik.setFieldValue("phone", val);
    formik.setFieldValue("phone", phone?.replace(country.dialCode, ""));
    formik.setFieldValue("countryCode", country?.dialCode);
    // formik.setFieldValue("countryName", country?.countryCode.toUpperCase());
  };

  const handleChangeStatus = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: userData?.email || "",
      fullName: userData?.name || "",
      phone: userData?.phone_number || "",
      countryCode: "+1",
      dob: userData?.DOB || "",
      gender: "",
      height: userData?.height?.toString() || "",
      weight: userData?.weight?.toString() || "",
      martialStatus: "",
      address: userData?.country || "",
      occupation: userData?.occupation || "",
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
    }),
    onSubmit: async (values) => {
      formik.setSubmitting(true);

      let body = {
        profile_photo: "",
        email: values.email,
        name: values.fullName,
        phone_number: values.countryCode + formik.values.phone,
        countryCode: values.countryCode,
        DOB: values.dob,
        gender: selectField,
        height: values.height,
        weight: values.weight,
        marital_status: value,
        country: values.address,
        occupation: values.occupation,
        id: userId,
      };
      const token = getFromStorage(STORAGE_KEYS.token);
      try {
        const response = await updateProfile(body).unwrap();
        if (response?.status === 200) {
          // if (response?.data?.isEmailVerify) {
          showToast("Profile updated successfully");
          setOpen(false);
          dispatch(
            setCredentials({
              user: response?.data,
              token: token,
            })
          );
          // const newData = response?.data?.id;
          //   setToStorage(STORAGE_KEYS.stepID, response?.data?.id);

          // }
        }
      } catch (error: any) {
        showError(error?.data?.message || "");
      }
    },
  });

  useEffect(() => {
    if (userData) {
      setSelectField(userData?.gender);
      setValue(userData?.marital_status);
    }
  }, []);

  return (
    <div className="modal-dialog">
      <div className="modal-body hd_4">
        <div className="btn-close" onClick={() => setOpen(false)}>
          <CloseIcon />
        </div>
        <h2>Edit Profile</h2>
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="gap_p">
            <div className="control_group text_center">
              <div className="upload_image">
                <figure>
                  <img src="static/images/dummy.png" alt="icon" />
                </figure>
                <div className="action">
                  <AddIcon />
                  <input placeholder="img" type="file" />
                </div>
              </div>
            </div>
            <div className="control_group w_50">
              <label>Full name</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                name="fullName"
                onChange={(val) => {
                  if (val.target.value === " " || val.target.value === ".") {
                  } else if (isString(val.target.value)) {
                    formik.handleChange(val);
                  }
                }}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
            </div>
            <div className="control_group w_50">
              <label>Email Id</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                type="email"
                disabled={Boolean(userData?.email)}
                name="email"
                value={formik.values.email}
                onChange={(val) => {
                  if (val.target.value === " " || val.target.value === ".") {
                  } else {
                    formik.handleChange(val);
                  }
                }}
                onBlur={formik.handleBlur}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>
            <div className="control_group w_50">
              <label>Phone number</label>
              <PhoneInput
                country={"us"}
                placeholder="0 (000) 000-000"
                enableSearch={true}
                // disabled={Boolean(userData?.phone_number)}
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
            <div className="control_group w_50">
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
            <div className="control_group w_50">
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
            <div className="control_group w_50">
              <label>Height</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                name="height"
                onChange={(val) => {
                  if (val.target.value === " " || val.target.value === ".") {
                  } else if (isNumber(val.target.value)) {
                    formik.handleChange(val);
                  }
                }}
                onBlur={formik.handleBlur}
                value={formik.values.height}
                helperText={formik.touched.height && formik.errors.height}
              />
            </div>
            <div className="control_group w_50">
              <label>Weight</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                name="weight"
                onChange={(val) => {
                  if (val.target.value === " " || val.target.value === ".") {
                  } else if (isNumber(val.target.value)) {
                    formik.handleChange(val);
                  }
                }}
                onBlur={formik.handleBlur}
                value={formik.values.weight}
                helperText={formik.touched.weight && formik.errors.weight}
              />
            </div>
            <div className="control_group w_50">
              <label>Martial status</label>
              <Select
                fullWidth
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                label="social-account"
                value={value || "default"}
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
            <div className="control_group w_50">
              <label>Country, City</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                className="text_field"
                name="address"
                onChange={(val) => {
                  if (val.target.value === " " || val.target.value === ".") {
                  } else if (isString(val.target.value)) {
                    formik.handleChange(val);
                  }
                }}
                onBlur={formik.handleBlur}
                value={formik.values.address}
                helperText={formik.touched.address && formik.errors.address}
              />
            </div>
            <div className="control_group w_50">
              <label>Occupation</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                name="occupation"
                onChange={(val) => {
                  if (val.target.value === " " || val.target.value === ".") {
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
          </div>
          <div className="btn_flex">
            <a
              className="c_danger"
              href="javascript:void(0)"
              onClick={() => setOpen(false)}
            >
              Cancel
            </a>
            <Button className="btnn btn_xsm btn_primary" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
