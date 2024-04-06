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

const Step6 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location;
  const id = getFromStorage(STORAGE_KEYS.stepID);
  const [updateProfile] = usePostProfileSetupMutation();

  const formik = useFormik({
    initialValues: {
      surgery_name: "",
      conducted_on: "",
      operated_by: "",
      implant: "",
      additional_notes_surgery: "",
    },
    onSubmit: async (values) => {
      formik.setSubmitting(true);
      let body = {
        surgery_name: formik.values.surgery_name,
        conducted_on: formik.values.conducted_on,
        operated_by: formik.values.operated_by,
        implant: formik.values.implant,
        additional_notes_surgery: formik.values.additional_notes_surgery,
        id: id,
      };

      try {
        const response = await updateProfile(body).unwrap();

        if (response.status === 200) {
          navigate("/step-7");
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
                <a onClick={() => navigate("/step-5")} className="back_icon">
                  <ArrowBackIcon />
                </a>
                <h2>Health data</h2>
              </div>
              <div className="hd_6">
                <h3>Surgery</h3>
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className="form"
                method="post"
              >
                <div className="control_group">
                  <label>Name of surgery</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.surgery_name}
                    onChange={(event) =>
                      formik.setFieldValue("surgery_name", event.target.value)
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Conducted on</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    type="date"
                    value={formik.values.conducted_on}
                    onChange={(event) =>
                      formik.setFieldValue("conducted_on", event.target.value)
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Operated by</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.operated_by}
                    onChange={(event) =>
                      formik.setFieldValue("operated_by", event.target.value)
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Implant</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.implant}
                    onChange={(event) =>
                      formik.setFieldValue("implant", event.target.value)
                    }
                  />
                </div>
                <div className="control_group">
                  <label>Additional notes</label>
                  <TextField
                    hiddenLabel
                    placeholder="Enter here"
                    fullWidth
                    value={formik.values.additional_notes_surgery}
                    onChange={(event) =>
                      formik.setFieldValue(
                        "additional_notes_surgery",
                        event.target.value
                      )
                    }
                  />
                </div>
                <div className="form_btn">
                  <button
                    type="submit"
                    className="btnn btn_xsm btn_primary w_100"
                    // onClick={() => navigate("/step-7")}
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

export default Step6;
