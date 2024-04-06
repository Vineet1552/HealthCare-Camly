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
import { usePostProfileSetupMutation } from "../../services/auth";
import useAuth from "../../hooks/useAuth";
import { setCredentials } from "../../reducers/authSlice";
import { useAppDispatch } from "../../hooks/store";

interface editProfileModalProps {
  open: boolean;
  onClose: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export default function HealthCondition({
  open,
  onClose,
  setOpen,
}: editProfileModalProps) {
  const [selectField, setSelectField] = React.useState("default");
  const handleChange = (event: SelectChangeEvent) => {
    setSelectField(event.target.value as string);
  };
  const userId = getFromStorage(STORAGE_KEYS.userId);
  const [updateProfile] = usePostProfileSetupMutation();
  const userData = useAuth();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      health_condition_name: userData?.health_condition_name,
      first_diagnosed_on: userData?.first_diagnosed_on,
      status: userData?.status,
      treated_by: userData?.treated_by,
      medication_taken: userData?.medication_taken,
      additional_note: userData?.additional_note,
    },
    // validationSchema: Yup.object({
    //     nameOfHealthCondition: Yup.string(),
    //     firstDiagnosedOn: Yup.string(),
    //     status: Yup.string(),
    //     treatedBy: Yup.string(),
    //     medicationTaken: Yup.string(),
    //     additionalNotes: Yup.string()
    // }),

    onSubmit: async (values: any) => {
      formik.setSubmitting(true);
      let body = {
        health_condition_name: values.health_condition_name,
        first_diagnosed_on: values.first_diagnosed_on,
        status: values.status,
        treated_by: values.treated_by,
        medication_taken: values.medication_taken,
        additional_note: values.additional_note,
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
        <h2>Edit Health condition records</h2>
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
              <label>Name Of Health Condition</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                type="Name"
                value={formik.values.health_condition_name}
                name="health_condition_name"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>First Diagnosed On</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                type="Date"
                value={formik.values.first_diagnosed_on}
                name="first_diagnosed_on"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Status</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                value={formik.values.status}
                name="status"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Treated By</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                value={formik.values.treated_by}
                name="treated_by"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Medication Taken</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                value={formik.values.medication_taken}
                name="medication_taken"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Additional Notes</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                value={formik.values.additional_note}
                name="additional_note"
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
