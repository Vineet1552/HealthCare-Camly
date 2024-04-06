import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../layouts";
import { TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { usePostProfileSetupMutation } from "../../services/auth";
import { useFormik } from "formik";
import {
  showToast,
  showError,
  getFromStorage,
  STORAGE_KEYS,
} from "../../constants";
import { useLocation } from "react-router-dom";

const Step5 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location;
  const id = getFromStorage(STORAGE_KEYS.stepID);
  const [updateProfile] = usePostProfileSetupMutation();

  const formik = useFormik({
    initialValues: {
      hospital_name: "",
      admission_date: "",
      discharge_date: "",
      provider_name: "",
      reason_of_condition: "",
    },
    onSubmit: async (values) => {
      formik.setSubmitting(true);
      let body = {
        hospital_name: formik.values.hospital_name,
        admission_date: formik.values.admission_date,
        discharge_date: formik.values.discharge_date,
        provider_name: formik.values.provider_name,
        reason_of_condition: formik.values.reason_of_condition,
        // temp
        // profile_photo: image?.File,
        id: id,
      };

      try {
        const response = await updateProfile(body).unwrap();

        if (response.status === 200) {
          navigate("/step-6");
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
                <a onClick={() => navigate("/step-4")} className="back_icon">
                  <ArrowBackIcon />
                </a>
                <h2>Health data</h2>
              </div>
              <div className="hd_6">
                <h3>Hospitalization</h3>
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className="form"
                method="post"
              >
                <div className="control_group">
                  <label>Hospital name</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.hospital_name}
                    onChange={(event) =>
                      formik.setFieldValue("hospital_name", event.target.value)
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Admission date</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    type="date"
                    value={formik.values.admission_date}
                    onChange={(event) =>
                      formik.setFieldValue("admission_date", event.target.value)
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Discharge date</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    type="date"
                    value={formik.values.discharge_date}
                    onChange={(event) =>
                      formik.setFieldValue("discharge_date", event.target.value)
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Provider name</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.provider_name}
                    onChange={(event) =>
                      formik.setFieldValue("provider_name", event.target.value)
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Reason and medication condition report</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.reason_of_condition}
                    onChange={(event) =>
                      formik.setFieldValue(
                        "reason_of_condition",
                        event.target.value
                      )
                    }
                  />
                </div>
                <div className="form_btn">
                  <button
                    type="submit"
                    className="btnn btn_xsm btn_primary w_100"
                    // onClick={() => navigate("/step-6")}
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

export default Step5;
