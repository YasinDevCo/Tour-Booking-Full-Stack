import React from "react";
import "./../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import hereImg from "../assets/images/hero-img01.jpg";
import hereImg2 from "../assets/images/hero-img02.jpg";
import hereVideo from "../assets/images/hero-video.mp4";
import Subtitle from "../shared/Subtitle";
import worldImg from "../assets/images/world.png";
import SearchBar from "../shared/SearchBar";
import ServicesList from "../components/services/ServicesList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import experienceImg from "../assets/images/experience.png";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";
import Testimonial from "../components/Testimonial/Testimonial";
import NewsLetter from "../shared/NewsLetter";
function Home() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"قبل از سفر بدانید"} />
                  <img src={worldImg} alt="جهان" />
                </div>
                <h1>
                  سفر درها را به سوی ساختن
                  <span className="highlight"> خاطرات</span> باز می‌کند
                </h1>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
                  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                  است.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={hereImg} alt="تصویر قهرمان" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={hereVideo} controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={hereImg2} alt="تصویر قهرمان 2" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle ">آنچه ارائه می‌دهیم</h5>
              <h2 className="services__title">
                بهترین خدمات خود را ارائه می‌دهیم
              </h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"کاوش کنید"} />
              <h2 className="featured__tour-title">تورهای ویژه ما</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"تجربه"} />

                <h2>
                  با تمام تجربه‌های ما
                  <br />
                  به شما خدمت خواهیم کرد
                </h2>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی.
                  <br />
                  لورم ایپسوم متن ساختگی از صنعت چاپ.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>۱۲هزار+</span>
                  <h6>سفر موفق</h6>
                </div>
                <div className="counter__box">
                  <span>۱۰هزار+</span>
                  <h6>مشتریان دائمی</h6>
                </div>
                <div className="counter__box">
                  <span>۲۰</span>
                  <h6>سال تجربه</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"گالری"} />
              <h2>گالری تور مشتریان ما را ببینید</h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="slider">
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"عشق هواداران"} />
              <h2 className="testimonial__title">نظر هواداران ما درباره ما</h2>
            </Col>
            <Col lg="12">
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>سوی

      <NewsLetter />
    </>
  );
}

export default Home;
