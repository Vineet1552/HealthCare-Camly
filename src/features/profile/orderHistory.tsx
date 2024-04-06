/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import OrderInvoice from '../../Modals/orderInvoiceModal';

export default function OrderHistory() {
    const [open, setOpen] = useState(false);
    const handleCloseModal = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="tab-pane">
                <div className="account_head">
                    <h3>Orders History</h3>
                </div>
                <div className="orders_box">
                    <div className="head">
                        <ul>
                            <li>
                                <span>Order ID</span>
                                <strong>#0001234</strong>
                            </li>
                            <li>
                                <span>Order Placed</span>
                                <strong>Jan 24, 2024</strong>
                            </li>
                            <li>
                                <span>Total</span>
                                <strong>$600</strong>
                            </li>
                        </ul>
                        <ul>
                            <li><a href=" " className="btnn btn_primary">Download Invoice</a></li>
                        </ul>
                    </div>
                    <div className="body">
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
                    </div>
                    <div className="head">
                        <ul>
                            <li>
                                <span>Status</span>
                                <strong>Deliverd on Jan 30, 2024</strong>
                            </li>
                        </ul>
                        <ul>
                            <li><a href="javascript:void(0)" onClick={() => setOpen(true)} data-bs-toggle="modal" data-bs-target="#orderInvoiceModal">View Invoice</a></li>
                        </ul>
                    </div>
                </div>
                <div className="orders_box">
                    <div className="head">
                        <ul>
                            <li>
                                <span>Order ID</span>
                                <strong>#0001234</strong>
                            </li>
                            <li>
                                <span>Order Placed</span>
                                <strong>Jan 24, 2024</strong>
                            </li>
                            <li>
                                <span>Total</span>
                                <strong>$300</strong>
                            </li>
                        </ul>
                        <ul>
                            <li><a href=" " className="btnn btn_primary">Download Invoice</a></li>
                        </ul>
                    </div>
                    <div className="body">
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="head">
                        <ul>
                            <li>
                                <span>Status</span>
                                <strong>Deliverd on Jan 30, 2024</strong>
                            </li>
                        </ul>
                        <ul>
                            <li><a href="javascript:void(0)" onClick={() => setOpen(true)} data-bs-toggle="modal" data-bs-target="#orderInvoiceModal">View Invoice</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <OrderInvoice open={open} onClose={handleCloseModal} setOpen={setOpen} />
        </>
    )
}
