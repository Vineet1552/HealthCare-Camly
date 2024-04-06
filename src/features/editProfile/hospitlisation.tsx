import CloseIcon from "@mui/icons-material/Close";
import {
  Modal,
  Button,
  TextField,
  SelectChangeEvent,
  Select,
  MenuItem,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  STORAGE_KEYS,
  getFromStorage,
  showError,
  showToast,
} from "../../constants";
import useAuth from "../../hooks/useAuth";
import { usePostProfileSetupMutation } from "../../services/auth";
import { setCredentials } from "../../reducers/authSlice";
import { useAppDispatch } from "../../hooks/store";

interface editProfileModalProps {
  open: boolean;
  onClose: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export default function Hospitalization({
  open,
  onClose,
  setOpen,
}: editProfileModalProps) {
  const [selectField, setSelectField] = React.useState("default");
  const handleChange = (event: SelectChangeEvent) => {
    setSelectField(event.target.value as string);
  };
  const userId = getFromStorage(STORAGE_KEYS.userId);
  const dispatch = useAppDispatch();
  const userData = useAuth();
  const [updateProfile] = usePostProfileSetupMutation();

  const formik = useFormik({
    initialValues: {
      hospital_name: userData?.hospital_name,
      admission_date: userData?.admission_date,
      discharge_date: userData?.discharge_date,
      provider_name: userData?.provider_name,
      reason_of_condition: userData?.reason_of_condition,
    },

    onSubmit: async (values: any) => {
      formik.setSubmitting(true);
      let body = {
        hospital_name: values.hospital_name,
        admission_date: values.admission_date,
        discharge_date: values.discharge_date,
        provider_name: values.provider_name,
        reason_of_condition: values.reason_of_condition,
        id: userId,
      };
      const token = getFromStorage(STORAGE_KEYS.token);
      try {
        const response = await updateProfile(body).unwrap();
        if (response?.status === 200) {
          showToast("Profile updated succesfully.");
          setOpen(false);
          dispatch(
            setCredentials({
              user: response?.data,
              token: token,
            })
          );
        }
      } catch (error: any) {
        showError(error?.data?.message || "");
      }
    },
  });

  // useEffect(()=>{
  //     fetchDetails();
  // })

  return (
    <div className="modal-dialog">
      <div className="modal-body hd_4">
        <div className="btn-close" onClick={() => setOpen(false)}>
          <CloseIcon />
        </div>
        <h2>Edit Hospital records</h2>
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="gap_p">
            <div className="control_group text_center">
              <div className="upload_image">
                <figure>
                  <img src="static/images/placeholder.jpg" alt="icon" />
                </figure>
                <div className="action">
                  <AddIcon />
                  <input placeholder="img" type="file" />
                </div>
              </div>
            </div>
            <div className="control_group w_50">
              <label>Hospital Name</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                type="Name"
                value={formik.values.hospital_name}
                name="hospital_name"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Admission Date</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                type="date"
                value={formik.values.admission_date}
                name="admission_date"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Discharge Date</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                type="date"
                value={formik.values.discharge_date}
                name="discharge_date"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Provider Name</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                value={formik.values.provider_name}
                name="provider_name"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Reason And Medication Condition Report</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                value={formik.values.reason_of_condition}
                name="reason_of_condition"
                onChange={formik.handleChange}
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
