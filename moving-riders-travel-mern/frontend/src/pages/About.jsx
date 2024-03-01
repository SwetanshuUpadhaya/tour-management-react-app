import React from "react";
import CommonSection from "./../shared/CommonSection";
import { Container, Row, Col } from "reactstrap";

import Newsletter from "./../shared/Newsletter";
import Subtitle from "../shared/Subtitle";
import experienceImg from "../assets/images/experience.png";

const About = () => {
  return (
    <div>
      {" "}
      <>
        <CommonSection title={"About us"} />
        <section>
          <Container>
            <Row>
              <Col lg="6">
                <div className="experience_content">
                  <Subtitle subtitle={"Experience"} />

                  <h2>
                    With our all experience <br /> we will serve you
                  </h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                    <br /> Eligendi eius fugit iste facilis, odio soluta ipsam
                    harum animi consequatur, sunt quo similique sapiente
                    voluptatem placeat, unde nesciunt nobis enim accusantium?
                  </p>
                </div>

                <div className="counter_wrapper d-flex align-items-center gap-5">
                  <div className="counter_box">
                    <span>12k+</span>
                    <h6>Successful Trip</h6>
                  </div>
                  <div className="counter_box">
                    <span>2k+</span>
                    <h6>Regular client</h6>
                  </div>
                  <div className="counter_box">
                    <span>15</span>
                    <h6>Years experience</h6>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div className="experience_img">
                  <img src={experienceImg} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Newsletter />
      </>
    </div>
  );
};

export default About;
