/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import { SimilarProductCard } from "../../components";
import cardData from "../../data/ProductData.json";
import { Layout } from "../../layouts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";

const imagesData = [
  {
    id: 1,
    image: "static/images/product_attachment_01.jpg",
  },
  {
    id: 2,
    image: "static/images/product_attachment_01.jpg",
  },
  {
    id: 3,
    image: "static/images/product_attachment_01.jpg",
  },
  {
    id: 4,
    image: "static/images/product_attachment_01.jpg",
  },
  {
    id: 5,
    image: "static/images/product_attachment_01.jpg",
  },
  {
    id: 6,
    image: "static/images/product_attachment_01.jpg",
  },
  {
    id: 7,
    image: "static/images/product_attachment_01.jpg",
  },
  {
    id: 8,
    image: "static/images/product_attachment_01.jpg",
  },
  {
    id: 9,
    image: "static/images/product_attachment_01.jpg",
  },
  {
    id: 10,
    image: "static/images/product_attachment_01.jpg",
  },
  {
    id: 11,
    image: "static/images/product_attachment_01.jpg",
  },
];

export const ProductDeatils = () => {
  const navigate = useNavigate();
  const [nav1, setNav1] = useState<any | null>(null);
  const [nav2, setNav2] = useState<any | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderRef1 = useRef<any | null>(null);
  const sliderRef2 = useRef<any | null>(null);

  const handleAfterChange = (index: number) => {
    setActiveIndex(index);
    nav2.slickGoTo(index);
  };

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  return (
    <>
      <Layout>
        <main className="content productDetail_page">
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
                <li>Product Detail</li>
              </ul>
            </div>
          </section>

          <section className="productDetail_sc ub_spc">
            <div className="conta_iner">
              <div className="product_info">
                <div className="product_image_sc">
                  <Slider
                    className="product_gallery"
                    afterChange={handleAfterChange}
                    asNavFor={nav2}
                    slidesToShow={1}
                    slidesToScroll={1}
                    ref={(slider) => (sliderRef1.current = slider)}
                    infinite={imagesData?.length > 1}
                  >
                    {imagesData?.length
                      ? imagesData?.map((item, index) => (
                        <figure className="product_image" key={index}>
                          <img
                            src={
                              item?.image ||
                              "/images/testimonial_attachment_1.jpg"
                            }
                            alt=""
                          />
                        </figure>
                      ))
                      : undefined}
                  </Slider>
                  <Slider
                    className="product_thumb"
                    asNavFor={nav1}
                    ref={(slider) => (sliderRef2.current = slider)}
                    slidesToShow={4}
                    slidesToScroll={1}
                    swipeToSlide={imagesData?.length > 1}
                    focusOnSelect={imagesData?.length > 1}
                    infinite={imagesData?.length > 1}
                  >
                    {imagesData?.length
                      ? imagesData?.map((item, index) => (
                        <figure className="product_image" key={index}>
                          <img
                            src={
                              item?.image ||
                              "/images/testimonial_attachment_1.jpg"
                            }
                            alt=""
                          />
                        </figure>
                      ))
                      : undefined}
                  </Slider>
                </div>
                <div className="right_info hd_3">
                  <h2>
                    Everherb Pain Relief Tablet - Blend Of 8 Powerful Herbal
                    Ingredients
                  </h2>
                  <p>Ginseng Forte traditional medicine</p>
                  <h3>$ 50.00</h3>
                  <div className="btn_flex">
                    <a
                      onClick={() => navigate("/my-cart")}
                      className="btnn btn_primary br"
                    >
                      Add to Cart
                    </a>
                    <a
                      onClick={() => navigate("/product-checkout")}
                      className="btnn btn_primary"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="detailed_info">
                <div className="hd_3">
                  <h2 className="fw_med">About Product</h2>
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
                <div className="hd_4">
                  <h2 className="fw_med">Key Benefits</h2>
                </div>
                <p>Helps to relieve body pain</p>
                <p>Helps to reduce swelling</p>
                <p>Increases blood circulation</p>
                <p>Eases muscle cramps</p>
                <p>Helps in reducing pain associated with arthritis</p>
                <div className="hd_4">
                  <h2 className="fw_med">How to use the product</h2>
                </div>
                <p>
                  Pour 8-10 drops of the product into your palm and massage
                  gently into the region where the pain is centred
                </p>
                <p>Apply two times a day</p>
                <p>
                  Do not use the product if it is unsealed at the time of
                  purchase
                </p>
              </div>
              <hr />
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
        </main >
      </Layout >
    </>
  );
};
