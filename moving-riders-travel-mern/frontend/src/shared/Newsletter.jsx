import React from "react";
import "./newsletter.css";

import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter_content">
              <h2>Subscribe now to get useful traveling information</h2>

              <div className="newsletter_input">
                <input type="emai" placeholder="Enter your email" />
                <button className="btn newsletter_btn">Subscribe</button>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
                nam quia tempore animi maxime expedita id tenetur voluptatem
                impedit dolores ab, eius itaque numquam officia aliquid veniam
                unde quas eligendi.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter_img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
