import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { EditProfileModal } from "../../Modals";
import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Grid,
  Typography,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useFormik } from "formik";
import useAuth from "../../hooks/useAuth";

export default function ProfileBox() {
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState<number>(0);
  const user = useAuth();

  const handleCloseModal = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      // step 1
      medical_reports: user?.medical_reports,
      date: user?.date,
      test_results: user?.test_results,
      prescribed_by: user?.prescribed_by,
      test_center: user?.test_center,

      // step 2
      health_condition_name: user?.health_condition_name,
      first_diagnosed_on: user?.first_diagnosed_on,
      status: user?.status,
      treated_by: user?.treated_by,
      medication_taken: user?.medication_taken,
      additional_note: user?.additional_note,

      // step 3
      medication_condition_name: user?.medication_condition_name,
      medication_concetration: user?.medication_concetration,
      medication_dose: user?.medication_dose,
      medication_duration: user?.medication_duration,
      medication_taken_dose: user?.medication_taken_dose,
      medication_prescribed_by: user?.medication_prescribed_by,

      // step 4
      allergy_name: user?.allergy_name,
      triggered_by: user?.triggered_by,
      reaction: user?.reaction,
      duration: user?.duration,
      frequency: user?.frequency,
      allergy_first_diognosed_on: user?.allergy_first_diognosed_on,

      // step 5
      hospital_name: user?.hospital_name,
      admission_date: user?.admission_date,
      discharge_date: user?.discharge_date,
      provider_name: user?.provider_name,
      reason_of_condition: user?.reason_of_condition,

      // step 6
      surgery_name: user?.surgery_name,
      conducted_on: user?.conducted_on,
      operated_by: user?.operated_by,
      implant: user?.implant,
      additional_notes_surgery: user?.additional_notes_surgery,

      // step 7
      vaccination_name: user?.vaccination_name,
      vaccination_on: user?.vaccination_on,
      vaccine_name: user?.vaccine_name,
      vaccine_details: user?.vaccine_details,
      vaccine_add_notes: user?.vaccine_add_notes,
    },
    onSubmit: async (values) => {
      formik.setSubmitting(true);
      let body = {
        user_details: {
          medical_reports: formik.values.medical_reports || "",
          date: formik.values.date || "",
          test_results: formik.values.test_results || "",
          prescribed_by: formik.values.prescribed_by || "",
          test_center: formik.values.test_center || "",
        },
      };
    },
  });

  return (
    <div className="tab-pane">
      <div className="account_head">
        <h3>Profile</h3>
      </div>
      <h6 className="c_primary">
        General Info
        <a
          href="javascript:void(0)"
          onClick={() => {
            setKey(1);
            setOpen(true);
          }}
        >
          <EditIcon />
        </a>
      </h6>
      <ul className="detail_list gap_p">
        <li className="w_100">
          <span>Image</span>
          <figure>
            <img src="static/images/dummy.png" alt="" />
          </figure>
        </li>
        <li>
          <span>Full Name</span>
          <strong>{user?.name || "-"}</strong>
        </li>
        <li>
          <span>Email Id</span>
          <strong>{user?.email || "-"}</strong>
        </li>
        <li>
          <span>Phone Number</span>
          <strong>{user?.phone_number || "-"}</strong>
        </li>
        <li>
          <span>Gender</span>
          <strong>{user?.gender || "-"}</strong>
        </li>
        <li>
          <span>Date Of Birth</span>
          <strong>{user?.DOB || "-"}</strong>
        </li>
        <li>
          <span>Height</span>
          <strong>{user?.height || "-"}</strong>
        </li>
        <li>
          <span>Weight</span>
          <strong>{user?.weight || "-"}</strong>
        </li>
        <li>
          <span>Martial Status</span>
          <strong>{user?.marital_status || "-"}</strong>
        </li>
        <li>
          <span>Occupation</span>
          <strong>{user?.occupation || "-"}</strong>
        </li>
        <li className="w_100">
          <span>Country, City</span>
          <strong>{user?.country || "-"}</strong>
        </li>
      </ul>

      <h6 className="c_primary">Health data</h6>
      <div className="accordion" id="accordionExample">
        <Accordion className="accordion-item">
          <AccordionSummary
            className="accordion-button"
            expandIcon={<ExpandMoreIcon />}
          >
            Medical records{" "}
            <a
              className="edit_btnicon"
              href="javascript:void(0)"
              onClick={() => {
                setKey(2);
                setOpen(true);
              }}
            >
              <EditIcon />
            </a>
          </AccordionSummary>
          <AccordionDetails>
            <div className="inner">
              <ul className="detail_list gap_p">
                <li>
                  <span>Name Of Medical Reports</span>
                  <strong>{user?.medical_reports || "-"}</strong>
                </li>
                <li>
                  <span>Date</span>
                  <strong>{user?.date || "-"}</strong>
                </li>
                <li>
                  <span>Test Results</span>
                  <strong>{user?.test_results || "-"}</strong>
                </li>
                <li>
                  <span>Prescribed By</span>
                  <strong>{user?.prescribed_by || "-"}</strong>
                </li>
                <li>
                  <span>Test Center</span>
                  <strong>{user?.test_center || "-"}</strong>
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion-item">
          <AccordionSummary
            className="accordion-button"
            expandIcon={<ExpandMoreIcon />}
          >
            Health conditions{" "}
            <a
              className="edit_btnicon"
              href="javascript:void(0)"
              onClick={() => {
                setKey(3);
                setOpen(true);
              }}
            >
              <EditIcon />
            </a>
          </AccordionSummary>
          <AccordionDetails>
            <div className="inner">
              <ul className="detail_list gap_p">
                <li>
                  <span>Name Of Health Condition</span>
                  <strong>{user?.health_condition_name || "-"}</strong>
                </li>
                <li>
                  <span>First Diagnosed On</span>
                  <strong>{user?.first_diagnosed_on || "-"}</strong>
                </li>
                <li>
                  <span>Status</span>
                  <strong> {user?.status || "-"}</strong>
                </li>
                <li>
                  <span>Treated By</span>
                  <strong>{user?.treated_by || "-"}</strong>
                </li>
                <li>
                  <span>Medication Taken</span>
                  <strong>{user?.medication_taken || "-"}</strong>
                </li>
                <li>
                  <span>Additional Notes</span>
                  <strong> {user?.additional_note || "-"}</strong>
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion-item">
          <AccordionSummary
            className="accordion-button"
            expandIcon={<ExpandMoreIcon />}
          >
            Medication reports{" "}
            <a
              className="edit_btnicon"
              href="javascript:void(0)"
              onClick={() => {
                setKey(4);
                setOpen(true);
              }}
            >
              <EditIcon />
            </a>
          </AccordionSummary>
          <AccordionDetails>
            <div className="inner">
              <ul className="detail_list gap_p">
                <li>
                  <span>Medication</span>
                  <strong>{user?.medication_condition_name || "-"}</strong>
                </li>
                <li>
                  <span>Concentration</span>
                  <strong>{user?.medication_concetration || "-"}</strong>
                </li>
                <li>
                  <span>Dose</span>
                  <strong>{user?.medication_dose || "-"}</strong>
                </li>
                <li>
                  <span>Duration</span>
                  <strong>{user?.medication_duration || "-"}</strong>
                </li>
                <li>
                  <span>Medication Taken</span>
                  <strong>{user?.medication_taken_dose || "-"}</strong>
                </li>
                <li>
                  <span>Prescribed By</span>
                  <strong>{user?.medication_prescribed_by || "-"}</strong>
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion-item">
          <AccordionSummary
            className="accordion-button"
            expandIcon={<ExpandMoreIcon />}
          >
            Allergies{" "}
            <a
              className="edit_btnicon"
              href="javascript:void(0)"
              onClick={() => {
                setKey(5);
                setOpen(true);
              }}
            >
              <EditIcon />
            </a>
          </AccordionSummary>
          <AccordionDetails>
            <div className="inner">
              <ul className="detail_list gap_p">
                <li>
                  <span>Name Of Allergies</span>
                  <strong> {user?.allergy_name || "-"}</strong>
                </li>
                <li>
                  <span>Trigerred By</span>
                  <strong>{user?.triggered_by || "-"}</strong>
                </li>
                <li>
                  <span>Reaction</span>
                  <strong>{user?.reaction || "-"}</strong>
                </li>
                <li>
                  <span>Duration</span>
                  <strong>{user?.duration || "-"}</strong>
                </li>
                <li>
                  <span>How Often Does It Occur</span>
                  <strong> {user?.frequency || "-"}</strong>
                </li>
                <li>
                  <span>First Diagnosed On</span>
                  <strong>{user?.allergy_first_diognosed_on || "-"}</strong>
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion-item">
          <AccordionSummary
            className="accordion-button"
            expandIcon={<ExpandMoreIcon />}
          >
            Hospitalization{" "}
            <a
              className="edit_btnicon"
              href="javascript:void(0)"
              onClick={() => {
                setKey(6);
                setOpen(true);
              }}
            >
              <EditIcon />
            </a>
          </AccordionSummary>
          <AccordionDetails>
            <div className="inner">
              <ul className="detail_list gap_p">
                <li>
                  <span>Hospital Name</span>
                  <strong>{user?.hospital_name || "-"}</strong>
                </li>
                <li>
                  <span>Admission Date</span>
                  <strong>{user?.admission_date || "-"}</strong>
                </li>
                <li>
                  <span>Discharge Date</span>
                  <strong>{user?.discharge_date || "-"}</strong>
                </li>
                <li>
                  <span>Provider Name</span>
                  <strong>{user?.provider_name || "-"}</strong>
                </li>
                <li>
                  <span>Reason And Medication Condition Report</span>
                  <strong>{user?.reason_of_condition || "-"}</strong>
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion-item">
          <AccordionSummary
            className="accordion-button"
            expandIcon={<ExpandMoreIcon />}
          >
            Surgery{" "}
            <a
              className="edit_btnicon"
              href="javascript:void(0)"
              onClick={() => {
                setKey(7);
                setOpen(true);
              }}
            >
              <EditIcon />
            </a>
          </AccordionSummary>
          <AccordionDetails>
            <div className="inner">
              <ul className="detail_list gap_p">
                <li>
                  <span>Name Of Surgery</span>
                  <strong>{user?.surgery_name || "-"}</strong>
                </li>
                <li>
                  <span>Conducted On</span>
                  <strong>{user?.conducted_on || "-"}</strong>
                </li>
                <li>
                  <span>Operated By</span>
                  <strong> {user?.operated_by || "-"}</strong>
                </li>
                <li>
                  <span>Implant</span>
                  <strong> {user?.implant || "-"} </strong>
                </li>
                <li>
                  <span>Additional Notes</span>
                  <strong>{user?.additional_notes_surgery || "-"}</strong>
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion-item">
          <AccordionSummary
            className="accordion-button"
            expandIcon={<ExpandMoreIcon />}
          >
            Vaccination details{" "}
            <a
              className="edit_btnicon"
              href="javascript:void(0)"
              onClick={() => {
                setKey(8);
                setOpen(true);
              }}
            >
              <EditIcon />
            </a>
          </AccordionSummary>
          <AccordionDetails>
            <div className="inner">
              <ul className="detail_list gap_p">
                <li>
                  <span>Vaccination</span>
                  <strong>{user?.vaccination_name || "-"}</strong>
                </li>
                <li>
                  <span>Vacinnation Take On</span>
                  <strong>{user?.vaccination_on || "-"}</strong>
                </li>
                <li>
                  <span>Vaccine Name</span>
                  <strong> {user?.vaccine_name || "-"}</strong>
                </li>
                <li>
                  <span>Vaccine Details</span>
                  <strong>{user?.vaccine_details || "-"}</strong>
                </li>
                <li>
                  <span>Additional Notes</span>
                  <strong>{user?.vaccine_add_notes || "-"}</strong>
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>

      <EditProfileModal
        open={open}
        onClose={handleCloseModal}
        setOpen={setOpen}
        value={key}
      />
    </div>
  );
}
