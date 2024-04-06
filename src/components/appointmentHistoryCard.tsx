import AppointmentModal from "../Modals/appointmentModal";
import { useState } from "react";
export const AppointmentHistoryCard = () => {

  const [open, setOpen] = useState(false);
  const handleCloseModal = () => {
    setOpen(false);
  };
  const data = [
    {
      id: 1,
      status: "Completed",
      class: "c_primary"
    },
    {
      id: 2,
      status: "Upcoming",
      class: "c_warning"
    },
    {
      id: 3,
      status: "Cancelled",
      class: "c_danger"
    }
  ]
  return (
    <>
      {data?.map((item) => {
        return (
          <div className="orders_box">
            <div className="head">
              <ul>
                <li>
                  <span>Appointment ID</span>
                  <strong>#0001234</strong>
                </li>
                <li>
                  <span>Appointment date/time</span>
                  <strong>Jan 24, 2024 / 09:00 am</strong>
                </li>
                <li>
                  <span>Total</span>
                  <strong>$50</strong>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="javascript:void(0)" className="btnn btn_primary">
                    Download Invoice
                  </a>
                </li>
              </ul>
            </div>
            <div className="body">
              <div className="order_table table-responsive">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>Speciality</th>
                      <th>Consultation Type</th>
                      <th>Doctor Name</th>
                      <th>Price</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Acupuncture</td>
                      <td>Visit Doctor Clinic</td>
                      <td>Dr. James Roach</td>
                      <td>$50</td>
                      <td className="c_primary">Approved</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="head">
              <ul>
                <li>
                  <span>
                    Status: <strong className={item?.class}>{item?.status}</strong>
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href="javascript:void(0)"
                    data-bs-toggle="modal"
                    data-bs-target="#appointmentInvoiceModal"
                    onClick={() => setOpen(true)}
                  >
                    View Invoice
                  </a>
                </li>
                <li>
                  <a
                    href="javscript:void(0)"
                    className="btnn btn_primary br"
                    data-bs-toggle="modal"
                    data-bs-target="#addRatingModal"
                  >
                    Rate this appointment
                  </a>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
      <AppointmentModal open={open} onClose={handleCloseModal} setOpen={setOpen} />
    </>
  );
};






