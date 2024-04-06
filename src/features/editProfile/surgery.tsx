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
import { useAppDispatch } from "../../hooks/store";
import { setCredentials } from "../../reducers/authSlice";

interface editProfileModalProps {
  open: boolean;
  onClose: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export default function Surgery({
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
      surgery_name: userData?.surgery_name,
      conducted_on: userData?.conducted_on,
      operated_by: userData?.operated_by,
      implant: userData?.implant,
      additional_notes_surgery: userData?.additional_notes_surgery,
    },

    onSubmit: async (values: any) => {
      formik.setSubmitting(true);
      let body = {
        surgery_name: values.surgery_name,
        conducted_on: values.conducted_on,
        operated_by: values.operated_by,
        implant: values.implant,
        additional_notes_surgery: values.additional_notes_surgery,
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
        <h2>Edit Surgery records</h2>
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
              <label>Name Of Surgery</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                type="Name"
                value={formik.values.surgery_name}
                name="surgery_name"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Conducted On</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                type="date"
                value={formik.values.conducted_on}
                name="conducted_on"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Operated By</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                value={formik.values.operated_by}
                name="operated_by"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Implant</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                value={formik.values.implant}
                name="implant"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Additional Notes</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                value={formik.values.additional_notes_surgery}
                name="additional_notes_surgery"
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
