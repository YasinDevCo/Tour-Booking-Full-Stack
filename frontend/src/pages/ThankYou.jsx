import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/thank-you.css";

function ThankYou() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="thank__you">
              <span>
                <i className="ri-checkbox-circle-line"></i>
              </span>
              <h1 className="bm-3 fw-semibold">متشکرم</h1>
              <h3 className="bm-4">رزرو تور شما انجام شد.</h3>
              <Button className="btn primary__btn w-25">
                <Link to={"/home"}>بازگشت به خانه</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ThankYou;
