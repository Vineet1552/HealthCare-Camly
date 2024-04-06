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
  showError,
  showToast,
  getFromStorage,
  STORAGE_KEYS,
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
export default function VaccinationDetails({
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
      vaccination_name: userData?.vaccination_name,
      vaccination_on: userData?.vaccination_on,
      vaccine_name: userData?.vaccine_name,
      vaccine_details: userData?.vaccine_details,
      vaccine_add_notes: userData?.vaccine_add_notes,
    },

    onSubmit: async (values: any) => {
      formik.setSubmitting(true);
      let body = {
        vaccination_name: values.vaccination_name,
        vaccination_on: values.vaccination_on,
        vaccine_name: values.vaccine_name,
        vaccine_details: values.vaccine_details,
        vaccine_add_notes: values.vaccine_add_notes,
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

  return (
    <div className="modal-dialog">
      <div className="modal-body hd_4">
        <div className="btn-close" onClick={() => setOpen(false)}>
          <CloseIcon />
        </div>
        <h2>Edit Vaccination records</h2>
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
              <label>Vaccination</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                type="Name"
                value={formik.values.vaccination_name}
                name="vaccination_name"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Vacinnation Take On</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                type="date"
                value={formik.values.vaccination_on}
                name="vaccination_on"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Vaccine Name</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                value={formik.values.vaccine_name}
                name="vaccine_name"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Vaccine Details</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                value={formik.values.vaccine_details}
                name="vaccine_details"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Additional Notes</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                value={formik.values.vaccine_add_notes}
                name="vaccine_add_notes"
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
