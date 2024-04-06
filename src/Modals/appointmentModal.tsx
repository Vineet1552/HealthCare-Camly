import React, { Dispatch, SetStateAction } from 'react';
import { Modal, Button, Box } from '@mui/material';
import { generateResponsiveStyle } from '../utils/authModalStyle';
import CloseIcon from "@mui/icons-material/Close";


interface AppointmentModalProps {
    open: boolean;
    onClose: () => void;
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function AppointmentModal({ open, onClose, setOpen }: AppointmentModalProps) {
    const style = generateResponsiveStyle()
    return (
        <Modal
            className="modal invoice_modal"
            id="appointmentInvoiceModal"
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            open={open}
            onClose={onClose}
        >
            <div className="modal-dialog">
                <div className="modal-body hd_4">
                    <div className="btn-close" onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </div>
                    <h2>Appointment Invoice</h2>
                    <div className="invoice_box">
                        <div className="d_flex">
                            <div className="billing_info">
                                <h6>Appointment ID: #0001234</h6>
                                <ul>
                                    <li>Appointment Created Date: <b>Jan 22, 2024</b></li>
                                    <li>Appointment date/time: <b>Jan 24, 2024 | 09:00 am - 10:00 am</b></li>
                                </ul>
                            </div>
                            <div className="billing_info">
                                <h6>Status: <span className="c_primary">Completed</span></h6>
                            </div>
                        </div>
                        <div className="d_flex">
                            <div className="billing_info">
                                <h6>Doctor Detail</h6>
                                <p>
                                    Dr. James Roach
                                    <br />
                                    Charles K. Keifer
                                    <br />
                                    3012 Broaddus Avenue Saint Joseph, California 4908
                                    <br />
                                    jamesroach@yopmail.com
                                    <br />
                                    9876543210
                                </p>
                            </div>
                            <div className="billing_info">
                                <h6>Patient Detail</h6>
                                <p>
                                    James wilson
                                    <br />
                                    Male
                                    <br />
                                    25 years old
                                    <br />
                                    jameswilson@yopmail.com
                                    <br />
                                    9876543210
                                </p>
                            </div>
                        </div>
                        <div className="order_table table-responsive">
                            <table className="table mb-0">
                                <thead>
                                    <tr>
                                        <th>Speciality</th>
                                        <th>Consultation Type</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Acupuncture</td>
                                        <td>Visit Doctor Clinic</td>
                                        <td>$50</td>
                                        <td className="c_primary">Approved</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="order_total">
                            <p>Session Fee <strong>$50.00</strong></p>
                            <hr />
                            <p>Total Cost <strong>$50.00</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
