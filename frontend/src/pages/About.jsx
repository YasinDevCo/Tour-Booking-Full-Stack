import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import {
  FaFacebook,
  FaHeadset,
  FaInstagram,
  FaPlane,
  FaTwitter,
  FaUserTie,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/about.css";
import tour1 from "../assets/images/tour-img01.jpg";
import tour2 from "../assets/images/tour-img02.jpg";
import tour3 from "../assets/images/tour-img03.jpg";
import tour4 from "../assets/images/tour-img04.jpg";
import tour5 from "../assets/images/tour-img05.jpg";
import tour6 from "../assets/images/tour-img06.jpg";
import tour7 from "../assets/images/tour-img07.jpg";
import Subtitle from "../shared/Subtitle";
// داده‌های FAQ به صورت آرایه
const faqData = [
  {
    question: "چند روز قبل از پرواز، بلیط هواپیما را بخریم؟",
    answer:
      "امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر در ایام پرسفر نظیر تعطیلات را دارید، باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید.",
  },
  {
    question: "در هر پرواز، میزان بار مجاز چقدر است؟",
    answer:
      "میزان مجاز بار به کلاس پرواز و کلاس نرخی بلیط بستگی دارد. هنگام خرید آنلاین بلیط هواپیما می‌توانید میزان بار مجاز را در اطلاعات بلیط ببینید. طبیعی است که اگر میزان بارتان بیش از حد مجاز باشد، باید جریمه پرداخت کنید.",
  },
  {
    question: "نرخ بلیط هواپیما برای نوزادان و کودکان زیر ۱۲ سال چگونه است؟",
    answer:
      "نرخ بلیط کودکان و نوزادان به کلاس پرواز و کلاس نرخی بستگی دارد. به صورت کلی، قیمت بلیط مسافر کودک (2 الی 12 سال) معادل 50 الی 100 درصد بلیط بزرگسال، و قیمت بلیط مسافر نوزاد (تا دو سال) 10 درصد بلیط بزرگسال است. هنگام تهیه بلیط هواپیما به این نکته توجه داشته باشید.",
  },
  {
    question: "رزرو آنلاین بلیط هواپیما هزینه بیشتری از خرید حضوری دارد؟",
    answer:
      "خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخوردار هستید.",
  },
  {
    question:
      "آیا پس از خرید اینترنتی بلیط هواپیما امکان استرداد آن وجود دارد؟",
    answer:
      "وقتی از علی‌بابا یعنی بهترین سایت خرید بلیط هواپیما بلیطتان را رزرو می‌کنید، خیالتان آسوده است که امکان استرداد وجه در صورت کنسل کردن بلیط وجود دارد. میزان جریمه را هم هنگام رزرو آنلاین بلیط هواپیما در قسمت قوانین استرداد بخوانید. میزان جریمه به نوع بلیط، کلاس پروازی، کلاس نرخی و... بستگی دارد.",
  },
  {
    question:
      "آیا پس از خرید بلیط هواپیما، امکان تغییر نام یا نام خانوادگی وجود دارد؟",
    answer:
      "در پرواز داخلی یا خارجی، امکان تغییر نام و نام خانوادگی در بلیط سیستمی وجود ندارد. اما در بلیط چارتر، برخی از چارترکننده‌ها این تغییر را می‌پذیرند.",
  },
  {
    question:
      "هنگامی که از سایت خرید بلیط هواپیما رزرو بلیط را انجام می‌دهیم، امکان انتخاب صندلی مورد نظرمان وجود دارد؟",
    answer:
      "خیر؛ هنگام رزرو بلیط هواپیما داخلی یا خارجی امکان انتخاب صندلی وجود ندارد. البته در زمان چک‌این انتخاب محدوده صندلی امکان‌پذیر است.",
  },
];

// کامپوننت تک آیتم FAQ با انیمیشن‌های جذاب
function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <h4 className="faq-question" onClick={() => setOpen(!open)}>
        <span className={`arrow ${open ? "open" : ""}`}></span>
        {question}
      </h4>
      <div className={`faq-answer-wrapper ${open ? "open" : ""}`}>
        <p className="faq-answer">{answer}</p>
      </div>
    </div>
  );
}

// کامپوننت FAQ اصلی
function FAQ() {
  return (
    <div className="faq-container">
      <Subtitle subtitle="سوالات متداول" />
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

// کامپوننت اصلی About
function About() {
  // تنظیمات اسلایدشو
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <section className="about-section">
      <Container>
        {/* اسلایدشو تصاویر تورها */}
        <Row className="mb-5">
          <Col xs="12">
            <Subtitle subtitle="تورهای ما" />
            <Slider {...sliderSettings}>
              <div>
                <img
                  src={tour1}
                  alt="تور جزایر بالی"
                  className="slider-image"
                />
              </div>
              <div>
                <img src={tour2} alt="تور مادرید" className="slider-image" />
              </div>
              <div>
                <img src={tour3} alt="تور ژاپن" className="slider-image" />
              </div>
              <div>
                <img src={tour4} alt="تور " className="slider-image" />
              </div>{" "}
              <div>
                <img src={tour5} alt="تور " className="slider-image" />
              </div>{" "}
              <div>
                <img src={tour6} alt="تور " className="slider-image" />
              </div>{" "}
              <div>
                <img src={tour7} alt="تور " className="slider-image" />
              </div>
            </Slider>
          </Col>
        </Row>

        {/* بخش معرفی شرکت */}
        <Row className="mb-5 align-items-center">
          <Col xs="12" md="6" className="about-intro">
            <Subtitle subtitle="درباره ما" />
            <p className="about-text">
              ما یک شرکت پیشرو در ارائه تورهای مسافرتی با تجربه‌ای طولانی در
              زمینه گردشگری هستیم. از تورهای لوکس تا ماجراجویی‌های خاص، هدف ما
              این است که تجربه‌ای منحصر به فرد و خاطره‌انگیز برای شما بسازیم.
            </p>
          </Col>
          <Col xs="12" md="6">
            <img
              src={tour2}
              alt="تورهای مسافرتی"
              className="about-image animated-box"
            />
          </Col>
        </Row>

        {/* بخش چرا ما؟ */}
        <Row className="mb-5 ">
          {/* تجربه و تخصص */}
          <Col xs="12" md="4">
            <div className="reason animated-box">
              <FaUserTie className="reason-icon" />
              <h4>تجربه و تخصص</h4>
              <p>
                با سال‌ها تجربه در صنعت گردشگری، تورهای ما دقیقاً مطابق با
                نیازهای شما طراحی می‌شود.
              </p>
            </div>
          </Col>

          {/* تورهای سفارشی */}

          <Col xs="12" md="4">
            <div className="reason animated-box">
              <FaPlane className="reason-icon" />
              <h4>تورهای سفارشی</h4>
              <p>
                با توجه به علایق شما، تورهای کاملاً سفارشی و ویژه ایجاد می‌کنیم.
              </p>
            </div>
          </Col>

          {/* پشتیبانی 24/7 */}
          <Col xs="12" md="4">
            <div className="reason animated-box">
              <FaHeadset className="reason-icon" />
              <h4>پشتیبانی 24/7</h4>
              <p>
                تیم پشتیبانی ما همیشه آماده پاسخگویی به سوالات و نیازهای شماست.
              </p>
            </div>
          </Col>
        </Row>
        {/* بخش سوالات متداول (FAQ) */}
        <Row className="mb-5">
          <Col xs="12">
            <FAQ />
          </Col>
        </Row>
        <Row className="mb-5 contact-social">
          {/* بخش تماس با ما */}
          <Col
            xs="12"
            md="6"
            className="d-flex flex-column align-items-start contact-section"
          >
            <h4>تماس با ما</h4>{" "}
            <p className="contact-text">
              برای هرگونه سوال یا درخواست، با ما تماس بگیرید. تیم پشتیبانی ما
              آماده پاسخگویی است.
            </p>
            <a href="mailto:support@tourwebsite.com" className="primary__btn">
              تماس با ما
            </a>
          </Col>
          {/* بخش شبکه‌های اجتماعی */}
          <Col
            xs="12"
            md="6"
            className="d-flex flex-column align-items-start social-section"
          >
            <h4>ما را در شبکه‌های اجتماعی دنبال کنید</h4>{" "}
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaFacebook size={40} className="social-icon" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaInstagram size={40} className="social-icon" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaTwitter size={40} className="social-icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
