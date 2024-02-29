import React from "react";
import { Row } from "reactstrap";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplayspeed: 2000,
    slideToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slideToShow: 2,
          slideToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slideToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <Row lg="3" className="d-flex align-items-center justify-content-center">
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit
            saepe quisquam rem dignissimos? Perferendis assumenda saepe neque
            ipsum illo illum est obcaecati sit! Sit earum eligendi praesentium
            quae distinctio!
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">John Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit
            saepe quisquam rem dignissimos? Perferendis assumenda saepe neque
            ipsum illo illum est obcaecati sit! Sit earum eligendi praesentium
            quae distinctio!
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">John Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit
            saepe quisquam rem dignissimos? Perferendis assumenda saepe neque
            ipsum illo illum est obcaecati sit! Sit earum eligendi praesentium
            quae distinctio!
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">John Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </Row>
      <Row lg="3" className="d-flex align-items-center justify-content-center">
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit
            saepe quisquam rem dignissimos? Perferendis assumenda saepe neque
            ipsum illo illum est obcaecati sit! Sit earum eligendi praesentium
            quae distinctio!
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">John Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit
            saepe quisquam rem dignissimos? Perferendis assumenda saepe neque
            ipsum illo illum est obcaecati sit! Sit earum eligendi praesentium
            quae distinctio!
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">John Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit
            saepe quisquam rem dignissimos? Perferendis assumenda saepe neque
            ipsum illo illum est obcaecati sit! Sit earum eligendi praesentium
            quae distinctio!
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">John Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </Row>
      <Row lg="3" className="d-flex align-items-center justify-content-center">
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit
            saepe quisquam rem dignissimos? Perferendis assumenda saepe neque
            ipsum illo illum est obcaecati sit! Sit earum eligendi praesentium
            quae distinctio!
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">John Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit
            saepe quisquam rem dignissimos? Perferendis assumenda saepe neque
            ipsum illo illum est obcaecati sit! Sit earum eligendi praesentium
            quae distinctio!
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">John Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit
            saepe quisquam rem dignissimos? Perferendis assumenda saepe neque
            ipsum illo illum est obcaecati sit! Sit earum eligendi praesentium
            quae distinctio!
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">John Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </Row>
      <Row lg="3" className="d-flex align-items-center justify-content-center">
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit
            saepe quisquam rem dignissimos? Perferendis assumenda saepe neque
            ipsum illo illum est obcaecati sit! Sit earum eligendi praesentium
            quae distinctio!
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">John Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit
            saepe quisquam rem dignissimos? Perferendis assumenda saepe neque
            ipsum illo illum est obcaecati sit! Sit earum eligendi praesentium
            quae distinctio!
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">John Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit
            saepe quisquam rem dignissimos? Perferendis assumenda saepe neque
            ipsum illo illum est obcaecati sit! Sit earum eligendi praesentium
            quae distinctio!
          </p>

          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">John Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </Row>
    </Slider>
  );
};

export default Testimonials;
