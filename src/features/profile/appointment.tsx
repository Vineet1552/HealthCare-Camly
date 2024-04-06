import { AppointmentHistory } from "../../components/appointmentHistory";

export const Appointment = () => {
  return (
    <>
      <div
        className="tab-pane fade"
        id="v-pills-Appointments"
        role="tabpanel"
        aria-labelledby="v-pills-Appointments-tab"
      >
        <div className="account_head">
          <h3>Appointments History</h3>
        </div>
        <AppointmentHistory />
      </div>
    </>
  );
};
