import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>برای دریافت جدیدترین اخبار و پیشنهادات، مشترک شوید</h2>
              <div className="newsletter__input">
                <input type="email" placeholder="ایمیل خود را وارد کنید" />
                <button className="btn primary__btn">اشتراک</button>
              </div>
              <p>
                به ما بپیوندید تا از پیشنهادات ویژه، اخبار مربوط به سفر و راهنمایی‌های کاربردی مطلع شوید!
              </p>
            </div>
          </Col>

          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="گردشگر مرد" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
