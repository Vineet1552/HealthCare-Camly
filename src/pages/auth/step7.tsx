import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../layouts";
import { TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { usePostProfileSetupMutation } from "../../services/auth";
import {
  showToast,
  showError,
  getFromStorage,
  STORAGE_KEYS,
} from "../../constants";
import { useFormik } from "formik";
import { useLocation } from "react-router-dom";

const Step7 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location;
  const id = getFromStorage(STORAGE_KEYS.stepID);
  const [updateProfile] = usePostProfileSetupMutation();

  const formik = useFormik({
    initialValues: {
      vaccination_name: "",
      vaccination_on: "",
      vaccine_name: "",
      vaccine_details: "",
      vaccine_add_notes: "",
    },
    onSubmit: async (values) => {
      formik.setSubmitting(true);
      let body = {
        vaccination_name: formik.values.vaccination_name,
        vaccination_on: formik.values.vaccination_on,
        vaccine_name: formik.values.vaccine_name,
        vaccine_details: formik.values.vaccine_details,
        vaccine_add_notes: formik.values.vaccine_add_notes,
        id: id,
      };

      try {
        const response = await updateProfile(body).unwrap();

        if (response.status === 200) {
          navigate("/login");
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
                <a onClick={() => navigate("/step-6")} className="back_icon">
                  <ArrowBackIcon />
                </a>
                <h2>Health data</h2>
              </div>
              <div className="hd_6">
                <h3>Vaccination details</h3>
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className="form"
                method="post"
              >
                <div className="control_group">
                  <label>Vaccination</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.vaccination_name}
                    onChange={(event) =>
                      formik.setFieldValue(
                        "vaccination_name",
                        event.target.value
                      )
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Vacinnation take on</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    type="date"
                    value={formik.values.vaccination_on}
                    onChange={(event) =>
                      formik.setFieldValue("vaccination_on", event.target.value)
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Vaccine name</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.vaccine_name}
                    onChange={(event) =>
                      formik.setFieldValue("vaccine_name", event.target.value)
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Vaccine details</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.vaccine_details}
                    onChange={(event) =>
                      formik.setFieldValue(
                        "vaccine_details",
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
                    value={formik.values.vaccine_add_notes}
                    onChange={(event) =>
                      formik.setFieldValue(
                        "vaccine_add_notes",
                        event.target.value
                      )
                    }
                  />
                </div>
                <div className="form_btn">
                  <button
                    type="submit"
                    className="btnn btn_xsm btn_primary w_100"
                    // onClick={() => navigate("/login")}
                  >
                    Submit
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

export default Step7;
