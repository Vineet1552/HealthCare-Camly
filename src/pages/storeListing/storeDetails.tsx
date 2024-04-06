/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import cardData from "../../data/ProductData.json";
import { SimilarProductCard } from "../../components";
import { Layout } from "../../layouts";
import { useNavigate } from "react-router";
import StarIcon from '@mui/icons-material/Star';

export const StoreDetail = () => {

  const navigate = useNavigate();

  return (
    <>
      <Layout>
        <main className="content storeListing_page">
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
                <li>Store Detail</li>
              </ul>
            </div>
          </section>

          <section className="storeDetail_sc ub_spc">
            <div className="conta_iner">
              <div className="gap_p">
                <div className="left_s">
                  <figure className="store_image">
                    <img
                      src="static/images/store_attachment_01.jpg"
                      alt="icon"
                    />
                  </figure>
                </div>
                <div className="right_s hd_3">
                  <div className="detail_area">
                    <p className="c_primary">Herbal</p>
                    <h2>Bloom Herbal Organics</h2>
                    <p>Timing: 9:00 am to 8:00 pm</p>
                    <address className="store_address">
                      <strong>9715 Burnet RD</strong> Bldg 7, Ste 400 Austin, TX
                      78758
                    </address>
                    <div className="store_rating">
                      <StarIcon /> 5.0
                    </div>
                  </div>
                </div>
              </div>
              <div className="detailed_info">
                <div className="hd_3">
                  <h2 className="fw_med">About Store</h2>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
              <div className="products_sc hd_3">
                <h2 className="fw_med">Products</h2>
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
    </>
  );
};
