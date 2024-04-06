import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../layouts";
import { TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useFormik } from "formik";
import {
  showToast,
  showError,
  getFromStorage,
  STORAGE_KEYS,
} from "../../constants";
import { usePostProfileSetupMutation } from "../../services/auth";
import { useLocation } from "react-router-dom";

const Step3 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location;
  const id = getFromStorage(STORAGE_KEYS.stepID);
  const [updateProfile] = usePostProfileSetupMutation();
  const formik = useFormik({
    initialValues: {
      medication_condition_name: "",
      medication_concetration: "",
      medication_dose: "",
      medication_duration: "",
      medication_taken_dose: "",
      medication_prescribed_by: "",
    },
    onSubmit: async (values) => {
      formik.setSubmitting(true);
      let body = {
        medication_condition_name: formik.values.medication_condition_name,
        medication_concetration: formik.values.medication_concetration,
        medication_dose: formik.values.medication_dose,
        medication_duration: formik.values.medication_duration,
        medication_taken_dose: formik.values.medication_taken_dose,
        medication_prescribed_by: formik.values.medication_prescribed_by,
        id: id,
      };

      try {
        const response = await updateProfile(body).unwrap();

        if (response.status === 200) {
          navigate("/step-4");
        }
      } catch (error: any) {
        showError(error?.data?.message || "");
      }
    },
  });
  return (
    <Layout>
      <main className="content auth_page">
        <section className="auth_sc uh_spc">
          <div className="conta_iner">
            <div className="inner">
              <div className="hd_4 text_center">
                <a onClick={() => navigate("/step-2")} className="back_icon">
                  <ArrowBackIcon />
                </a>
                <h2>Health data</h2>
              </div>
              <div className="hd_6">
                <h3>Medication reports</h3>
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className="form"
                method="post"
              >
                <div className="control_group">
                  <label>Medication</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.medication_condition_name}
                    onChange={(event) =>
                      formik.setFieldValue(
                        "medication_condition_name",
                        event.target.value
                      )
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Concentration</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.medication_concetration}
                    onChange={(event) =>
                      formik.setFieldValue(
                        "medication_concetration",
                        event.target.value
                      )
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Dose</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.medication_dose}
                    onChange={(event) =>
                      formik.setFieldValue(
                        "medication_dose",
                        event.target.value
                      )
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Duration</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.medication_duration}
                    onChange={(event) =>
                      formik.setFieldValue(
                        "medication_duration",
                        event.target.value
                      )
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Medication taken</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.medication_taken_dose}
                    onChange={(event) =>
                      formik.setFieldValue(
                        "medication_taken_dose",
                        event.target.value
                      )
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Prescribed by</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.medication_prescribed_by}
                    onChange={(event) =>
                      formik.setFieldValue(
                        "medication_prescribed_by",
                        event.target.value
                      )
                    }
                  />
                </div>
                <div className="form_btn">
                  <button
                    type="submit"
                    className="btnn btn_xsm btn_primary w_100"
                    // onClick={() => navigate("/step-4")}
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

export default Step3;
