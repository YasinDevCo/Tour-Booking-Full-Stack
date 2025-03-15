import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="slider">
      <div className="testimonial py-4 px-3">
        <p>
          لورم ایپسوم دولور سیت آمت، کانسکتتور ادیپیسینگ الیت. دولورم
          ویتای اکوساموس فوگا کویبدام پلیسکات وریتاتیس آسپرناتور سد، آسپریورس
          ایونیت کواد ولوتپاتس ایپرفرندیس آلیکان کو، افیشیوس ماکسیمه
          اینونتور وولپتاته ایندیکانت.
        </p>
        <div className="d-flex align-items-center gap-4 m-3">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">یاسین آبر</h6>
            <p>مشتری</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          لورم ایپسوم دولور سیت آمت، کانسکتتور ادیپیسینگ الیت. دولورم
          ویتای اکوساموس فوگا کویبدام پلیسکات وریتاتیس آسپرناتور سد، آسپریورس
          ایونیت کواد ولوتپاتس ایپرفرندیس آلیکان کو، افیشیوس ماکسیمه
          اینونتور وولپتاته ایندیکانت.
        </p>
        <div className="d-flex align-items-center gap-4 m-3">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">یاسین آبر</h6>
            <p>مشتری</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          لورم ایپسوم دولور سیت آمت، کانسکتتور ادیپیسینگ الیت. دولورم
          ویتای اکوساموس فوگا کویبدام پلیسکات وریتاتیس آسپرناتور سد، آسپریورس
          ایونیت کواد ولوتپاتس ایپرفرندیس آلیکان کو، افیشیوس ماکسیمه
          اینونتور وولپتاته ایندیکانت.
        </p>
        <div className="d-flex align-items-center gap-4 m-3">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">یاسین آبر</h6>
            <p>مشتری</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          لورم ایپسوم دولور سیت آمت، کانسکتتور ادیپیسینگ الیت. دولورم
          ویتای اکوساموس فوگا کویبدام پلیسکات وریتاتیس آسپرناتور سد، آسپریورس
          ایونیت کواد ولوتپاتس ایپرفرندیس آلیکان کو، افیشیوس ماکسیمه
          اینونتور وولپتاته ایندیکانت.
        </p>
        <div className="d-flex align-items-center gap-4 m-3">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">یاسین آبر</h6>
            <p>مشتری</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          لورم ایپسوم دولور سیت آمت، کانسکتتور ادیپیسینگ الیت. دولورم
          ویتای اکوساموس فوگا کویبدام پلیسکات وریتاتیس آسپرناتور سد، آسپریورس
          ایونیت کواد ولوتپاتس ایپرفرندیس آلیکان کو، افیشیوس ماکسیمه
          اینونتور وولپتاته ایندیکانت.
        </p>
        <div className="d-flex align-items-center gap-4 m-3">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">یاسین آبر</h6>
            <p>مشتری</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          لورم ایپسوم دولور سیت آمت، کانسکتتور ادیپیسینگ الیت. دولورم
          ویتای اکوساموس فوگا کویبدام پلیسکات وریتاتیس آسپرناتور سد، آسپریورس
          ایونیت کواد ولوتپاتس ایپرفرندیس آلیکان کو، افیشیوس ماکسیمه
          اینونتور وولپتاته ایندیکانت.
        </p>
        <div className="d-flex align-items-center gap-4 m-3">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">یاسین آبر</h6>
            <p>مشتری</p>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default Testimonial;
