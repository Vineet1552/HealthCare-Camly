import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../layouts";
import { TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useFormik } from "formik";
import { usePostProfileSetupMutation } from "../../services/auth";
import {
  showToast,
  showError,
  STORAGE_KEYS,
  getFromStorage,
} from "../../constants";
import { useLocation } from "react-router-dom";

const Step4 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location;
  const id = getFromStorage(STORAGE_KEYS.stepID);
  const [updateProfile] = usePostProfileSetupMutation();

  const formik = useFormik({
    initialValues: {
      allergy_name: "",
      triggered_by: "",
      reaction: "",
      duration: "",
      frequency: "",
      allergy_first_diognosed_on: "",
    },
    onSubmit: async (values) => {
      formik.setSubmitting(true);
      let body = {
        allergy_name: formik.values.allergy_name,
        triggered_by: formik.values.triggered_by,
        reaction: formik.values.reaction,
        duration: formik.values.duration,
        frequency: formik.values.frequency,
        allergy_first_diognosed_on: formik.values.allergy_first_diognosed_on,
        id: id,
      };

      try {
        const response = await updateProfile(body).unwrap();

        if (response.status === 200) {
          navigate("/step-5");
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
                <a onClick={() => navigate("/step-3")} className="back_icon">
                  <ArrowBackIcon />
                </a>
                <h2>Health data</h2>
              </div>
              <div className="hd_6">
                <h3>Allergies</h3>
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className="form"
                method="post"
              >
                <div className="control_group">
                  <label>Name of allergies</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.allergy_name}
                    onChange={(event) =>
                      formik.setFieldValue("allergy_name", event.target.value)
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Trigerred by</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.triggered_by}
                    onChange={(event) =>
                      formik.setFieldValue("triggered_by", event.target.value)
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Reaction</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.reaction}
                    onChange={(event) =>
                      formik.setFieldValue("reaction", event.target.value)
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Duration</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.duration}
                    onChange={(event) =>
                      formik.setFieldValue("duration", event.target.value)
                    }
                  />
                </div>
                <div className="control_group">
                  <label>How often does it occur</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.frequency}
                    onChange={(event) =>
                      formik.setFieldValue("frequency", event.target.value)
                    }
                  />
                </div>
                <div className="control_group">
                  <label>First diagnosed on</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    type="date"
                    value={formik.values.allergy_first_diognosed_on}
                    onChange={(event) =>
                      formik.setFieldValue(
                        "allergy_first_diognosed_on",
                        event.target.value
                      )
                    }
                  />
                </div>
                <div className="form_btn">
                  <button
                    type="submit"
                    className="btnn btn_xsm btn_primary w_100"
                    // onClick={() => navigate("/step-5")}
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

export default Step4;
