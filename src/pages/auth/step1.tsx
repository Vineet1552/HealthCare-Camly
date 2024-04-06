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
import * as Yup from "yup";
import { useLocation } from "react-router-dom";

const Step1 = () => {
  const navigate = useNavigate();
  const [updateProfile] = usePostProfileSetupMutation();
  const location = useLocation();
  const state = location;
  const id = getFromStorage(STORAGE_KEYS.stepID);

  console.log(state, "uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");

  const formik = useFormik({
    initialValues: {
      medical_reports: "",
      date: "",
      test_results: "",
      prescribed_by: "",
      test_center: "",
    },
    validationSchema: Yup.object({
      medicalReports: Yup.string().optional(),
    }),
    onSubmit: async (values) => {
      formik.setSubmitting(true);
      let body = {
        medical_reports: formik.values.medical_reports,
        date: formik.values.date,
        test_results: formik.values.test_results,
        prescribed_by: formik.values.prescribed_by,
        test_center: formik.values.test_center,
        id: id,
      };

      try {
        const response = await updateProfile(body).unwrap();
        navigate("/step-2", { state: state });

        if (response.status === 200) {
          navigate("/step-2");
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
                <a
                  onClick={() => navigate("/profile-setup")}
                  className="back_icon"
                >
                  <ArrowBackIcon />
                </a>
                <h2>Health data</h2>
              </div>
              <div className="hd_6">
                <h3>Medical records</h3>
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className="form"
                method="post"
              >
                <div className="control_group">
                  <label>Name of medical reports</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.medical_reports}
                    onChange={(event) =>
                      formik.setFieldValue(
                        "medical_reports",
                        event.target.value
                      )
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Date</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    type="date"
                    value={formik.values.date}
                    onChange={(event) =>
                      formik.setFieldValue("date", event.target.value)
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Test results</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.test_results}
                    onChange={(event) =>
                      formik.setFieldValue("test_results", event.target.value)
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Prescribed by</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.prescribed_by}
                    onChange={(event) =>
                      formik.setFieldValue("prescribed_by", event.target.value)
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Test center</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.test_center}
                    onChange={(event) =>
                      formik.setFieldValue("test_center", event.target.value)
                    }
                  />
                </div>
                <div className="form_btn">
                  <button
                    type="submit"
                    className="btnn btn_xsm btn_primary w_100"
                    // onClick={() => navigate("/step-2")}
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

export default Step1;
