import React from "react";
import "./footer.css";

import { Col, Container, Row, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

const quick__links = [
  {
    path: "/home",
    display: "خانه",
  },
  {
    path: "/about",
    display: "درباره ما",
  },
  {
    path: "/tours",
    display: "تور‌ها",
  },
];
const quick__links2 = [
  {
    path: "/gallery",
    display: "گالری",
  },
  {
    path: "/login",

    display: "ورود",
  },
  {
    path: "/register",
    display: "ثبت‌نام",
  },
];
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="لوگو" />
              <p>
                لورم ایپسوم دولور، سیت آمت، کانسکتتور ادیپیسینگ الیت. اکس، سد؟
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-github-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">کشف کنید</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0 ">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">فهرست سریع</h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0 ">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">کشف کنید</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  ایمیل:
                </h6>
                <p className="mb-0">Lorem@gmial.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-fill"></i>
                  </span>
                  تلفن:
                </h6>
                <p className="mb-0">09911111111</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  آدرس:
                </h6>
                <p className="mb-0">لورم، ایپسوم دولور.</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              &copy; {year} , توسعه داده شده توسط یاسین با ❤️
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
