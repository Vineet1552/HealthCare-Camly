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
export default function MedicationReport({
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
      medication_condition_name: userData?.medication_condition_name,
      medication_concetration: userData?.medication_concetration,
      medication_dose: userData?.medication_dose,
      medication_duration: userData?.medication_duration,
      medication_taken_dose: userData?.medication_taken_dose,
      medication_prescribed_by: userData?.medication_prescribed_by,
    },

    onSubmit: async (values: any) => {
      formik.setSubmitting(true);
      let body = {
        medication_condition_name: values.medication_condition_name,
        medication_concetration: values.medication_concetration,
        medication_dose: values.medication_dose,
        medication_duration: values.medication_duration,
        medication_taken_dose: values.medication_taken_dose,
        medication_prescribed_by: values.medication_prescribed_by,
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
        <h2>Edit Medication records</h2>
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
              <label>Medication</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                type="Name"
                value={formik.values.medication_condition_name}
                name="medication_condition_name"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Concentration</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                value={formik.values.medication_concetration}
                name="medication_concetration"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Dose</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                value={formik.values.medication_dose}
                name="medication_dose"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Duration</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                value={formik.values.medication_duration}
                name="medication_duration"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Medication Taken</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                value={formik.values.medication_taken_dose}
                name="medication_taken_dose"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Prescribed By</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                value={formik.values.medication_prescribed_by}
                name="medication_prescribed_by"
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
