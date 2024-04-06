export const AppointmentHistory = () => {
    
    const data = [
        {
            id:1,
            status: "completed",
            // Appointment_ID: "#0001234",
        },
        {
            id:2,
            status: "Upcoming"
        },
        {
            id:3,
            status: "Cancelled"
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
              <a href=" " className="btnn btn_primary">
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
                Status: <strong className="c_primary">{item?.status}</strong>
              </span>
            </li>
          </ul>
          <ul>
            <li>
              <p
                data-bs-toggle="modal"
                data-bs-target="#appointmentInvoiceModal"
              >
                View Invoice
              </p>
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
    </>
  );
};


