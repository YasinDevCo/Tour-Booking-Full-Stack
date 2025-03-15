import React from "react";
import "./tour-card.css";
import {  CardBody, Card } from "reactstrap";
import { Link } from "react-router-dom";
import calculatedAvgRating from "../utils/avgRating";
 import {} from "react-icons"

function TourCard({ tour }) {
  const { _id, title, photo, price, featured, reviews, city } = tour;
  const { totalRating, avgRating } = calculatedAvgRating(reviews);

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={photo} alt={title} />
          {featured && <span>ویژه</span>}
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between ">
            <span className="tour__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i>
              {city}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i className="ri-star-fill"></i>{" "}
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "امتیازدهی نشده"
              ) : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>
          <h5 className="tour__title">
            <Link to={`/tours/${_id}`}>{title}</Link>
          </h5>
          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
            {price} تومان <span>/به ازای هر نفر</span>
            </h5>

            <button className="btn booking__btn">
              <Link to={`/tours/${_id}`}>رزرو کنید</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default TourCard;
