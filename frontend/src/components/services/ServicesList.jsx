import React from "react";
import ServicesCard from "./ServicesCard";
import { Col } from "reactstrap";

import weatherImg from "./../../assets/images/weather.png";
import guideImg from "./../../assets/images/guide.png";
import customizationImg from "./../../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "پیش‌بینی آب‌وهوا",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی از صنعت چاپ.",
  },
  {
    imgUrl: guideImg,
    title: "بهترین راهنمای تور",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی از صنعت چاپ.",
  },
  {
    imgUrl: customizationImg,
    title: "سفارشی‌سازی",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی از صنعت چاپ.",
  },
];


function ServicesList() {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6"  sm="12" className="mb-4" key={index}>
          <ServicesCard item={item} />
        </Col>
      ))}
    </>
  );
}

export default ServicesList;
