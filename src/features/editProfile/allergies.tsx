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
export default function Allergies({
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
      allergy_name: userData?.allergy_name,
      triggered_by: userData?.triggered_by,
      reaction: userData?.reaction,
      duration: userData?.duration,
      frequency: userData?.frequency,
      allergy_first_diognosed_on: userData?.allergy_first_diognosed_on,
    },
    // validationSchema: Yup.object({
    //     nameOfAllergies: Yup.string(),
    //     trigerredBy: Yup.string(),
    //     reaction: Yup.string(),
    //     Duration: Yup.string(),
    //     doesItOccur: Yup.string(),
    //     firstDiagnosedOn: Yup.string()
    // }),

    onSubmit: async (values: any) => {
      formik.setSubmitting(true);
      let body = {
        allergy_name: values.allergy_name,
        triggered_by: values.triggered_by,
        reaction: values.reaction,
        duration: values.duration,
        frequency: values.frequency,
        allergy_first_diognosed_on: values.allergy_first_diognosed_on,
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
      // const fetchDetails = async () => {
      //     try {
      //         // const res = await getVendorByID({ id }).unwrap();
      //         const res=0;
      //         if (res?.code === 200) {
      //             formik.setFieldValue('nameOfAllergies', res?.data?.nameOfAllergies)
      //             formik.setFieldValue('trigerredBy', res?.data?.trigerredBy)
      //             formik.setFieldValue('reaction', res?.data?.reaction)
      //             formik.setFieldValue('Duration', res?.data?.Duration)
      //             formik.setFieldValue('doesItOccur', res?.data?.doesItOccur)
      //             formik.setFieldValue('firstDiagnosedOn', res?.data?.firstDiagnosedOn)
      //         }

      //     } catch (error) {
      //         console.log(error);
      //     }
      // };
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
        <h2>Edit Allergies records</h2>
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
              <label>Name Of Allergies</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                type="Name"
                value={formik.values.allergy_name}
                name="allergy_name"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Trigerred By</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                value={formik.values.triggered_by}
                name="triggered_by"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Reaction</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                value={formik.values.reaction}
                name="reaction"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Duration</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                value={formik.values.duration}
                name="duration"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>How Often Does It Occur</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                value={formik.values.frequency}
                name="frequency"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>First Diagnosed On</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                type="date"
                value={formik.values.allergy_first_diognosed_on}
                name="allergy_first_diognosed_on"
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
