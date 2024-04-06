// @ts-nocheck
import React, { Dispatch, SetStateAction } from "react";
import { Modal, Button, TextField } from "@mui/material";
import { generateResponsiveStyle } from "../utils/authModalStyle";
import CloseIcon from "@mui/icons-material/Close";
import {
  STORAGE_KEYS,
  getFromStorage,
  showError,
  showToast,
} from "../constants";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  usePostAddAddressMutation,
  usePostEditAddressMutation,
} from "../services/profile";
import { isNumber, isString } from "../utils/validations";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { UserAddress } from "../types/General";

const addressChange = [
  {
    string: "Add New Address",
  },
  {
    string: "Edit Address",
  },
];
interface AddressModalProps {
  open: boolean;
  onClose: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
  getAllAddress: any;
  addressById: any;
  isAdd: boolean;
}

export function AddressModal({
  open,
  onClose,
  setOpen,
  getAllAddress,
  addressById,
  isAdd,
}: AddressModalProps) {
  const style = generateResponsiveStyle();
  const userId = getFromStorage(STORAGE_KEYS.userId);
  console.log(addressById);
  const [addAddress] = usePostAddAddressMutation();
  const [editAddress] = usePostEditAddressMutation();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      first_name: !isAdd ? addressById?.first_name : "",
      last_name: !isAdd ? addressById?.last_name : "",
      email: !isAdd ? addressById?.email : "",
      address: !isAdd ? addressById?.address : "",
      city: !isAdd ? addressById?.city : "",
      zipcode: !isAdd ? addressById?.zipcode : "",
      phone: !isAdd ? addressById?.phone : "",
      countryCode: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .matches(
          /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
          "Please enter a valid email"
        ),
      first_name: Yup.string()
        .required("First name is required")
        .min(2, "Minimum 2 characters are required")
        .max(100, "Maximum 100 characters is required"),
      last_name: Yup.string()
        .required("Last name is required")
        .min(2, "Minimum 2 characters are required")
        .max(100, "Maximum 100 characters is required"),
      address: Yup.string()
        .required("Address is required")
        .min(2, "Minimum 2 characters are required")
        .max(100, "Maximum 100 characters is required"),
      city: Yup.string()
        .required("City is required")
        .min(2, "Minimum 2 characters are required")
        .max(100, "Maximum 100 characters is required"),
      zipcode: Yup.string()
        .required("Zip code is required")
        .min(2, "Minimum 2 characters are required")
        .max(100, "Maximum 100 characters is required"),
      phone: Yup.string()
        .required("Phone number is required")
        .min(6, "Minimum 6 digits are required")
        .max(16, "Maximum 16 digits are required"),
    }),
    onSubmit: async (values) => {
      formik.setSubmitting(true);

      let body = {
        first_name: values?.first_name,
        last_name: values.last_name,
        email: values.email,
        address: values.address,
        city: values.city,
        zipcode: values.zipcode,
        phone: values.countryCode + values.phone,
        user_id: userId,
      };

      let body2 = {
        id: addressById?.id,
        first_name: values?.first_name,
        last_name: values.last_name,
        email: values.email,
        address: values.address,
        city: values.city,
        zipcode: values.zipcode,
        phone: values.countryCode + values.phone,
        user_id: userId,
      };

      if (isAdd) {
        try {
          const response = await addAddress(body).unwrap();
          if (response?.status === 200) {
            // if (response?.data?.isEmailVerify) {
            showToast("Address added successfully");
            setOpen(false);
            getAllAddress();
            // const newData = response?.data?.id;
            //   setToStorage(STORAGE_KEYS.stepID, response?.data?.id);

            // }
          }
        } catch (error: any) {
          showError(error?.data?.message || "");
        }
      } else {
        try {
          const response = await editAddress(body2).unwrap();
          if (response?.status === 200) {
            // if (response?.data?.isEmailVerify) {
            showToast("Address updated successfully");
            setOpen(false);
            getAllAddress();
            // const newData = response?.data?.id;
            //   setToStorage(STORAGE_KEYS.stepID, response?.data?.id);

            // }
          }
        } catch (error: any) {
          showError(error?.data?.message || "");
        }
      }
    },
  });

  const handleChangePhone = (phone: any, country: any) => {
    // formik.setFieldValue("phone", val);
    formik.setFieldValue("phone", phone?.replace(country.dialCode, ""));
    formik.setFieldValue("countryCode", country?.dialCode);
    // formik.setFieldValue("countryName", country?.countryCode.toUpperCase());
  };

  return (
    <Modal
      className="modal form_modal"
      id="addAddressModal"
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      open={open}
      onClose={onClose}
    >
      <div className="modal-dialog">
        <div className="modal-body hd_4">
          <div className="btn-close" onClick={() => setOpen(false)}>
            <CloseIcon />
          </div>
          <h2>{isAdd ? "Add new address" : "Edit address"}</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="gap_p">
              <div className="control_group w_50">
                <label>First Name</label>
                <TextField
                  hiddenLabel
                  placeholder="Enter here"
                  fullWidth
                  className="text_field"
                  name="first_name"
                  onChange={(val) => {
                    if (val.target.value === " " || val.target.value === ".") {
                    } else if (isString(val.target.value)) {
                      formik.handleChange(val);
                    }
                  }}
                  onBlur={formik.handleBlur}
                  value={formik.values.first_name}
                  helperText={
                    formik.touched.first_name && formik.errors.first_name
                  }
                />
              </div>
              <div className="control_group w_50">
                <label>Last Name</label>
                <TextField
                  hiddenLabel
                  placeholder="Enter here"
                  className="text_field"
                  fullWidth
                  name="last_name"
                  onChange={(val) => {
                    if (val.target.value === " " || val.target.value === ".") {
                    } else if (isString(val.target.value)) {
                      formik.handleChange(val);
                    }
                  }}
                  onBlur={formik.handleBlur}
                  value={formik.values.last_name}
                  helperText={
                    formik.touched.last_name && formik.errors.last_name
                  }
                />
              </div>
            </div>
            <div className="control_group">
              <label>Shipping Address</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                className="text_field"
                fullWidth
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
            <div className="control_group">
              <label>City</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                className="text_field"
                name="city"
                onChange={(val) => {
                  if (val.target.value === " " || val.target.value === ".") {
                  } else if (isString(val.target.value)) {
                    formik.handleChange(val);
                  }
                }}
                onBlur={formik.handleBlur}
                value={formik.values.city}
                helperText={formik.touched.city && formik.errors.city}
              />
            </div>
            <div className="control_group">
              <label>Post Code/ ZIP</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                className="text_field"
                name="zipcode"
                onChange={(val) => {
                  if (val.target.value === " " || val.target.value === ".") {
                  } else if (isNumber(val.target.value)) {
                    formik.handleChange(val);
                  }
                }}
                onBlur={formik.handleBlur}
                value={formik.values.zipcode}
                helperText={formik.touched.zipcode && formik.errors.zipcode}
              />
            </div>
            <div className="control_group">
              <label>Phone</label>
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
            <div className="control_group">
              <label>Email Address</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                type="email"
                className="text_field"
                name="email"
                onChange={(val) => {
                  if (val.target.value === " " || val.target.value === ".") {
                  } else if (isString(val.target.value)) {
                    formik.handleChange(val);
                  }
                }}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>
            <div className="btn_flex">
              <a
                className="c_danger"
                href="javascript:void(0)"
                onClick={() => setOpen(false)}
              >
                Cancel
              </a>
              <Button type="submit" className="btnn btn_xsm btn_primary">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
