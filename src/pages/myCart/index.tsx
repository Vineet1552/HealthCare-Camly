/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CartItem from "../../components/cartItem";
import SimilarProductCard from "../../components/similarProductCard";
import cardData from "../../data/ProductData.json";
import { Layout } from "../../layouts";
import { useNavigate } from "react-router-dom";

export const MyCart = () => {

  const navigate = useNavigate();
  
  return (
    <Layout>
      <main className="content cart_page">
        <section className="site_breadcrum">
          <div className="conta_iner">
            <ul>
              <li>
                <a href="index.php">Home</a>
              </li>
              <li>My Cart</li>
            </ul>
          </div>
        </section>

        <section className="cart_sc ub_spc">
          <div className="conta_iner">
            <div className="table-responsive">
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th></th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cardData?.data?.map((item) => {
                    return (
                      <CartItem
                        key={item?.id}
                        product_id={item?.id}
                        product_image={item?.product_image}
                        product_name={item?.product_name}
                        product_price={item?.product_price}
                        product_quantity={item?.product_quantity}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="sub_total">
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
                  onClick={() => navigate("/checkout")}
                  className="btnn btn_xsm btn_primary br w_100"
                >
                  Checkout
                </a>
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
    </Layout>
  );
};
