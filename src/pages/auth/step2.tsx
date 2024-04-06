import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../layouts";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { TextField } from "@mui/material";
import { usePostProfileSetupMutation } from "../../services/auth";
import { useFormik } from "formik";
import {
  showToast,
  showError,
  getFromStorage,
  STORAGE_KEYS,
} from "../../constants";
import { useLocation } from "react-router-dom";
import { isNumber } from "../../utils/validations";

const Step2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location;
  const id = getFromStorage(STORAGE_KEYS.stepID);
  const [updateProfile] = usePostProfileSetupMutation();

  const formik = useFormik({
    initialValues: {
      health_condition_name: "",
      first_diagnosed_on: "",
      status: 0,
      treated_by: "",
      medication_taken: "",
      additional_note: "",
    },
    onSubmit: async (values) => {
      formik.setSubmitting(true);
      let body = {
        health_condition_name: formik.values.health_condition_name,
        first_diagnosed_on: formik.values.first_diagnosed_on,
        status: formik.values.status,
        treated_by: formik.values.treated_by,
        medication_taken: formik.values.medication_taken,
        additional_note: formik.values.additional_note,
        id: id,
      };

      try {
        const response = await updateProfile(body).unwrap();

        if (response.status === 200) {
          navigate("/step-3");
          // navigate("/step-3", {state: state});
          // navigate("/step-4", {state: state});
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
                <a onClick={() => navigate("/step-1")} className="back_icon">
                  <ArrowBackIcon />
                </a>
                <h2>Health data</h2>
              </div>
              <div className="hd_6">
                <h3>Health conditions</h3>
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className="form"
                method="post"
              >
                <div className="control_group">
                  <label>Name of health condition</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.health_condition_name}
                    onChange={(event) =>
                      formik.setFieldValue(
                        "health_condition_name",
                        event.target.value
                      )
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
                    value={formik.values.first_diagnosed_on}
                    onChange={(event) =>
                      formik.setFieldValue(
                        "first_diagnosed_on",
                        event.target.value
                      )
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Status</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.status}
                    onChange={(val) => {
                      if (
                        val.target.value === " " ||
                        val.target.value === "."
                      ) {
                      } else if (isNumber(val.target.value)) {
                        formik.handleChange(val);
                      }
                    }}
                  />
                </div>
                <div className="control_group">
                  <label>Treated by</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.treated_by}
                    onChange={(event) =>
                      formik.setFieldValue("treated_by", event.target.value)
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Medication taken</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.medication_taken}
                    onChange={(event) =>
                      formik.setFieldValue(
                        "medication_taken",
                        event.target.value
                      )
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Additional notes</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.additional_note}
                    onChange={(event) =>
                      formik.setFieldValue(
                        "additional_note",
                        event.target.value
                      )
                    }
                  />
                </div>
                <div className="form_btn">
                  <button
                    type="submit"
                    className="btnn btn_xsm btn_primary w_100"
                    // onClick={() => navigate("/step-3")}
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

export default Step2;
