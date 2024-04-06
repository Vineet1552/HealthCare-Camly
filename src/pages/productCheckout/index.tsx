/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Layout } from "../../layouts";
import { PaymentDetailsCard } from "../../components";
import { useNavigate } from "react-router-dom";
import { AddressModal } from "../../Modals";

export const ProductCheckout = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Layout>
        <main className="content productCheckout_page">
          <section className="site_breadcrum">
            <div className="conta_iner">
              <ul>
                <li>
                  <a onClick={() => navigate("/")}>Home</a>
                </li>
                <li>
                  <a onClick={() => navigate("/store-listing")}>
                    Store Listing
                  </a>
                </li>
                <li>
                  <a onClick={() => navigate("/store-details")}>Store Detail</a>
                </li>
                <li>
                  <a onClick={() => navigate("/product-details")}>
                    Product Detail
                  </a>
                </li>
                <li>Checkout</li>
              </ul>
            </div>
          </section>

          <section className="productCheckout_sc ub_spc">
            <div className="conta_iner">
              <div className="product_info">
                <figure className="product_image">
                  <img
                    src="static/images/product_attachment_01.jpg"
                    alt="icon"
                  />
                </figure>
                <div className="right_info hd_3">
                  <h2>
                    Everherb Pain Relief Tablet - Blend Of 8 Powerful Herbal
                    Ingredients
                  </h2>
                  <p>Ginseng Forte traditional medicine</p>
                  <h3>$ 50.00</h3>
                </div>
              </div>

              <div className="checkout_address">
                <div className="d_flex">
                  <h3>Address</h3>
                  <a
                    href="javascript:void(0)"
                    onClick={() => setOpen(true)}
                    data-bs-toggle="modal"
                    data-bs-target="#addAddressModal"
                  >
                    Add
                  </a>
                </div>
                <div className="address_list">
                  <label>
                    <span>
                      <strong>Charles K. Keifer</strong>
                      3012 Broaddus Avenue Saint Joseph, California 4908
                    </span>
                    <input type="radio" name="address" value="address1" />
                  </label>
                </div>
              </div>

              {/* <div className="payment_box">
                <h3>Payment Detail</h3>
                <div className="p_group">
                    <p>Tax <strong>$35</strong></p>
                    <p>Total Cost <strong>$350.00</strong></p>
                </div>


                <h3>Online Payments</h3>
                <div className="payment_list">
                    <label>
                        <figure><img src="images/visa_icon.jpg" alt=""/></figure>
                        <span>
                            <strong>•••• •••• •••• 4432</strong>
                            Personal - 06/23
                        </span>
                        <input type="radio" name="payment" value="payment1"/>
                    </label>
                    <label>
                        <figure><img src="images/visa_icon.jpg" alt=""/></figure>
                        <span>
                            <strong>•••• •••• •••• 4432</strong>
                            Personal - 06/23
                        </span>
                        <input type="radio" name="payment" value="payment1"/>
                    </label>
                    <a href="!" className="add_payment" data-bs-toggle="modal" data-bs-target="#addCardModal">
                        <span><i className="fas fa-plus"></i></span>
                        <p className="c_primary">Add New Card</p>
                        <p>Save and Pay via Cards.</p>
                        <img src="images/payment_icon.svg" alt="Icon"/>
                    </a>
                </div>

                <div className="btn_flex">
                    <a href="thank-you.php" className="btnn btn_primary">Pay Now</a>
                </div>
            </div> */}
              <PaymentDetailsCard />
            </div>
          </section>
        </main>
        <AddressModal
          open={open}
          setOpen={setOpen}
          onClose={handleCloseModal}
          getAllAddress={""}
          addressById={""}
          isAdd={true}
        />
      </Layout>
    </>
  );
};
