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
import { showError, showToast } from "../../constants";
import useAuth from "../../hooks/useAuth";
import { usePostProfileSetupMutation } from "../../services/auth";
import { getFromStorage, STORAGE_KEYS } from "../../constants";
import { useAppDispatch } from "../../hooks/store";
import { setCredentials } from "../../reducers/authSlice";

interface editProfileModalProps {
  open: boolean;
  onClose: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export default function MedicalRecords({
  open,
  onClose,
  setOpen,
}: editProfileModalProps) {
  const [selectField, setSelectField] = React.useState("default");
  const handleChange = (event: SelectChangeEvent) => {
    setSelectField(event.target.value as string);
  };
  const dispatch = useAppDispatch();
  const userId = getFromStorage(STORAGE_KEYS.userId);
  const [updateProfile] = usePostProfileSetupMutation();
  const userData = useAuth();

  const formik = useFormik({
    initialValues: {
      medical_reports: userData?.medical_reports || "",
      date: userData?.date || "",
      test_results: userData?.test_results || "",
      prescribed_by: userData?.prescribed_by || "",
      test_center: userData?.test_center || "",
    },
    // validationSchema: Yup.object({
    //     nameOfMedicalReports: Yup.string(),
    //     date: Yup.string(),
    //     testResults: Yup.string(),
    //     prescribedBy: Yup.string(),
    //     testCenter: Yup.string()
    // }),

    onSubmit: async (values: any) => {
      formik.setSubmitting(true);
      let body = {
        medical_reports: values.medical_reports,
        date: values.date,
        test_results: values.test_results,
        prescribed_by: values.prescribed_by,
        test_center: values.test_center,
        id: userId,
      };
      const token = getFromStorage(STORAGE_KEYS.token);
      try {
        // const response = 0;
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
      //             formik.setFieldValue('nameOfMedicalReports', res?.data?.nameOfMedicalReports)
      //             formik.setFieldValue('date', res?.data?.date)
      //             formik.setFieldValue('testResults', res?.data?.testResults)
      //             formik.setFieldValue('prescribedBy', res?.data?.prescribedBy)
      //             formik.setFieldValue('testCenter', res?.data?.testCenter)
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
        <h2>Edit Medical records</h2>
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
              <label>Name Of Medical Reports</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                type="Name"
                value={formik.values.medical_reports}
                name="medical_reports"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Date</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                type="Date"
                value={formik.values.date}
                name="date"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Test Results</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                type="Test Results"
                value={formik.values.test_results}
                name="test_results"
                onChange={formik.handleChange}
              />
            </div>

            <div className="control_group w_50">
              <label>Prescribed By</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                type="Prescribed By"
                value={formik.values.prescribed_by}
                name="prescribed_by"
                onChange={formik.handleChange}
              />
            </div>
            <div className="control_group w_50">
              <label>Test Center</label>
              <TextField
                hiddenLabel
                placeholder="Enter here"
                fullWidth
                type="Test Center"
                value={formik.values.test_center}
                name="test_center"
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
