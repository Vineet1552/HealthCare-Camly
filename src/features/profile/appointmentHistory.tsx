import { AppointmentHistoryCard } from "../../components/appointmentHistoryCard";
export const Appointment = () => {
  // const numberOfAppointments = 3;
  return (
    <>
      <div className="tab-pane">
        <div className="account_head">
          <h3>Appointments History</h3>
        </div>
        <AppointmentHistoryCard />
      </div>
    </>
  );
};
