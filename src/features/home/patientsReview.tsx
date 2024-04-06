/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef } from "react";
import Slider from "react-slick";

export default function PatientReview() {
  const sliderRef = useRef<Slider>(null);

  const reviewData = [
    {
      id: 1,
      image: "/static/images/testi_attachment_01.png",
      desc: `“It is a long established fact that a reader will be
        distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that.”`,
      name: "Chloe Kim",
    },
    {
      id: 2,
      image: "/static/images/testi_attachment_01.png",
      desc: `“It is a long established fact that a reader will be
        distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that.”`,
      name: "Chloe Kim",
    },
    {
      id: 3,
      image: "/static/images/testi_attachment_01.png",
      desc: `“It is a long established fact that a reader will be
        distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that.”`,
      name: "Chloe Kim",
    },
  ];

  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div className="swiper_btns prev" onClick={onClick}>
        <div
          onClick={() =>
            // @ts-ignore
            goToSlide((sliderRef.current?.slickCurrentSlide ?? 0) - 1)
          }
          className="swiper-button-prev"
        ></div>
      </div>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div className="swiper_btns next" onClick={onClick}>
        <div
          onClick={() =>
            // @ts-ignore
            goToSlide((sliderRef.current?.slickCurrentSlide ?? 0) + 1)
          }
          className="swiper-button-next"
        ></div>
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section className="testimonial_sc u_spc">
      <div className="conta_iner">
        <div className="gap_p jcsb">
          <div className="left_s">
            <h2>What our patients say about us</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="btn_flex">
              <a href="javascript:void(0)" className="btnn btn_primary">
                Learn More
              </a>
            </div>
          </div>
          <div className="right_s">
            <Slider ref={sliderRef} {...settings} className="testi_swiper hd_4">
              {reviewData?.length
                ? reviewData?.map((item) => (
                  <div key={item?.id} className="testi_slide">
                    <h3>{item?.desc}</h3>
                    <hr />
                    <figure>
                      <img src={item?.image} alt="Image" />
                      <h3>{item?.name}</h3>
                    </figure>
                  </div>
                ))
                : undefined}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
