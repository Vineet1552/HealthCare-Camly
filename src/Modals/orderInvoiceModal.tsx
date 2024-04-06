import { Modal, Box } from '@mui/material'
import { Dispatch, SetStateAction } from 'react';
import CloseIcon from "@mui/icons-material/Close";
import { generateResponsiveStyle } from '../utils/authModalStyle';



interface InvoiceModalProps {
    open: boolean;
    onClose: () => void;
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function OrderInvoice({ open, onClose, setOpen }: InvoiceModalProps) {
    const style = generateResponsiveStyle()

    return (
        <Modal
            className="modal invoice_modal"
            id="orderInvoiceModal"
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
                    <h2>Order Invoice</h2>
                    <div className="invoice_box">
                        <div className="d_flex">
                            <div className="billing_info">
                                <h6>Billing Address</h6>
                                <p>
                                    James wilson
                                    <br />
                                    Charles K. Keifer
                                    <br />
                                    3012 Broaddus Avenue Saint Joseph, California 4908
                                    <br />
                                    jameswilson@yopmail.com
                                    <br />
                                    9876543210
                                </p>
                            </div>
                            <div className="billing_info">
                                <h6>Order ID: #0001234</h6>
                                <ul>
                                    <li>Order Date: <b>Jan 24, 2024</b></li>
                                    <li>Deliverd Date: <b>Jan 30, 2024</b></li>
                                </ul>
                            </div>
                        </div>
                        <div className="order_table table-responsive">
                            <table className="table mb-0">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <figure className="order_image">
                                                <img src="static/images/product_attachment_01.jpg" alt="icon" />
                                                <figcaption>Medi herb</figcaption>
                                            </figure>
                                        </td>
                                        <td>$300</td>
                                        <td>1</td>
                                        <td>$300</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <figure className="order_image">
                                                <img src="static/images/product_attachment_01.jpg" alt="icon" />
                                                <figcaption>Medi herb</figcaption>
                                            </figure>
                                        </td>
                                        <td>$300</td>
                                        <td>1</td>
                                        <td>$300</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="order_total">
                            <p>Subtottal <strong>$600.00</strong></p>
                            <p>Shipping <strong>$60.00</strong></p>
                            <hr />
                            <p>Grand Total <strong>$660.00</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
