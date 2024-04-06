/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
// checkout.tsx
import React, { useState } from "react";
import CheckoutSideItems from "../../components/checkoutSideItems";
import SimilarProductCard from "../../components/similarProductCard";
import CheckoutAddress from "../../components/checkoutAddress";
import cardData from "../../data/ProductData.json";
import AddCardModal from "../../Modals/addCardModal";
import { Layout } from "../../layouts";
import { useNavigate } from "react-router";
import { AddressModal } from "../../Modals";
import AddIcon from "@mui/icons-material/Add";

export const Checkout = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [addressModal, setAddressModal] = useState(false);
  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleCloseAddressModal = () => {
    setAddressModal(false);
  };

  const data = [
    {
      id: 1,
      card_img: "/static/images/visa_icon.jpg",
      card_number: "•••• •••• •••• 4432",
      description: "Personal - 06/23",
    },
    {
      id: 2,
      card_img: "/static/images/visa_icon.jpg",
      card_number: "•••• •••• •••• 4432",
      description: "Personal - 06/23",
    },
  ];

  return (
    <Layout>
      <main className="content checkout_page">
        <section className="site_breadcrum">
          <div className="conta_iner">
            <ul>
              <li>
                <a onClick={() => navigate("/")}>Home</a>
              </li>
              <li>
                <a onClick={() => navigate("/my-cart")}>My Cart</a>
              </li>
              <li>My Checkout</li>
            </ul>
          </div>
        </section>

        <section className="checkout_sc ub_spc">
          <div className="conta_iner">
            <div className="gap_p">
              <div className="left_s">
                <h2>Billing Details</h2>
                <div className="checkout_address">
                  <div className="d_flex">
                    <h3>Address</h3>
                    <a
                      href="javascript:void(0)"
                      onClick={() => setAddressModal(true)}
                      data-bs-toggle="modal"
                      data-bs-target="#addAddressModal"
                    >
                      Add
                    </a>
                  </div>
                  {cardData?.data?.slice(0, 1).map((item) => {
                    return (
                      <CheckoutAddress
                        key={item?.id}
                        product_id={item?.id}
                        user_name={item?.user_name}
                        user_address={item?.user_address}
                      />
                    );
                  })}
                </div>

                <h3>Online Payments</h3>
                <div className="payment_list">
                  {data?.map((item) => {
                    return (
                      <>
                        <label>
                          <figure>
                            <img src={item?.card_img} alt="visa" />
                          </figure>
                          <span>
                            <strong>{item?.card_number}</strong>
                            {item?.description}
                          </span>
                          <input type="radio" name="payment" value="payment1" />
                        </label>
                      </>
                    );
                  })}
                  <a
                    href="javascript:void(0)"
                    onClick={() => setOpen(true)}
                    className="add_payment"
                  >
                    <span>
                      <AddIcon />
                    </span>
                    <p className="c_primary">Add New Card</p>
                    <p>Save and Pay via Cards.</p>
                    <img src="static/images/payment_icon.svg" alt="Icon" />
                  </a>
                </div>
              </div>

              <div className="right_s">
                <h2>Your Order</h2>
                <div className="checkout_product_list">
                  {cardData?.data?.slice(0, 3).map((item) => {
                    return (
                      <CheckoutSideItems
                        key={item?.id}
                        product_id={item?.id}
                        product_image={item?.product_image}
                        product_name={item?.product_name}
                        product_price={item?.product_price}
                        product_quantity={item?.product_quantity}
                      />
                    );
                  })}
                </div>
                <div className="sub_total w_100">
                  <p>
                    Subtottal <strong>$600.00</strong>
                  </p>
                  <p>
                    Shipping <strong>$60.00</strong>
                  </p>
                  <hr />
                  <p>
                    Grand Total <strong>$660.00</strong>
                  </p>
                  <div className="btn_flex">
                    <a
                      onClick={() => navigate("/payment-done")}
                      className="btnn btn_xsm btn_primary br w_100"
                    >
                      Pay Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="products_sc hd_3">
              <h2 className="fw_med">Similar Products</h2>
              <div className="product_listing">
                <div className="gap_m">
                  {cardData?.data?.map((item) => {
                    return (
                      <SimilarProductCard
                        key={item?.id}
                        product_id={item?.id}
                        product_image={item?.product_image}
                        product_name={item?.product_name}
                        product_desc={item?.product_desc}
                        product_addCart={item?.product_addCart}
                        product_price={item?.product_price}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <AddCardModal open={open} onClose={handleCloseModal} setOpen={setOpen} />
      <AddressModal
        open={addressModal}
        setOpen={setAddressModal}
        onClose={handleCloseAddressModal}
        getAllAddress={""}
        addressById={""}
        isAdd={true}
      />
    </Layout>
  );
};
